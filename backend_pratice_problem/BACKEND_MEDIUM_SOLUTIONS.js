// ============================================
// BACKEND MEDIUM LEVEL SOLUTIONS
// Complete Working Implementations
// ============================================

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const app = express();
app.use(express.json());

// Connection
mongoose.connect('mongodb://localhost:27017/mediumdb');

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

/**
 * ================================================
 * MEDIUM 1: JWT AUTHENTICATION COMPLETE - SOLUTION
 * ================================================
 */

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Auth Middleware
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'No token provided'
      });
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
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
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
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
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
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

// Get Profile (Protected)
app.get('/auth/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    
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

// Logout (optional - just remove token on client)
app.post('/auth/logout', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});


/**
 * ================================================
 * MEDIUM 2: MULTI-ENDPOINT REST API - SOLUTION
 * ================================================
 */

// Define Schemas
const blogUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogUser', required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogUser', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now }
});

const BlogUser = mongoose.model('BlogUser', blogUserSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

// ===== USER ENDPOINTS =====

// GET all users
app.get('/blog/users', async (req, res) => {
  try {
    const users = await BlogUser.find().select('-password').populate('posts');
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

// POST create user
app.post('/blog/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'All fields required'
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new BlogUser({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
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

// GET specific user
app.get('/blog/users/:userId', async (req, res) => {
  try {
    const user = await BlogUser.findById(req.params.userId)
      .select('-password')
      .populate('posts');
    
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

// PUT update user
app.put('/blog/users/:userId', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    const user = await BlogUser.findByIdAndUpdate(
      req.params.userId,
      { name, email },
      { new: true }
    ).select('-password');
    
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

// DELETE user (with cascade delete posts and comments)
app.delete('/blog/users/:userId', async (req, res) => {
  try {
    const user = await BlogUser.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Delete all posts by user
    const posts = await Post.find({ author: req.params.userId });
    for (let post of posts) {
      // Delete all comments in post
      await Comment.deleteMany({ post: post._id });
      // Delete post
      await Post.findByIdAndDelete(post._id);
    }
    
    // Delete user
    await BlogUser.findByIdAndDelete(req.params.userId);
    
    res.json({
      success: true,
      message: 'User and all posts deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ===== POST ENDPOINTS =====

// GET all posts by user
app.get('/blog/users/:userId/posts', async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId })
      .populate('author', 'name email')
      .populate({
        path: 'comments',
        populate: { path: 'author', select: 'name email' }
      });
    
    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST create post for user
app.post('/blog/users/:userId/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        error: 'Title and content required'
      });
    }
    
    // Check if user exists
    const user = await BlogUser.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Create post
    const post = new Post({
      title,
      content,
      author: req.params.userId
    });
    
    await post.save();
    
    // Add to user's posts
    await BlogUser.findByIdAndUpdate(
      req.params.userId,
      { $push: { posts: post._id } }
    );
    
    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET specific post
app.get('/blog/posts/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate('author', 'name email')
      .populate({
        path: 'comments',
        populate: { path: 'author', select: 'name email' }
      });
    
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }
    
    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// PUT update post
app.put('/blog/posts/:postId', async (req, res) => {
  try {
    const { title, content } = req.body;
    
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { title, content },
      { new: true }
    ).populate('author', 'name email');
    
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }
    
    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE post
app.delete('/blog/posts/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }
    
    // Delete all comments
    await Comment.deleteMany({ post: req.params.postId });
    
    // Remove post from user
    await BlogUser.findByIdAndUpdate(
      post.author,
      { $pull: { posts: req.params.postId } }
    );
    
    // Delete post
    await Post.findByIdAndDelete(req.params.postId);
    
    res.json({
      success: true,
      message: 'Post deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET posts by author (filter)
app.get('/blog/posts', async (req, res) => {
  try {
    const { author } = req.query;
    
    let filter = {};
    if (author) {
      filter.author = author;
    }
    
    const posts = await Post.find(filter)
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ===== COMMENT ENDPOINTS =====

// GET comments for post
app.get('/blog/posts/:postId/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: comments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST create comment
app.post('/blog/posts/:postId/comments', async (req, res) => {
  try {
    const { text, authorId } = req.body;
    
    if (!text || !authorId) {
      return res.status(400).json({
        success: false,
        error: 'Text and authorId required'
      });
    }
    
    // Check if post exists
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found'
      });
    }
    
    const comment = new Comment({
      text,
      author: authorId,
      post: req.params.postId
    });
    
    await comment.save();
    
    // Add to post
    await Post.findByIdAndUpdate(
      req.params.postId,
      { $push: { comments: comment._id } }
    );
    
    res.status(201).json({
      success: true,
      data: comment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE comment
app.delete('/blog/comments/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found'
      });
    }
    
    // Remove from post
    await Post.findByIdAndUpdate(
      comment.post,
      { $pull: { comments: req.params.commentId } }
    );
    
    // Delete comment
    await Comment.findByIdAndDelete(req.params.commentId);
    
    res.json({
      success: true,
      message: 'Comment deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


/**
 * ================================================
 * MEDIUM 3: PAGINATION + FILTERING + SORTING - SOLUTION
 * ================================================
 */

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  brand: String,
  category: String,
  price: Number,
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, sort, order, page = 1, limit = 10 } = req.query;
    
    // Build filter
    let filter = {};
    
    // Search
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Category
    if (category) {
      filter.category = category;
    }
    
    // Price range
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }
    
    // Get total
    const totalItems = await Product.countDocuments(filter);
    
    // Sort
    let sortObject = { createdAt: -1 };
    if (sort) {
      const validFields = ['price', 'name', 'createdAt'];
      if (validFields.includes(sort)) {
        const sortOrder = order === 'asc' ? 1 : -1;
        sortObject = { [sort]: sortOrder };
      }
    }
    
    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    // Query
    const data = await Product.find(filter)
      .sort(sortObject)
      .skip(skip)
      .limit(limitNum);
    
    res.json({
      success: true,
      page: pageNum,
      limit: limitNum,
      totalItems,
      totalPages: Math.ceil(totalItems / limitNum),
      filteredItems: data.length,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


/**
 * ================================================
 * MEDIUM 4: FILE UPLOAD - SOLUTION
 * ================================================
 */

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}-profile${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
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

// Upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided'
      });
    }
    
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

// Delete
app.delete('/uploads/:filename', async (req, res) => {
  try {
    const filepath = path.join('uploads', req.params.filename);
    
    fs.unlink(filepath, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: 'Could not delete file'
        });
      }
      
      res.json({
        success: true,
        message: 'File deleted'
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


/**
 * ================================================
 * MEDIUM 5: JOI VALIDATION - SOLUTION
 * ================================================
 */

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
    .pattern(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9@#$%&*]{8,}$/)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base': 'Password must contain at least 1 uppercase and 1 number',
      'any.required': 'Password is required'
    }),
  age: Joi.number()
    .integer()
    .min(18)
    .max(120)
    .messages({
      'number.min': 'Age must be at least 18',
      'number.max': 'Age must not exceed 120'
    }),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .messages({
      'string.pattern.base': 'Phone must be 10 digits'
    })
});

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

app.post('/validated-users', validateUser, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.validatedData.password, 10);
    
    const user = new BlogUser({
      ...req.validatedData,
      password: hashedPassword
    });
    
    await user.save();
    
    res.status(201).json({
      success: true,
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
    
    // Search with regex
    const searchFilter = {
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { brand: { $regex: q, $options: 'i' } }
      ]
    };
    
    const results = await Product.find(searchFilter)
      .limit(20)
      .sort({ name: 1 });
    
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

// Export
module.exports = app;
