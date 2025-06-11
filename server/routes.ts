import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
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
        // Continue even if email fails - the message is still saved
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

  // Get all contact messages (for admin purposes)
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

  const httpServer = createServer(app);
  return httpServer;
}
