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
      // ========== HOME PAGE CONTENT ==========
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
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_1",
        value: "Reduce average round times by 15+ minutes",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 1",
        description: "First benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_2",
        value: "Eliminate slow play complaints and refund requests",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 2",
        description: "Second benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_3",
        value: "Built-in tools for tournaments, rentals, and analytics",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 3",
        description: "Third benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_4",
        value: "Works on any phone, tablet, or desktop",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 4",
        description: "Fourth benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_5",
        value: "No downloads, no GPS, no tech headaches",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 5",
        description: "Fifth benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_benefit_6",
        value: "Built by a Head Pro — not a tech company",
        contentType: "text",
        page: "home",
        section: "benefits",
        label: "Benefit 6",
        description: "Sixth benefit card text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_quote_text",
        value: "I've been a Head Pro for 15 years, and I built 4Under because I got tired of watching pace problems ruin the experience for my members and guests.",
        contentType: "text",
        page: "home",
        section: "quote",
        label: "Quote Text",
        description: "Main quote text in banner",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_quote_author",
        value: "Cameron Cox, PGA Professional",
        contentType: "text",
        page: "home",
        section: "quote",
        label: "Quote Author",
        description: "Author of the quote",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_features_title",
        value: "Everything you need to manage pace",
        contentType: "text",
        page: "home",
        section: "features",
        label: "Features Section Title",
        description: "Title for the features section",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_features_subtitle",
        value: "No tech experience required. No installation. No headaches.",
        contentType: "text",
        page: "home",
        section: "features",
        label: "Features Section Subtitle",
        description: "Subtitle for the features section",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_cta_title",
        value: "Ready to solve pace problems?",
        contentType: "text",
        page: "home",
        section: "cta",
        label: "CTA Title",
        description: "Call to action section title",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_cta_subtitle",
        value: "Join courses across the country that use 4Under to improve their pace of play.",
        contentType: "text",
        page: "home",
        section: "cta",
        label: "CTA Subtitle",
        description: "Call to action section subtitle",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "home_cta_button",
        value: "Request Free Demo",
        contentType: "button",
        page: "home",
        section: "cta",
        label: "CTA Button",
        description: "Main call to action button",
        updatedAt: new Date()
      },
      
      // ========== CONTACT PAGE CONTENT ==========
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
      {
        id: this.currentSiteContentId++,
        key: "contact_page_subtitle",
        value: "We're here to help. Send us a message and we'll get back to you within 24 hours.",
        contentType: "text",
        page: "contact",
        section: "hero",
        label: "Contact Page Subtitle",
        description: "Subtitle on the contact page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "contact_form_title",
        value: "Send us a message",
        contentType: "text",
        page: "contact",
        section: "form",
        label: "Contact Form Title",
        description: "Title above the contact form",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "contact_submit_button",
        value: "Send Message",
        contentType: "button",
        page: "contact",
        section: "form",
        label: "Contact Form Button",
        description: "Contact form submit button",
        updatedAt: new Date()
      },
      
      // ========== DEMO PAGE CONTENT ==========
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
      },
      {
        id: this.currentSiteContentId++,
        key: "demo_form_title",
        value: "Tell us about your course",
        contentType: "text",
        page: "demo",
        section: "form",
        label: "Demo Form Title",
        description: "Title above the demo form",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "demo_submit_button",
        value: "Request Demo",
        contentType: "button",
        page: "demo",
        section: "form",
        label: "Demo Form Button",
        description: "Demo form submit button",
        updatedAt: new Date()
      },
      
      // ========== FEATURES PAGE CONTENT ==========
      {
        id: this.currentSiteContentId++,
        key: "features_page_title",
        value: "Everything you need to manage pace of play",
        contentType: "text",
        page: "features",
        section: "hero",
        label: "Features Page Title",
        description: "Main title on the features page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "features_page_subtitle",
        value: "Simple, powerful tools that work on any device",
        contentType: "text",
        page: "features",
        section: "hero",
        label: "Features Page Subtitle",
        description: "Subtitle on the features page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "features_cta_button",
        value: "See It In Action",
        contentType: "button",
        page: "features",
        section: "cta",
        label: "Features CTA Button",
        description: "Call to action button on features page",
        updatedAt: new Date()
      },
      
      // ========== USE CASES PAGE CONTENT ==========
      {
        id: this.currentSiteContentId++,
        key: "usecases_hero_title",
        value: "Use Cases",
        contentType: "text",
        page: "usecases",
        section: "hero",
        label: "Use Cases Page Title",
        description: "Main title on the use cases page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_hero_subtitle",
        value: "Real solutions for real golf operations",
        contentType: "text",
        page: "usecases",
        section: "hero",
        label: "Use Cases Page Subtitle",
        description: "Subtitle on the use cases page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_hero_description",
        value: "See how 4Under transforms pace management across every type of golf operation.",
        contentType: "text",
        page: "usecases",
        section: "hero",
        label: "Use Cases Hero Description",
        description: "Description text in the hero section",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_public_title",
        value: "Public Courses",
        contentType: "text",
        page: "usecases",
        section: "public",
        label: "Public Courses Title",
        description: "Public courses section title",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_public_subtitle",
        value: "Optimize every round — even from first-time visitors.",
        contentType: "text",
        page: "usecases",
        section: "public",
        label: "Public Courses Subtitle",
        description: "Public courses section subtitle",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_private_title",
        value: "Private & Member Clubs",
        contentType: "text",
        page: "usecases",
        section: "private",
        label: "Private Clubs Title",
        description: "Private clubs section title",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_private_subtitle",
        value: "Set the tone for your club culture.",
        contentType: "text",
        page: "usecases",
        section: "private",
        label: "Private Clubs Subtitle",
        description: "Private clubs section subtitle",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_tournaments_title",
        value: "Tournaments & Events",
        contentType: "text",
        page: "usecases",
        section: "tournaments",
        label: "Tournaments Title",
        description: "Tournaments section title",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_tournaments_subtitle",
        value: "No more guessing who's behind.",
        contentType: "text",
        page: "usecases",
        section: "tournaments",
        label: "Tournaments Subtitle",
        description: "Tournaments section subtitle",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_every_title",
        value: "For Every Course",
        contentType: "text",
        page: "usecases",
        section: "every",
        label: "For Every Course Title",
        description: "For every course section title",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_every_subtitle",
        value: "You don't need GPS, a tablet budget, or a data analyst.",
        contentType: "text",
        page: "usecases",
        section: "every",
        label: "For Every Course Subtitle",
        description: "For every course section subtitle",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_cta_title",
        value: "Ready to transform your operations?",
        contentType: "text",
        page: "usecases",
        section: "cta",
        label: "Use Cases CTA Title",
        description: "Call to action title on use cases page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_cta_subtitle",
        value: "See how 4Under works for your type of operation with a free trial.",
        contentType: "text",
        page: "usecases",
        section: "cta",
        label: "Use Cases CTA Subtitle",
        description: "Call to action subtitle on use cases page",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "usecases_cta_button",
        value: "Start Your Free Trial",
        contentType: "button",
        page: "usecases",
        section: "cta",
        label: "Use Cases CTA Button",
        description: "Call to action button on use cases page",
        updatedAt: new Date()
      },
      
      // ========== NAVIGATION CONTENT ==========
      {
        id: this.currentSiteContentId++,
        key: "nav_home_link",
        value: "Home",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "Home Navigation Link",
        description: "Home navigation link text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "nav_features_link",
        value: "Features",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "Features Navigation Link",
        description: "Features navigation link text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "nav_usecases_link",
        value: "Use Cases",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "Use Cases Navigation Link",
        description: "Use Cases navigation link text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "nav_demo_link",
        value: "Request Demo",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "Demo Navigation Link",
        description: "Demo navigation link text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "nav_contact_link",
        value: "Contact",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "Contact Navigation Link",
        description: "Contact navigation link text",
        updatedAt: new Date()
      },
      {
        id: this.currentSiteContentId++,
        key: "nav_faq_link",
        value: "FAQ",
        contentType: "button",
        page: "navigation",
        section: "main",
        label: "FAQ Navigation Link",
        description: "FAQ navigation link text",
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
