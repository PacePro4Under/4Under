import { 
  users, 
  demoRequests, 
  contactMessages,
  adminUsers,
  siteContent,
  type User, 
  type InsertUser,
  type DemoRequest,
  type InsertDemoRequest,
  type ContactMessage,
  type InsertContactMessage,
  type AdminUser,
  type InsertAdminUser,
  type SiteContent,
  type InsertSiteContent,
  type UpdateSiteContent
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllDemoRequests(): Promise<DemoRequest[]>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Admin user management
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(adminUser: InsertAdminUser): Promise<AdminUser>;
  
  // Content management
  getAllSiteContent(): Promise<SiteContent[]>;
  getSiteContentByKey(key: string): Promise<SiteContent | undefined>;
  getSiteContentByPage(page: string): Promise<SiteContent[]>;
  updateSiteContent(key: string, content: UpdateSiteContent): Promise<SiteContent>;
  createSiteContent(content: InsertSiteContent): Promise<SiteContent>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private demoRequests: Map<number, DemoRequest>;
  private contactMessages: Map<number, ContactMessage>;
  private adminUsers: Map<number, AdminUser>;
  private siteContent: Map<number, SiteContent>;
  private currentUserId: number;
  private currentDemoRequestId: number;
  private currentContactMessageId: number;
  private currentAdminUserId: number;
  private currentSiteContentId: number;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.contactMessages = new Map();
    this.adminUsers = new Map();
    this.siteContent = new Map();
    this.currentUserId = 1;
    this.currentDemoRequestId = 1;
    this.currentContactMessageId = 1;
    this.currentAdminUserId = 1;
    this.currentSiteContentId = 1;

    // Initialize with default admin user
    this.initializeAdminUser();
    this.initializeDefaultContent();
  }

  private async initializeAdminUser() {
    const defaultAdmin: AdminUser = {
      id: this.currentAdminUserId++,
      email: "camcox1997@gmail.com",
      password: "Dapper911!", // In production, this should be hashed
      isActive: true,
      createdAt: new Date()
    };
    this.adminUsers.set(defaultAdmin.id, defaultAdmin);
  }

  private async initializeDefaultContent() {
    const defaultContent: SiteContent[] = [
      // Home page content
      {
        id: this.currentSiteContentId++,
        key: "home_hero_title",
        value: "Built by pros, for pros.",
        contentType: "text",
        page: "home",
        section: "hero",
        label: "Main Headline",
        description: "The main hero title on the homepage",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_hero_subtitle",
        value: "Track pace. Improve experience. No GPS required.",
        contentType: "text",
        page: "home",
        section: "hero",
        label: "Hero Subtitle",
        description: "The green subtitle text below the main headline",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_hero_description_1",
        value: "4Under is a low-cost, browser-based pace of play system built by golf professionals for golf professionals. It gives your marshals and play coordinators the tools they need to monitor, manage, and improve pace of play in real time—without relying on GPS, sensors, or expensive technology.",
        contentType: "text",
        page: "home",
        section: "hero",
        label: "Main Description (First Paragraph)",
        description: "First paragraph of the hero description",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_hero_description_2",
        value: "Whether you're running daily tee times, split tees, or shotgun events, 4Under helps you solve pace problems before they start and gives your team the structure to operate with confidence.",
        contentType: "text",
        page: "home",
        section: "hero",
        label: "Main Description (Second Paragraph)",
        description: "Second paragraph of the hero description",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_trust_section_title",
        value: "What Makes 4Under Different",
        contentType: "text",
        page: "home",
        section: "trust",
        label: "Trust Section Title",
        description: "Title for the 'What Makes 4Under Different' section",
        updatedAt: new Date()
      },
      // Contact information
      {
        id: this.currentSiteContentId++,
        key: "contact_email",
        value: "cameron.cox.golf@gmail.com",
        contentType: "text",
        page: "contact",
        section: "info",
        label: "Contact Email",
        description: "Main contact email address",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "contact_page_title",
        value: "Have a question? Want to talk through your course's pace challenges?",
        contentType: "text",
        page: "contact",
        section: "hero",
        label: "Contact Page Title",
        description: "Main title on the contact page",
        updatedAt: new Date()
      },
      // Demo page content
      {
        id: this.currentSiteContentId++,
        key: "demo_page_title",
        value: "Start your free 2-week trial",
        contentType: "text",
        page: "demo",
        section: "hero",
        label: "Demo Page Title",
        description: "Main title on the demo request page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "demo_page_subtitle",
        value: "Includes full access + a personal onboarding session.",
        contentType: "text",
        page: "demo",
        section: "hero",
        label: "Demo Page Subtitle",
        description: "Subtitle on the demo request page",
        updatedAt: new Date()
      }
    ];

    defaultContent.forEach(content => {
      this.siteContent.set(content.id, content);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = this.currentDemoRequestId++;
    const request: DemoRequest = { 
      ...insertRequest, 
      id, 
      comments: insertRequest.comments || null,
      createdAt: new Date() 
    };
    this.demoRequests.set(id, request);
    return request;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  // Admin user methods
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    return Array.from(this.adminUsers.values()).find(
      (adminUser) => adminUser.email === email && adminUser.isActive,
    );
  }

  async createAdminUser(insertAdminUser: InsertAdminUser): Promise<AdminUser> {
    const id = this.currentAdminUserId++;
    const adminUser: AdminUser = { 
      ...insertAdminUser, 
      id, 
      isActive: true,
      createdAt: new Date() 
    };
    this.adminUsers.set(id, adminUser);
    return adminUser;
  }

  // Content management methods
  async getAllSiteContent(): Promise<SiteContent[]> {
    return Array.from(this.siteContent.values());
  }

  async getSiteContentByKey(key: string): Promise<SiteContent | undefined> {
    return Array.from(this.siteContent.values()).find(
      (content) => content.key === key,
    );
  }

  async getSiteContentByPage(page: string): Promise<SiteContent[]> {
    return Array.from(this.siteContent.values()).filter(
      (content) => content.page === page,
    );
  }

  async updateSiteContent(key: string, updateContent: UpdateSiteContent): Promise<SiteContent> {
    const existingContent = await this.getSiteContentByKey(key);
    if (!existingContent) {
      throw new Error(`Content with key ${key} not found`);
    }

    const updatedContent: SiteContent = {
      ...existingContent,
      value: updateContent.value,
      updatedAt: new Date()
    };

    this.siteContent.set(existingContent.id, updatedContent);
    return updatedContent;
  }

  async createSiteContent(insertContent: InsertSiteContent): Promise<SiteContent> {
    const id = this.currentSiteContentId++;
    const content: SiteContent = { 
      id,
      key: insertContent.key,
      value: insertContent.value,
      contentType: insertContent.contentType || "text",
      page: insertContent.page,
      section: insertContent.section,
      label: insertContent.label,
      description: insertContent.description || null,
      updatedAt: new Date() 
    };
    this.siteContent.set(id, content);
    return content;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const [request] = await db.insert(demoRequests).values({
      ...insertRequest,
      comments: insertRequest.comments || null,
    }).returning();
    return request;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db.insert(contactMessages).values(insertMessage).returning();
    return message;
  }

  async getAllDemoRequests(): Promise<DemoRequest[]> {
    return await db.select().from(demoRequests);
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [adminUser] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return adminUser || undefined;
  }

  async createAdminUser(insertAdminUser: InsertAdminUser): Promise<AdminUser> {
    const [adminUser] = await db.insert(adminUsers).values(insertAdminUser).returning();
    return adminUser;
  }

  async getAllSiteContent(): Promise<SiteContent[]> {
    return await db.select().from(siteContent);
  }

  async getSiteContentByKey(key: string): Promise<SiteContent | undefined> {
    const [content] = await db.select().from(siteContent).where(eq(siteContent.key, key));
    return content || undefined;
  }

  async getSiteContentByPage(page: string): Promise<SiteContent[]> {
    return await db.select().from(siteContent).where(eq(siteContent.page, page));
  }

  async updateSiteContent(key: string, updateContent: UpdateSiteContent): Promise<SiteContent> {
    const [content] = await db
      .update(siteContent)
      .set({ 
        value: updateContent.value,
        updatedAt: new Date()
      })
      .where(eq(siteContent.key, key))
      .returning();
    
    if (!content) {
      throw new Error(`Content with key ${key} not found`);
    }
    
    return content;
  }

  async createSiteContent(insertContent: InsertSiteContent): Promise<SiteContent> {
    const [content] = await db.insert(siteContent).values({
      key: insertContent.key,
      value: insertContent.value,
      contentType: insertContent.contentType || "text",
      page: insertContent.page,
      section: insertContent.section,
      label: insertContent.label,
      description: insertContent.description || null,
    }).returning();
    return content;
  }
}

// Initialize storage with database setup
async function initializeStorage() {
  try {
    const dbStorage = new DatabaseStorage();
    
    // Check if admin user exists, if not create it
    const existingAdmin = await dbStorage.getAdminUserByEmail("camcox1997@gmail.com");
    if (!existingAdmin) {
      await dbStorage.createAdminUser({
        email: "camcox1997@gmail.com",
        password: "Dapper911!", // In production, this should be hashed
      });
    }

    // Check if default content exists, if not create it
    const existingContent = await dbStorage.getSiteContentByKey("home_hero_title");
    if (!existingContent) {
      const defaultContent = [
        {
          key: "home_hero_title",
          value: "Built by pros, for pros.",
          contentType: "text",
          page: "home",
          section: "hero",
          label: "Main Headline",
          description: "The main hero title on the homepage",
        },
        {
          key: "home_hero_subtitle",
          value: "Track pace. Improve experience. No GPS required.",
          contentType: "text",
          page: "home",
          section: "hero",
          label: "Hero Subtitle",
          description: "The green subtitle text below the main headline",
        },
        {
          key: "home_hero_description_1",
          value: "4Under is a low-cost, browser-based pace of play system built by golf professionals for golf professionals. It gives your marshals and play coordinators the tools they need to monitor, manage, and improve pace of play in real time—without relying on GPS, sensors, or expensive technology.",
          contentType: "text",
          page: "home",
          section: "hero",
          label: "Main Description (First Paragraph)",
          description: "First paragraph of the hero description",
        },
        {
          key: "home_hero_description_2",
          value: "Whether you're running daily tee times, split tees, or shotgun events, 4Under helps you solve pace problems before they start and gives your team the structure to operate with confidence.",
          contentType: "text",
          page: "home",
          section: "hero",
          label: "Main Description (Second Paragraph)",
          description: "Second paragraph of the hero description",
        },
        {
          key: "home_trust_section_title",
          value: "What Makes 4Under Different",
          contentType: "text",
          page: "home",
          section: "trust",
          label: "Trust Section Title",
          description: "Title for the 'What Makes 4Under Different' section",
        },
        {
          key: "contact_email",
          value: "cameron.cox.golf@gmail.com",
          contentType: "text",
          page: "contact",
          section: "info",
          label: "Contact Email",
          description: "Main contact email address",
        },
        {
          key: "contact_page_title",
          value: "Have a question? Want to talk through your course's pace challenges?",
          contentType: "text",
          page: "contact",
          section: "hero",
          label: "Contact Page Title",
          description: "Main title on the contact page",
        },
        {
          key: "demo_page_title",
          value: "Start your free 2-week trial",
          contentType: "text",
          page: "demo",
          section: "hero",
          label: "Demo Page Title",
          description: "Main title on the demo request page",
        },
        {
          key: "demo_page_subtitle",
          value: "Includes full access + a personal onboarding session.",
          contentType: "text",
          page: "demo",
          section: "hero",
          label: "Demo Page Subtitle",
          description: "Subtitle on the demo request page",
        }
      ];

      for (const content of defaultContent) {
        await dbStorage.createSiteContent(content);
      }
    }

    return dbStorage;
  } catch (error) {
    console.error("Database connection failed, falling back to MemStorage:", error);
    return new MemStorage();
  }
}

export let storage: IStorage;

// Initialize storage
initializeStorage().then(storageInstance => {
  storage = storageInstance;
}).catch(error => {
  console.error("Failed to initialize storage:", error);
  storage = new MemStorage();
});
