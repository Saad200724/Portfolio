import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Portfolio data types (client-side only)
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'backend' | 'frontend' | 'data';
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  imageUrl: string;
};

export type Skill = {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
  percentage: number;
};

export type SkillCategory = {
  name: string;
  icon: string;
  skills: Skill[];
};

export type Experience = {
  role: string;
  duration: string;
  description: string;
};
