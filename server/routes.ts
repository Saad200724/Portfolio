import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertProjectSchema, 
  insertEcaSchema,
  insertSkillCategorySchema,
  insertSkillSchema,
  insertAdditionalSkillSchema
} from "@shared/schema";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      try {
        const emailCommand = `python3 -c "
import sys
sys.path.append('server')
from email_service import send_contact_email, send_confirmation_email
name = '${validatedData.name.replace(/'/g, "\\'")}' 
email = '${validatedData.email}'
message_text = '''${validatedData.message.replace(/'/g, "\\'")}'''
send_contact_email(name, email, message_text)
send_confirmation_email(name, email)
"`;
        
        await execAsync(emailCommand);
      } catch (emailError) {
        console.log("Email sending failed:", emailError);
      }
      
      res.json({ success: true, id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ success: false, message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ success: false, message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.json({ success: true, project });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create project" });
      }
    }
  });

  app.put("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.updateProject(id, req.body);
      if (!project) {
        return res.status(404).json({ success: false, message: "Project not found" });
      }
      res.json({ success: true, project });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update project" });
    }
  });

  app.delete("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteProject(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Project not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete project" });
    }
  });

  app.get("/api/ecas", async (req, res) => {
    try {
      const ecaList = await storage.getAllEcas();
      res.json(ecaList);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch ECAs" });
    }
  });

  app.get("/api/ecas/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const eca = await storage.getEca(id);
      if (!eca) {
        return res.status(404).json({ success: false, message: "ECA not found" });
      }
      res.json(eca);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch ECA" });
    }
  });

  app.post("/api/ecas", async (req, res) => {
    try {
      const validatedData = insertEcaSchema.parse(req.body);
      const eca = await storage.createEca(validatedData);
      res.json({ success: true, eca });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create ECA" });
      }
    }
  });

  app.put("/api/ecas/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const eca = await storage.updateEca(id, req.body);
      if (!eca) {
        return res.status(404).json({ success: false, message: "ECA not found" });
      }
      res.json({ success: true, eca });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update ECA" });
    }
  });

  app.delete("/api/ecas/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteEca(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "ECA not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete ECA" });
    }
  });

  app.get("/api/skill-categories", async (req, res) => {
    try {
      const categories = await storage.getAllSkillCategories();
      const categoriesWithSkills = await Promise.all(
        categories.map(async (category) => {
          const categorySkills = await storage.getSkillsByCategory(category.id);
          return { ...category, skills: categorySkills };
        })
      );
      res.json(categoriesWithSkills);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch skill categories" });
    }
  });

  app.post("/api/skill-categories", async (req, res) => {
    try {
      const validatedData = insertSkillCategorySchema.parse(req.body);
      const category = await storage.createSkillCategory(validatedData);
      res.json({ success: true, category });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create skill category" });
      }
    }
  });

  app.put("/api/skill-categories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.updateSkillCategory(id, req.body);
      if (!category) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
      res.json({ success: true, category });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update category" });
    }
  });

  app.delete("/api/skill-categories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteSkillCategory(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete category" });
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      const allSkills = await storage.getAllSkills();
      res.json(allSkills);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch skills" });
    }
  });

  app.post("/api/skills", async (req, res) => {
    try {
      const validatedData = insertSkillSchema.parse(req.body);
      const skill = await storage.createSkill(validatedData);
      res.json({ success: true, skill });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create skill" });
      }
    }
  });

  app.put("/api/skills/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const skill = await storage.updateSkill(id, req.body);
      if (!skill) {
        return res.status(404).json({ success: false, message: "Skill not found" });
      }
      res.json({ success: true, skill });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update skill" });
    }
  });

  app.delete("/api/skills/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteSkill(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Skill not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete skill" });
    }
  });

  app.get("/api/additional-skills", async (req, res) => {
    try {
      const skills = await storage.getAllAdditionalSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch additional skills" });
    }
  });

  app.post("/api/additional-skills", async (req, res) => {
    try {
      const validatedData = insertAdditionalSkillSchema.parse(req.body);
      const skill = await storage.createAdditionalSkill(validatedData);
      res.json({ success: true, skill });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create additional skill" });
      }
    }
  });

  app.delete("/api/additional-skills/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteAdditionalSkill(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Additional skill not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete additional skill" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
