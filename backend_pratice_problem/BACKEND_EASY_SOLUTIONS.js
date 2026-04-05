// ============================================
// BACKEND EASY LEVEL SOLUTIONS
// Complete Working Implementations
// ============================================

/**
 * =======================================
 * EASY 1: SIMPLE USER CRUD API - SOLUTION
 * =======================================
 */

// Step 1: Setup Express and Mongoose
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Step 2: Define Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Step 3: Create Model
const User = mongoose.model('User', userSchema);

// Step 4: Routes

// GET all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET specific user
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// CREATE new user
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required'
      });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }
    
    // Create user
    const user = new User({
      name,
      email,
      age
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// START SERVER
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// KEY PATTERNS TO REMEMBER:
// 1. Always use try/catch
// 2. Check if record exists before delete/get
// 3. Validate required fields
// 4. Return proper HTTP status codes
// 5. Use consistent response format


/**
 * ===============================================
 * EASY 2: BASIC AUTHENTICATION - SOLUTION
 * ===============================================
 */

const bcrypt = require('bcrypt');

// Updated User Schema with password
const authUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AuthUser = mongoose.model('AuthUser', authUserSchema);

// REGISTER endpoint
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and password are required'
      });
    }
    
    // Password strength validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        error: 'Password must be at least 6 characters'
      });
    }
    
    // Check if user already exists
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10); // salt rounds = 10
    
    // Create user
    const user = new AuthUser({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// LOGIN endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }
    
    // Find user
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }
    
    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        error: 'Invalid email or password'
      });
    }
    
    // Login successful
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Hash password before saving: bcrypt.hash(password, saltRounds)
// 2. Compare password on login: bcrypt.compare(inputPassword, hashedPassword)
// 3. Check if user exists before creating
// 4. Use await for async operations
// 5. Return user data WITHOUT password


/**
 * ============================================
 * EASY 3: PAGINATION - SOLUTION
 * ============================================
 */

// Sample products
const productsDb = [];

