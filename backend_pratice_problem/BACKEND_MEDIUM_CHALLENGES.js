// ============================================
// BACKEND MEDIUM LEVEL CODING CHALLENGES
// Problems Asked in 4-10 LPA Companies
// ============================================
// Harder than Easy, Focused on Real APIs
// All problems use Node.js + Express + MongoDB

/**
 * MEDIUM 1: JWT AUTHENTICATION FLOW
 * ===================================
 * 
 * PROBLEM STATEMENT:
 * Build complete JWT authentication system:
 * - POST /register → Create user account
 * - POST /login → Login and return JWT token
 * - POST /logout → Invalidate token (optional)
 * - GET /profile → Get user profile (protected route)
 * - Verify token on protected routes
 * 
 * REQUIREMENTS:
 * 1. Register with email/password validation
 * 2. Hash password with bcrypt
 * 3. Generate JWT token on login
 * 4. Token includes user ID
 * 5. Middleware to verify token
 * 6. Protect /profile route with middleware
 * 7. Return token in response
 * 8. Token expires in 7 days
 * 
 * JWT STRUCTURE:
 * Header: { alg: "HS256", typ: "JWT" }
 * Payload: { userId: "123", iat: 1234, exp: 5678 }
 * Signature: HMAC_SHA256(header.payload, SECRET)
 * 
 * TOKEN USAGE:
 * Header: Authorization: Bearer <token>
 * 
 * RESPONSE FORMAT:
 * Login Success:
 * { success: true, token: "jwt_string", user: { id, name, email } }
 * 
 * Protected Route:
 * { success: true, data: { user profile data } }
 * 
 * Concepts TESTED:
 * - JWT creation (jwt.sign)
 * - JWT verification (jwt.verify)
 * - Middleware for auth
 * - Token in headers
 * - Expiry handling
 * 
 * INTERVIEW TIPS:
 * - Store token in Authorization header
 * - Extract token from "Bearer <token>"
 * - Verify token before accessing protected routes
 * - Handle expired tokens (401 error)
 * - Use environment variable for JWT_SECRET
 * 
 * THINK ABOUT:
 * - How to generate JWT?
 * - How to verify JWT?
 * - How to extract token from header?
 * - What if token expired?
 * - What if token missing?
 * - How to structure auth middleware?
 * - What info to include in token?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * MEDIUM 2: MULTI-ENDPOINT REST API
 * ===================================
 * 
 * PROBLEM STATEMENT:
 * Build Blog API with relationships:
 * - User can create multiple posts
 * - Each post has multiple comments
 * - Implement CRUD for all resources
 * 
 * ENDPOINTS:
 * Users:
 *   GET /users
 *   POST /users
 *   GET /users/:userId
 *   PUT /users/:userId
 *   DELETE /users/:userId
 * 
 * Posts:
 *   GET /users/:userId/posts
 *   POST /users/:userId/posts
 *   GET /posts/:postId
 *   PUT /posts/:postId
 *   DELETE /posts/:postId
 *   GET /posts?author=userId (filter by author)
 * 
 * Comments:
 *   GET /posts/:postId/comments
 *   POST /posts/:postId/comments
 *   DELETE /comments/:commentId
 * 
 * DATA MODELS:
 * User {
 *   _id, name, email, password, posts: [postId]
 * }
 * Post {
 *   _id, title, content, author: userId, comments: [commentId]
 * }
 * Comment {
 *   _id, text, author: userId, post: postId
 * }
 * 
 * REQUIREMENTS:
 * 1. Create schemas for User, Post, Comment
 * 2. Implement all CRUD endpoints
 * 3. Handle relationships (author, post references)
 * 4. Validate data on create/update
 * 5. Handle 404 errors properly
 * 6. Return proper status codes
 * 7. Include error messages
 * 
 * CONCEPTS TESTED:
 * - Multiple schemas/models
 * - Mongoose relationships (references)
 * - Complex routing structure
 * - Population of references
 * - Nested routes (/users/:id/posts)
 * - Filtering and validation
 * 
 * INTERVIEW TIPS:
 * - Use Mongoose populate() to get author details
 * - Check if user/post exists before operations
 * - Validate relationship (post belongs to user?)
 * - Use consistent response format
 * - Handle cascading deletes (delete posts when user deleted)
 * 
 * THINK ABOUT:
 * - How to structure nested routes?
 * - How to use Mongoose populate()?
 * - How to validate relationships?
 * - What if user has many posts?
 * - How to handle deletes?
 * - What fields to return in response?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * MEDIUM 3: PAGINATION + FILTERING + SORTING
 * =============================================
 * 
 * PROBLEM STATEMENT:
 * Create advanced search API:
 * - GET /products?search=laptop&category=electronics&minPrice=100&maxPrice=5000&sort=price&order=asc&page=1&limit=10
 * - Filter by multiple criteria
 * - Search in product name/description
 * - Pagination
 * - Sorting
 * 
 * REQUIREMENTS:
 * 1. Search in name and description (using $or and regex)
 * 2. Filter by category
 * 3. Filter by price range
 * 4. Sort by different fields
 * 5. Paginate results
 * 6. Return total count
 * 7. Return number of pages
 * 
 * RESPONSE FORMAT:
 * {
 *   success: true,
 *   page: 1,
 *   limit: 10,
 *   totalItems: 100,
 *   totalPages: 10,
 *   filteredItems: 50,
 *   data: [...]
 * }
 * 
 * CONCEPTS TESTED:
 * - MongoDB regex for search
 * - Multiple filter conditions
 * - $or and $and operators
 * - Combining pagination, filtering, sorting
 * - MongoDB $regex operator
 * 
 * INTERVIEW TIPS:
 * - Build filter object: { category, price: { $gte, $lte }, ... }
 * - Use $or for search: { $or: [ {name: regex}, {desc: regex} ] }
 * - Combine all conditions
 * - Apply pagination after sorting
 * - Use case-insensitive search
 * 
 * THINK ABOUT:
 * - How to combine multiple filters?
 * - How to do text search with regex?
 * - How to structure complex query?
 * - What if multiple optional filters?
 * - How to calculate filtered total?
 * - Order: filter, sort, then paginate?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * MEDIUM 4: FILE UPLOAD API
 * ===========================
 * 
 * PROBLEM STATEMENT:
 * Create file upload API:
 * - POST /upload → Upload single profile image
 * - GET /users/:id/profile-image → Get uploaded image
 * - DELETE /users/:id/image → Delete image
 * - Support jpg, png only
 * - Max file size: 5MB
 * 
 * REQUIREMENTS:
 * 1. Install multer for file handling
 * 2. Setup file upload directory
 * 3. Validate file type (jpg, png)
 * 4. Validate file size (< 5MB)
 * 5. Save filename to database
 * 6. Return file path in response
 * 7. Serve static files
 * 8. Delete file from disk on delete
 * 
 * RESPONSE FORMAT:
 * {
 *   success: true,
 *   message: "File uploaded",
 *   filename: "12345_profile.jpg",
 *   path: "/uploads/12345_profile.jpg"
 * }
 * 
 * CONCEPTS TESTED:
 * - Multer middleware
 * - File validation
 * - File system operations (fs)
 * - Static file serving
 * - Error handling for file operations
 * 
 * INTERVIEW TIPS:
 * - Use multer middleware: app.post('/upload', upload.single('file'), handler)
 * - Validate MIME type: image/jpeg, image/png
 * - Check file size: req.file.size
 * - Generate unique filename: timestamp + original name
 * - Serve uploads folder as static: app.use('/uploads', express.static())
 * - Delete file with fs.unlink() before db delete
 * 
 * THINK ABOUT:
 * - Where to store files?
 * - How to validate file type?
 * - How to generate unique filename?
 * - How to delete file from disk?
 * - What if upload fails midway?
 * - How to serve uploaded files?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * MEDIUM 5: DATA VALIDATION WITH JOI
 * ====================================
 * 
 * PROBLEM STATEMENT:
 * Build API with comprehensive validation:
 * - POST /users → Validate user data with Joi
 * - PUT /users/:id → Validate update data
 * - Return specific validation errors
 * - Support custom validation rules
 * 
 * REQUIREMENTS:
 * 1. Install Joi validation library
 * 2. Define schemas for User model
 * 3. Validate email format
 * 4. Validate password strength (8+ chars, 1 uppercase, 1 number)
 * 5. Validate name (3+ chars, letters only)
 * 6. Validate phone (10 digits)
 * 7. Return detailed error messages
 * 8. Create validation middleware
 * 
 * JOI SCHEMA EXAMPLE:
 * const userSchema = Joi.object({
 *   name: Joi.string().min(3).max(50).required(),
 *   email: Joi.string().email().required(),
 *   password: Joi.string().min(8).pattern(/^[a-zA-Z0-9]{8}$/).required(),
 *   age: Joi.number().integer().min(18).max(120)
 * });
 * 
 * RESPONSE FORMAT (Success):
 * { success: true, data: {...} }
 * 
 * RESPONSE FORMAT (Validation Error):
 * { 
 *   success: false, 
 *   errors: { 
 *     name: "Name must be at least 3 characters",
 *     email: "Email must be valid format"
 *   }
 * }
 * 
 * CONCEPTS TESTED:
 * - Joi schema definition
 * - Input validation
 * - Regular expressions
 * - Custom error messages
 * - Middleware for validation
 * - Email and format validation
 * 
 * INTERVIEW TIPS:
 * - Use Joi for schema validation (better than manual checks)
 * - Define reusable schemas
 * - Custom messages for better UX
 * - Validate all inputs: name, email, password
 * - Check BOTH format and content
 * - Create validation middleware
 * 
 * THINK ABOUT:
 * - What validation rules needed?
 * - How to write regex for password?
 * - How to define Joi schema?
 * - How to use schema.validate()?
 * - How to catch validation errors?
 * - How to return errors to frontend?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * MEDIUM 6: SEARCH FUNCTIONALITY
 * ================================
 * 
 * PROBLEM STATEMENT:
 * Implement search across multiple fields:
 * - GET /search?q=laptop
 * - Search in product name, description, brand
 * - Case-insensitive search
 * - Return sorted by relevance
 * - Highlight matching fields
 * 
 * REQUIREMENTS:
 * 1. Search query parameter: ?q=search_term
 * 2. Search in multiple fields (name, description, brand)
 * 3. Case-insensitive search
 * 4. Return matching products
 * 5. Include match count in response
 * 6. Sort by relevance (matches in name > matches in description)
 * 
 * RESPONSE FORMAT:
 * {
 *   success: true,
 *   query: "laptop",
 *   totalMatches: 15,
 *   data: [
 *     { ...product, matches: ["name", "description"] }
 *   ]
 * }
 * 
 * CONCEPTS TESTED:
 * - MongoDB regex patterns
 * - $or operator for multiple fields
 * - Case-insensitive search (i flag)
 * - Word boundary matching
 * - Relevance sorting
 * 
 * INTERVIEW TIPS:
 * - Use regex: { $regex: "search", $options: "i" }
 * - Search common fields: name, description, category
 * - Use $or to search multiple fields
 * - Filter empty query
 * - Limit results (top 20 matches)
 * - Consider performance on large data
 * 
 * THINK ABOUT:
 * - How to search multiple fields?
 * - How to make search case-insensitive?
 * - How to rank by relevance?
 * - What if query is empty?
 * - How to handle special characters?
 * - Should we search partial words?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// ============================================
// HOW TO USE THIS FILE
// ============================================
/**
 * 
 * MEDIUM WORKFLOW:
 * 
 * 1. READ problem more carefully
 *    - Understand all relationships
 *    - Plan database structure
 *    - List all endpoints needed
 * 
 * 2. PLAN on paper
 *    - Draw data models
 *    - Map all endpoints
 *    - Identify relationships
 *    - Note validation rules
 * 
 * 3. CODE the solution
 *    - Define Mongoose schemas
 *    - Setup Express app
 *    - Implement routes
 *    - Add validation
 *    - Error handling
 * 
 * 4. TEST thoroughly
 *    - Test all endpoints
 *    - Test error cases
 *    - Test validations
 *    - Test relationships
 * 
 * 5. REVIEW solutions
 *    - Compare with BACKEND_MEDIUM_SOLUTIONS.js
 *    - Note patterns you missed
 *    - Understand best practices
 * 
 * 6. CODE AGAIN
 *    - Implement again without solution
 *    - Should be much faster
 * 
 * ============================================
 * KEY CONCEPTS FOR MEDIUM
 * ============================================
 * 
 * JWT:
 * - jwt.sign({ userId }, SECRET, { expiresIn })
 * - jwt.verify(token, SECRET)
 * - Bearer token in headers
 * 
 * Mongoose Relationships:
 * - ref: 'Model' for references
 * - populate() to fill references
 * - Cascading deletes
 * 
 * Complex Queries:
 * - $or, $and for multiple conditions
 * - $gte, $lte for ranges
 * - $regex for searching
 * - sort(), skip(), limit()
 * 
 * File Operations:
 * - multer middleware
 * - fs.unlink() for deletion
 * - express.static() for serving
 * 
 * Validation:
 * - Joi schema definition
 * - Pattern validation with regex
 * - Custom error messages
 * 
 * ============================================
 * TIPS FOR MEDIUM PROBLEMS
 * ============================================
 * ✓ Plan before coding
 * ✓ Use separate schemas for each model
 * ✓ Test complex scenarios
 * ✓ Handle all error cases
 * ✓ Use middleware for cross-cutting concerns
 * ✓ Name endpoints clearly
 * ✓ Document complex logic
 * ✓ Consider performance
 * 
 * ============================================
 */

