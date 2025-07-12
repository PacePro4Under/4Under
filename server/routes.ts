import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertDemoRequestSchema, 
  insertContactMessageSchema,
  updateSiteContentSchema
} from "@shared/schema";
import { z } from "zod";

// Simple session store for admin authentication
const adminSessions = new Map<string, { email: string; expires: Date }>();

// Generate session token
function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Middleware to check admin authentication
function requireAdminAuth(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  console.log('Auth check - Headers:', { authorization: authHeader });
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Auth failed - No valid authorization header');
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const token = authHeader.substring(7);
  const session = adminSessions.get(token);
  console.log('Auth check - Token:', token, 'Session found:', !!session, 'Total sessions:', adminSessions.size);
  
  if (!session || session.expires < new Date()) {
    if (session) adminSessions.delete(token);
    console.log('Auth failed - Session not found or expired');
    return res.status(401).json({ success: false, message: 'Session expired' });
  }

  req.adminUser = { email: session.email };
  console.log('Auth success - User:', session.email);
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request submission
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      // In a real implementation, this would integrate with Google Sheets
      // and send notification emails
      console.log("Demo request received:", demoRequest);
      
      res.json({ 
        success: true, 
        message: "Demo request submitted successfully",
        id: demoRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating demo request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // In a real implementation, this would send notification emails
      console.log("Contact message received:", contactMessage);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully",
        id: contactMessage.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Admin Authentication Routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Email and password are required" 
        });
      }

      const adminUser = await storage.getAdminUserByEmail(email);
      
      if (!adminUser || adminUser.password !== password) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid credentials" 
        });
      }

      // Generate session token (expires in 24 hours)
      const token = generateSessionToken();
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
      
      adminSessions.set(token, { email: adminUser.email, expires });
      console.log('Login success - Generated token:', token, 'Total sessions:', adminSessions.size);

      res.json({ 
        success: true, 
        token,
        user: { email: adminUser.email }
      });
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  app.post("/api/admin/logout", requireAdminAuth, async (req: any, res) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader.substring(7);
      adminSessions.delete(token);
      
      res.json({ success: true, message: "Logged out successfully" });
    } catch (error) {
      console.error("Error during admin logout:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Content Management Routes
  app.get("/api/admin/content", requireAdminAuth, async (req, res) => {
    try {
      const { page } = req.query;
      
      let content;
      if (page) {
        content = await storage.getSiteContentByPage(page as string);
      } else {
        content = await storage.getAllSiteContent();
      }
      
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  app.put("/api/admin/content/:key", requireAdminAuth, async (req, res) => {
    try {
      const { key } = req.params;
      const validatedData = updateSiteContentSchema.parse(req.body);
      
      const updatedContent = await storage.updateSiteContent(key, validatedData);
      
      res.json({ 
        success: true, 
        message: "Content updated successfully",
        content: updatedContent 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message.includes('not found')) {
        res.status(404).json({ 
          success: false, 
          message: error.message 
        });
      } else {
        console.error("Error updating content:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get current site content for public consumption
  app.get("/api/content", async (req, res) => {
    try {
      const { page, key } = req.query;
      
      let content;
      if (key) {
        content = await storage.getSiteContentByKey(key as string);
      } else if (page) {
        content = await storage.getSiteContentByPage(page as string);
      } else {
        content = await storage.getAllSiteContent();
      }
      
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Admin endpoints to view submissions (for development/testing)
  app.get("/api/admin/demo-requests", requireAdminAuth, async (req, res) => {
    try {
      const requests = await storage.getAllDemoRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching demo requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  app.get("/api/admin/contact-messages", requireAdminAuth, async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
