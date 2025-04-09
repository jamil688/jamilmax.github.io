// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import session from "express-session";
import createMemoryStore from "memorystore";
var MemStorage = class {
  users;
  categories;
  products;
  banners;
  blogs;
  userId;
  categoryId;
  productId;
  bannerId;
  blogId;
  sessionStore;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.banners = /* @__PURE__ */ new Map();
    this.blogs = /* @__PURE__ */ new Map();
    this.userId = 1;
    this.categoryId = 1;
    this.productId = 1;
    this.bannerId = 1;
    this.blogId = 1;
    const MemoryStore = createMemoryStore(session);
    this.sessionStore = new MemoryStore({
      checkPeriod: 864e5
      // prune expired entries every 24h
    });
    this.initializeData();
  }
  // Initialize with some default data
  initializeData() {
    const electronics = this.createCategory({
      name: "Electronics",
      slug: "electronics",
      icon: "mobile-alt"
    });
    const homeKitchen = this.createCategory({
      name: "Home & Kitchen",
      slug: "home-kitchen",
      icon: "couch"
    });
    const fashion = this.createCategory({
      name: "Fashion",
      slug: "fashion",
      icon: "tshirt"
    });
    const books = this.createCategory({
      name: "Books",
      slug: "books",
      icon: "book"
    });
    const gaming = this.createCategory({
      name: "Gaming",
      slug: "gaming",
      icon: "gamepad"
    });
    const beauty = this.createCategory({
      name: "Beauty",
      slug: "beauty",
      icon: "spa"
    });
    this.createProduct({
      title: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      description: "High-quality wireless headphones with noise cancellation technology",
      price: "74.99",
      originalPrice: "99.99",
      discountPercentage: 25,
      imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      rating: 4,
      reviewCount: 45,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/wireless-headphones",
      featured: true,
      trending: false,
      hotDeal: true
    });
    this.createProduct({
      title: "Smart Watch with Heart Rate Monitor",
      slug: "smart-watch-heart-rate-monitor",
      description: "Track your fitness and stay connected with this smart watch",
      price: "111.99",
      originalPrice: "159.99",
      discountPercentage: 30,
      imageUrl: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b",
      rating: 5,
      reviewCount: 112,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/smart-watch",
      featured: false,
      trending: true,
      hotDeal: true
    });
    this.createProduct({
      title: "Modern LED Desk Lamp with USB Port",
      slug: "modern-led-desk-lamp",
      description: "Adjustable desk lamp with built-in USB charging port",
      price: "42.49",
      originalPrice: "49.99",
      discountPercentage: 15,
      imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657",
      rating: 4,
      reviewCount: 78,
      categoryId: homeKitchen.id,
      affiliateUrl: "https://amazon.com/desk-lamp",
      featured: true,
      trending: false,
      hotDeal: true
    });
    this.createProduct({
      title: "Portable Bluetooth Speaker Waterproof",
      slug: "portable-bluetooth-speaker",
      description: "Take your music anywhere with this waterproof bluetooth speaker",
      price: "53.99",
      originalPrice: "89.99",
      discountPercentage: 40,
      imageUrl: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08",
      rating: 5,
      reviewCount: 194,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/bluetooth-speaker",
      featured: true,
      trending: true,
      hotDeal: true
    });
    this.createProduct({
      title: "Premium Wireless Headphones with Noise Cancelling",
      slug: "premium-wireless-headphones",
      description: "Experience superior sound quality with these premium headphones",
      price: "199.99",
      originalPrice: "249.99",
      discountPercentage: 20,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 5,
      reviewCount: 129,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/premium-headphones",
      featured: true,
      trending: false,
      hotDeal: false
    });
    this.createProduct({
      title: 'Ultrabook Laptop 15.6" 16GB RAM 512GB SSD',
      slug: "ultrabook-laptop",
      description: "Powerful and lightweight laptop for work and entertainment",
      price: "999.99",
      originalPrice: "1199.99",
      discountPercentage: 17,
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      rating: 5,
      reviewCount: 87,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/ultrabook-laptop",
      featured: true,
      trending: true,
      hotDeal: false
    });
    this.createProduct({
      title: "Mirrorless Digital Camera 24MP 4K Video",
      slug: "mirrorless-digital-camera",
      description: "Capture stunning photos and videos with this professional camera",
      price: "699.99",
      originalPrice: "799.99",
      discountPercentage: 12,
      imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      rating: 4,
      reviewCount: 56,
      categoryId: electronics.id,
      affiliateUrl: "https://amazon.com/digital-camera",
      featured: true,
      trending: false,
      hotDeal: false
    });
    this.createProduct({
      title: "Professional Blender with Variable Speed Control",
      slug: "professional-blender",
      description: "Make smoothies, soups, and more with this powerful blender",
      price: "149.99",
      originalPrice: "179.99",
      discountPercentage: 17,
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
      rating: 4,
      reviewCount: 143,
      categoryId: homeKitchen.id,
      affiliateUrl: "https://amazon.com/professional-blender",
      featured: true,
      trending: false,
      hotDeal: false
    });
    this.createProduct({
      title: "Athletic Running Shoes Breathable Mesh",
      slug: "athletic-running-shoes",
      description: "Comfortable and lightweight running shoes for daily workouts",
      price: "79.99",
      originalPrice: "99.99",
      discountPercentage: 20,
      imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      rating: 4,
      reviewCount: 98,
      categoryId: fashion.id,
      affiliateUrl: "https://amazon.com/running-shoes",
      featured: true,
      trending: true,
      hotDeal: false
    });
    this.createBanner({
      title: "Summer Tech Deals",
      description: "Discover amazing discounts on the latest gadgets and electronics",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      buttonText: "Shop Now",
      buttonUrl: "/category/electronics",
      order: 1
    });
    this.createBanner({
      title: "Home Essentials",
      description: "Transform your living space with our curated selection",
      imageUrl: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
      buttonText: "Explore Now",
      buttonUrl: "/category/home-kitchen",
      order: 2
    });
    this.createBanner({
      title: "Fashion Forward",
      description: "Upgrade your wardrobe with trending styles at amazing prices",
      imageUrl: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
      buttonText: "Shop Collection",
      buttonUrl: "/category/fashion",
      order: 3
    });
    this.createBlog({
      title: "10 Best Electronics Deals This Month",
      slug: "best-electronics-deals-month",
      content: `<p>Looking for the best deals on electronics this month? You've come to the right place! We've rounded up the top 10 deals that you won't want to miss.</p>
      <h2>1. Wireless Noise Cancelling Headphones</h2>
      <p>These premium headphones are currently 25% off, making them an absolute steal. With industry-leading noise cancellation and incredible sound quality, they're perfect for commuting, working from home, or just enjoying your favorite music.</p>
      <h2>2. Smart 4K TV</h2>
      <p>Upgrade your home entertainment system with this amazing smart TV. Currently at its lowest price ever, this 55-inch 4K TV delivers stunning picture quality and has all the smart features you need.</p>
      <p>Check back regularly as we update our deals weekly!</p>`,
      excerpt: "Discover the hottest electronics deals available right now, from headphones to smart TVs and everything in between.",
      featureImageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      author: "Sarah Johnson",
      categoryId: electronics.id
    });
    this.createBlog({
      title: "Home Office Setup Guide",
      slug: "home-office-setup-guide",
      content: `<p>Creating the perfect home office doesn't have to be expensive or complicated. With a few key pieces and some thoughtful organization, you can create a productive workspace at home.</p>
      <h2>Essential Home Office Equipment</h2>
      <ul>
        <li>A comfortable, ergonomic chair</li>
        <li>An appropriately sized desk</li>
        <li>Good lighting (natural light plus a desk lamp)</li>
        <li>Computer monitor at eye level</li>
        <li>Keyboard and mouse that feel comfortable for long-term use</li>
      </ul>
      <p>Investing in quality items for your most-used equipment will pay off in comfort and productivity over time.</p>`,
      excerpt: "Learn how to set up an efficient and comfortable home office with our complete guide to equipment, furniture, and organization.",
      featureImageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
      author: "Michael Chang",
      categoryId: homeKitchen.id
    });
    this.createBlog({
      title: "Spring Fashion Trends You Need to Know",
      slug: "spring-fashion-trends",
      content: `<p>As we move into the spring season, it's time to refresh your wardrobe with the latest trends. This year's spring fashion is all about bold colors, sustainable materials, and comfortable styles that don't sacrifice aesthetics.</p>
      <h2>Colors of the Season</h2>
      <p>Expect to see lots of vibrant greens, soft lavenders, and buttery yellows this spring. These colors work well as statement pieces or as accents to more neutral outfits.</p>
      <h2>Sustainable Fashion</h2>
      <p>More than ever, consumers are looking for sustainable fashion options. Look for brands that emphasize ethical production methods and environmentally friendly materials.</p>
      <p>Remember, the best fashion choice is always the one that makes you feel confident and comfortable!</p>`,
      excerpt: "Stay ahead of the curve with our guide to this spring's essential fashion trends, from colors to fabrics and must-have accessories.",
      featureImageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
      author: "Emma Roberts",
      categoryId: fashion.id
    });
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Category methods
  async getCategories() {
    return Array.from(this.categories.values());
  }
  async getCategoryById(id) {
    return this.categories.get(id);
  }
  async getCategoryBySlug(slug) {
    return Array.from(this.categories.values()).find(
      (category) => category.slug === slug
    );
  }
  async createCategory(insertCategory) {
    const id = this.categoryId++;
    const category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }
  // Product methods
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProductById(id) {
    return this.products.get(id);
  }
  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  async getProductsByCategory(categoryId) {
    return Array.from(this.products.values()).filter(
      (product) => product.categoryId === categoryId
    );
  }
  async getProductsByCategorySlug(slug) {
    const category = await this.getCategoryBySlug(slug);
    if (!category) return [];
    return this.getProductsByCategory(category.id);
  }
  async getFeaturedProducts(limit) {
    const featured = Array.from(this.products.values()).filter(
      (product) => product.featured
    );
    if (limit) {
      return featured.slice(0, limit);
    }
    return featured;
  }
  async getTrendingProducts(limit) {
    const trending = Array.from(this.products.values()).filter(
      (product) => product.trending
    );
    if (limit) {
      return trending.slice(0, limit);
    }
    return trending;
  }
  async getHotDeals(limit) {
    const hotDeals = Array.from(this.products.values()).filter(
      (product) => product.hotDeal
    );
    if (limit) {
      return hotDeals.slice(0, limit);
    }
    return hotDeals;
  }
  async searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      (product) => product.title.toLowerCase().includes(lowerQuery) || product.description.toLowerCase().includes(lowerQuery)
    );
  }
  async createProduct(insertProduct) {
    const id = this.productId++;
    const product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  // Banner methods
  async getBanners() {
    return Array.from(this.banners.values()).sort((a, b) => a.order - b.order);
  }
  async createBanner(insertBanner) {
    const id = this.bannerId++;
    const banner = { ...insertBanner, id };
    this.banners.set(id, banner);
    return banner;
  }
  // Blog methods
  async getBlogs(limit) {
    const blogs = Array.from(this.blogs.values()).sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
    if (limit) {
      return blogs.slice(0, limit);
    }
    return blogs;
  }
  async getBlogById(id) {
    return this.blogs.get(id);
  }
  async getBlogBySlug(slug) {
    return Array.from(this.blogs.values()).find(
      (blog) => blog.slug === slug
    );
  }
  async getBlogsByCategory(categoryId) {
    return Array.from(this.blogs.values()).filter(
      (blog) => blog.categoryId === categoryId
    );
  }
  async getBlogsByCategorySlug(slug) {
    const category = await this.getCategoryBySlug(slug);
    if (!category) return [];
    return this.getBlogsByCategory(category.id);
  }
  async createBlog(insertBlog) {
    const id = this.blogId++;
    const publishDate = insertBlog.publishDate || /* @__PURE__ */ new Date();
    const blog = { ...insertBlog, id, publishDate };
    this.blogs.set(id, blog);
    return blog;
  }
};
var storage = new MemStorage();

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });
  app2.get("/api/categories/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const category = await storage.getCategoryBySlug(slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });
  app2.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const product = await storage.getProductBySlug(slug);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/products/category/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const products = await storage.getProductsByCategorySlug(slug);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });
  app2.get("/api/featured-products", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const products = await storage.getFeaturedProducts(limit);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });
  app2.get("/api/trending-products", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const products = await storage.getTrendingProducts(limit);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending products" });
    }
  });
  app2.get("/api/hot-deals", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const products = await storage.getHotDeals(limit);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch hot deals" });
    }
  });
  app2.get("/api/search", async (req, res) => {
    try {
      const searchSchema = z.object({
        q: z.string().min(1)
      });
      const parsed = searchSchema.safeParse(req.query);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid search query" });
      }
      const { q } = parsed.data;
      const products = await storage.searchProducts(q);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to search products" });
    }
  });
  app2.get("/api/banners", async (req, res) => {
    try {
      const banners = await storage.getBanners();
      res.json(banners);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch banners" });
    }
  });
  app2.get("/api/blogs", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
      const blogs = await storage.getBlogs(limit);
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });
  app2.get("/api/blogs/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const blog = await storage.getBlogBySlug(slug);
      if (!blog) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });
  app2.get("/api/blogs/category/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const blogs = await storage.getBlogsByCategorySlug(slug);
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs by category" });
    }
  });
  app2.post("/api/admin/login", async (req, res) => {
    try {
      const loginSchema = z.object({
        username: z.string().min(1),
        password: z.string().min(1)
      });
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid credentials format" });
      }
      const { username, password } = parsed.data;
      if (username === "admin" && password === "admin123") {
        return res.json({
          success: true,
          user: {
            id: 1,
            username: "admin",
            role: "admin"
          }
        });
      }
      res.status(401).json({ message: "Invalid username or password" });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