export const MediumProblems = {
  medium: [
    {
      id: 'medium1',
      title: 'JWT Authentication Flow',
      difficulty: 'Medium',
      concepts: ['JWT', 'Authentication', 'Protected routes'],
      time: '45-60 min',
      frequency: '★★★★★'
    },
    {
      id: 'medium2',
      title: 'Multi-Endpoint REST API',
      difficulty: 'Medium',
      concepts: ['Relationships', 'Nested routes', 'Multiple models'],
      time: '60-75 min',
      frequency: '★★★★★'
    },
    {
      id: 'medium3',
      title: 'Pagination + Filtering + Sorting',
      difficulty: 'Medium',
      concepts: ['Advanced queries', 'Complex filtering', 'Pagination'],
      time: '45-60 min',
      frequency: '★★★★☆'
    },
    {
      id: 'medium4',
      title: 'File Upload API',
      difficulty: 'Medium',
      concepts: ['Multer', 'File handling', 'Validation'],
      time: '40-50 min',
      frequency: '★★★☆☆'
    },
    {
      id: 'medium5',
      title: 'Data Validation with Joi',
      difficulty: 'Medium',
      concepts: ['Joi validation', 'Regex patterns', 'Error handling'],
      time: '35-45 min',
      frequency: '★★★★☆'
    },
    {
      id: 'medium6',
      title: 'Search Functionality',
      difficulty: 'Medium',
      concepts: ['Text search', '$or operator', 'Regex'],
      time: '40-50 min',
      frequency: '★★★★☆'
    }
  ]
};
