import { 
  contactMessages, 
  projects, 
  ecas, 
  skillCategories, 
  skills, 
  additionalSkills,
  type ContactMessage, 
  type InsertContactMessage,
  type Project,
  type InsertProject,
  type Eca,
  type InsertEca,
  type SkillCategory,
  type InsertSkillCategory,
  type Skill,
  type InsertSkill,
  type AdditionalSkill,
  type InsertAdditionalSkill
} from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq } from "drizzle-orm";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

export interface IStorage {
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  getAllEcas(): Promise<Eca[]>;
  getEca(id: number): Promise<Eca | undefined>;
  createEca(eca: InsertEca): Promise<Eca>;
  updateEca(id: number, eca: Partial<InsertEca>): Promise<Eca | undefined>;
  deleteEca(id: number): Promise<boolean>;
  
  getAllSkillCategories(): Promise<SkillCategory[]>;
  getSkillCategory(id: number): Promise<SkillCategory | undefined>;
  createSkillCategory(category: InsertSkillCategory): Promise<SkillCategory>;
  updateSkillCategory(id: number, category: Partial<InsertSkillCategory>): Promise<SkillCategory | undefined>;
  deleteSkillCategory(id: number): Promise<boolean>;
  
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(categoryId: number): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
  
  getAllAdditionalSkills(): Promise<AdditionalSkill[]>;
  createAdditionalSkill(skill: InsertAdditionalSkill): Promise<AdditionalSkill>;
  deleteAdditionalSkill(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db.insert(contactMessages).values(insertMessage).returning();
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updated] = await db.update(projects).set(project).where(eq(projects.id, id)).returning();
    return updated;
  }

  async deleteProject(id: number): Promise<boolean> {
    const result = await db.delete(projects).where(eq(projects.id, id)).returning();
    return result.length > 0;
  }

  async getAllEcas(): Promise<Eca[]> {
    return await db.select().from(ecas);
  }

  async getEca(id: number): Promise<Eca | undefined> {
    const [eca] = await db.select().from(ecas).where(eq(ecas.id, id));
    return eca;
  }

  async createEca(eca: InsertEca): Promise<Eca> {
    const [newEca] = await db.insert(ecas).values(eca).returning();
    return newEca;
  }

  async updateEca(id: number, eca: Partial<InsertEca>): Promise<Eca | undefined> {
    const [updated] = await db.update(ecas).set(eca).where(eq(ecas.id, id)).returning();
    return updated;
  }

  async deleteEca(id: number): Promise<boolean> {
    const result = await db.delete(ecas).where(eq(ecas.id, id)).returning();
    return result.length > 0;
  }

  async getAllSkillCategories(): Promise<SkillCategory[]> {
    return await db.select().from(skillCategories);
  }

  async getSkillCategory(id: number): Promise<SkillCategory | undefined> {
    const [category] = await db.select().from(skillCategories).where(eq(skillCategories.id, id));
    return category;
  }

  async createSkillCategory(category: InsertSkillCategory): Promise<SkillCategory> {
    const [newCategory] = await db.insert(skillCategories).values(category).returning();
    return newCategory;
  }

  async updateSkillCategory(id: number, category: Partial<InsertSkillCategory>): Promise<SkillCategory | undefined> {
    const [updated] = await db.update(skillCategories).set(category).where(eq(skillCategories.id, id)).returning();
    return updated;
  }

  async deleteSkillCategory(id: number): Promise<boolean> {
    await db.delete(skills).where(eq(skills.categoryId, id));
    const result = await db.delete(skillCategories).where(eq(skillCategories.id, id)).returning();
    return result.length > 0;
  }

  async getAllSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getSkillsByCategory(categoryId: number): Promise<Skill[]> {
    return await db.select().from(skills).where(eq(skills.categoryId, categoryId));
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const [updated] = await db.update(skills).set(skill).where(eq(skills.id, id)).returning();
    return updated;
  }

  async deleteSkill(id: number): Promise<boolean> {
    const result = await db.delete(skills).where(eq(skills.id, id)).returning();
    return result.length > 0;
  }

  async getAllAdditionalSkills(): Promise<AdditionalSkill[]> {
    return await db.select().from(additionalSkills);
  }

  async createAdditionalSkill(skill: InsertAdditionalSkill): Promise<AdditionalSkill> {
    const [newSkill] = await db.insert(additionalSkills).values(skill).returning();
    return newSkill;
  }

  async deleteAdditionalSkill(id: number): Promise<boolean> {
    const result = await db.delete(additionalSkills).where(eq(additionalSkills.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