app.get('/products', async (req, res) => {
  try {
    // Get page and limit from query
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    
    // Validation
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;
    if (limit > 100) limit = 100; // Max limit
    
    // Calculate skip
    const skip = (page - 1) * limit;
    
    // Get total count
    const totalItems = productsDb.length;
    
    // Calculate pages
    const totalPages = Math.ceil(totalItems / limit);
    
    // Get paginated data
    const data = productsDb.slice(skip, skip + limit);
    
    res.json({
      success: true,
      page,
      limit,
      totalItems,
      totalPages,
      currentPageItems: data.length,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. skip = (page - 1) * limit
// 2. totalPages = Math.ceil(totalItems / limit)
// 3. Validate page and limit (min 1)
// 4. Include total count in response
// 5. Set reasonable limits (max 100 per page)


/**
 * ============================================
 * EASY 4: FILTERING - SOLUTION
 * ============================================
 */

app.get('/products-filtered', async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    
    // Build filter object
    let filter = {};
    
    // Add category filter
    if (category) {
      filter.category = category;
    }
    
    // Add price range filter
    if (minPrice || maxPrice) {
      filter.price = {};
      
      if (minPrice) {
        filter.price.$gte = parseFloat(minPrice);
      }
      
      if (maxPrice) {
        filter.price.$lte = parseFloat(maxPrice);
      }
    }
    
    // Query database
    const products = await Product.find(filter);
    
    res.json({
      success: true,
      totalItems: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Build filter object conditionally
// 2. Use $gte for >= and $lte for <=
// 3. Only add filter if parameter provided
// 4. Parse numeric values: parseFloat()
// 5. Combine multiple conditions


/**
 * ============================================
 * EASY 5: SORTING - SOLUTION
 * ============================================
 */

app.get('/products-sorted', async (req, res) => {
  try {
    let { sort, order } = req.query;
    
    // Default sort
    if (!sort) sort = 'createdAt';
    if (!order) order = 'desc';
    
    // Validate sort field (security - prevent sorting by any field)
    const validSortFields = ['price', 'name', 'createdAt', 'rating'];
    if (!validSortFields.includes(sort)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid sort field'
      });
    }
    
    // Convert order to MongoDB format
    const sortOrder = order === 'desc' ? -1 : 1;
    
    // Build sort object
    const sortObject = {};
    sortObject[sort] = sortOrder;
    
    // Query with sort
    const products = await Product.find().sort(sortObject);
    
    res.json({
      success: true,
      sort,
      order,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. MongoDB sort: { field: 1 } (ascending) or { field: -1 } (descending)
// 2. Validate sort field (whitelist allowed fields)
// 3. Convert asc/desc to 1/-1
// 4. Set sensible defaults
// 5. Use .sort() method


// ============================================
// ============================================
// MEDIUM LEVEL SOLUTIONS
// ============================================
// ============================================


/**
 * ================================================
 * MEDIUM 1: JWT AUTHENTICATION - SOLUTION
 * ================================================
 */

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Auth Middleware
const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'No token provided'
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Attach user to request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: 'Invalid or expired token'
    });
  }
};

// Register
app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'All fields required'
      });
    }
    
    // Check if user exists
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new AuthUser({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
      message: 'User registered',
      data: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Login
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password required'
      });
    }
    
    // Find user
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get Profile (Protected route)
app.get('/auth/profile', authMiddleware, async (req, res) => {
  try {
    const user = await AuthUser.findById(req.user.userId).select('-password');
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Generate token: jwt.sign(payload, SECRET, options)
// 2. Verify token: jwt.verify(token, SECRET)
// 3. Extract token: req.headers.authorization.split(' ')[1]
// 4. Auth middleware: verify before next()
// 5. Attach user: req.user = decoded
// 6. Exclude password: .select('-password')


/**
 * ================================================
 * MEDIUM 2: MULTI-ENDPOINT REST API - SOLUTION
 * ================================================
 */

// Define Schemas
const userSchema2 = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User2' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  text: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User2' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  createdAt: { type: Date, default: Date.now }
});

const User2 = mongoose.model('User2', userSchema2);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

// User endpoints
app.get('/users2', async (req, res) => {
  try {
    const users = await User2.find().populate('posts');
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/users2', async (req, res) => {
  try {
    const user = new User2(req.body);
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Post endpoints for specific user
app.post('/users2/:userId/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Create post
    const post = new Post({
      title,
      content,
      author: req.params.userId
    });
    
    await post.save();
    
    // Add post to user's posts array
    await User2.findByIdAndUpdate(
      req.params.userId,
      { $push: { posts: post._id } }
    );
    
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/users2/:userId/posts', async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .populate('author')
      .populate('comments');
    
    res.json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Comment endpoints
app.post('/posts/:postId/comments', async (req, res) => {
  try {
    const { text, author } = req.body;
    
    const comment = new Comment({
      text,
      author,
      post: req.params.postId
    });
    
    await comment.save();
    
    // Add comment to post
    await Post.findByIdAndUpdate(
      req.params.postId,
      { $push: { comments: comment._id } }
    );
    
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Define schemas with ObjectId references
// 2. Use populate() to fetch related data
// 3. $push to add to arrays
// 4. Nested routes: /users/:id/posts
// 5. Handle multiple models


/**
 * ================================================
 * MEDIUM 3: ADVANCED SEARCH SOLUTION
 * ================================================
 */

// GET /products?search=laptop&category=electronics&minPrice=100&maxPrice=5000&sort=price&order=asc&page=1&limit=10
app.get('/products-advanced', async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, sort, order, page = 1, limit = 10 } = req.query;
    
    // Build filter
    let filter = {};
    
    // Search filter
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Category filter
    if (category) {
      filter.category = category;
    }
    
    // Price filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }
    
    // Get total count
    const totalItems = await Product.countDocuments(filter);
    
    // Sort
    let sortObject = { createdAt: -1 };
    if (sort) {
      const sortOrder = order === 'asc' ? 1 : -1;
      sortObject = { [sort]: sortOrder };
    }
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Execute query
    const data = await Product.find(filter)
      .sort(sortObject)
      .skip(skip)
      .limit(parseInt(limit));
    
    res.json({
      success: true,
      page: parseInt(page),
      limit: parseInt(limit),
      totalItems,
      totalPages: Math.ceil(totalItems / parseInt(limit)),
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Combine all filters in one object
// 2. Use $or for multiple field search
// 3. Use $regex with $options: 'i' for case-insensitive
// 4. Apply filters, then sort, then paginate
// 5. Return total count and pages


/**
 * ================================================
 * MEDIUM 4: FILE UPLOAD - SOLUTION
 * ================================================
 */

const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    // Only allow jpg and png
    const allowedMimes = ['image/jpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only jpg and png allowed'));
    }
  }
});

// Serve static files
app.use('/uploads', express.static('uploads'));

// Upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided'
      });
    }
    
    // Save filename to database
    const user = await AuthUser.findByIdAndUpdate(
      req.user?.userId,
      { profileImage: req.file.filename },
      { new: true }
    );
    
    res.json({
      success: true,
      message: 'File uploaded',
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete file
app.delete('/users/:id/image', async (req, res) => {
  try {
    const user = await AuthUser.findById(req.params.id);
    
    if (user?.profileImage) {
      // Delete file from disk
      fs.unlink(path.join('uploads', user.profileImage), (err) => {
        if (err) console.log('File delete error:', err);
      });
    }
    
    // Update user
    await AuthUser.findByIdAndUpdate(req.params.id, { profileImage: null });
    
    res.json({
      success: true,
      message: 'Image deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Configure multer: storage, limits, fileFilter
// 2. Check file MIME type
// 3. Limit file size
// 4. Generate unique filename with timestamp
// 5. Serve uploads folder as static
// 6. Delete with fs.unlink()


/**
 * ================================================
 * MEDIUM 5: JOI VALIDATION - SOLUTION
 * ================================================
 */

const Joi = require('joi');

// Define validation schema
const userValidationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Name must be at least 3 characters',
      'string.max': 'Name must not exceed 50 characters',
      'any.required': 'Name is required'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email must be valid',
      'any.required': 'Email is required'
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^[a-zA-Z0-9@#$%&*]+$/)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base': 'Password must contain letters, numbers, and optional special characters',
      'any.required': 'Password is required'
    }),
  age: Joi.number()
    .integer()
    .min(18)
    .max(120)
    .messages({
      'number.min': 'Age must be at least 18',
      'number.max': 'Age must not exceed 120'
    })
});

// Validation middleware
const validateUser = (req, res, next) => {
  const { error, value } = userValidationSchema.validate(req.body, {
    abortEarly: false
  });
  
  if (error) {
    const errors = {};
    error.details.forEach(detail => {
      errors[detail.path[0]] = detail.message;
    });
    
    return res.status(400).json({
      success: false,
      errors
    });
  }
  
  req.validatedData = value;
  next();
};

// Use validation
app.post('/users-validated', validateUser, async (req, res) => {
  try {
    const user = new AuthUser(req.validatedData);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Define Joi schema with validation rules
// 2. Use .min(), .max(), .email(), .pattern()
// 3. Add custom messages
// 4. Validate with schema.validate()
// 5. Return detailed error messages
// 6. Create validation middleware


/**
 * ================================================
 * MEDIUM 6: SEARCH FUNCTIONALITY - SOLUTION  
 * ================================================
 */

app.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Search query required'
      });
    }
    
    // Build search filter using $or with regex
    const searchFilter = {
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { brand: { $regex: q, $options: 'i' } }
      ]
    };
    
    // Execute search
    const results = await Product.find(searchFilter).limit(20);
    
    res.json({
      success: true,
      query: q,
      totalMatches: results.length,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// KEY PATTERNS TO REMEMBER:
// 1. Use $or for searching multiple fields
// 2. Use $regex with $options: 'i' for case-insensitive
// 3. Limit results for performance
// 4. Validate search query (not empty)
// 5. Return match count

export { authMiddleware };
