// ============================================
// BACKEND EASY LEVEL CODING CHALLENGES
// Problems Asked in 4-10 LPA Companies
// ============================================
// Try to solve these WITHOUT looking at solutions!
// All problems use Node.js + Express + MongoDB

/**
 * EASY 1: SIMPLE USER CRUD API
 * =============================
 * 
 * PROBLEM STATEMENT:
 * Build a simple REST API that:
 * - GET /users → Return all users
 * - GET /users/:id → Return specific user
 * - POST /users → Create new user
 * - DELETE /users/:id → Delete user
 * 
 * REQUIREMENTS:
 * 1. Use Express for routing
 * 2. Use MongoDB/Mongoose for data
 * 3. Implement all 4 endpoints
 * 4. Return JSON responses
 * 5. Include error handling
 * 6. Use proper HTTP status codes
 * 
 * DATA MODEL:
 * User {
 *   _id: ObjectId,
 *   name: String (required),
 *   email: String (required, unique),
 *   age: Number,
 *   createdAt: Date
 * }
 * 
 * RESPONSE FORMAT:
 * Success: { success: true, data: {...} }
 * Error: { success: false, error: "message" }
 * 
 * CONCEPTS TESTED:
 * - Express routing (GET, POST, DELETE)
 * - MongoDB CRUD operations
 * - Request parameters (req.params, req.body)
 * - Response handling (res.json, res.status)
 * - Error handling (try/catch)
 * 
 * INTERVIEW TIPS:
 * - Check if user exists before delete/update
 * - Use proper status codes (200, 201, 404, 500)
 * - Handle validation (name, email required)
 * - Include error messages in response
 * 
 * THINK ABOUT:
 * - How to structure Express app?
 * - How to define Mongoose schema?
 * - How to handle async/await in routes?
 * - What if user ID doesn't exist?
 * - What if email already exists?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * EASY 2: BASIC AUTHENTICATION WITH PASSWORD
 * ============================================
 * 
 * PROBLEM STATEMENT:
 * Create user authentication:
 * - POST /register → Create account with password
 * - POST /login → Login with email & password
 * - Password must be hashed (use bcrypt)
 * - Return success/error message
 * 
 * REQUIREMENTS:
 * 1. Hash password before saving
 * 2. Compare password on login
 * 3. Return success message on login
 * 4. Validate email and password
 * 5. Check if user already exists
 * 6. Return appropriate error messages
 * 
 * DATA MODEL:
 * User {
 *   name: String,
 *   email: String (unique),
 *   password: String (hashed),
 *   createdAt: Date
 * }
 * 
 * CONCEPTS TESTED:
 * - bcrypt for password hashing
 * - Password comparison
 * - Validation
 * - Error handling
 * - Async/await
 * 
 * INTERVIEW TIPS:
 * - Never store plain passwords!
 * - Hash password with bcrypt.hash()
 * - Compare with bcrypt.compare()
 * - Check if user exists before register
 * - Give specific error messages
 * 
 * THINK ABOUT:
 * - How to use bcrypt.hash()?
 * - How to use bcrypt.compare()?
 * - What validation to do?
 * - How to structure request/response?
 * - What errors can happen?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * EASY 3: PAGINATION IN API
 * ===========================
 * 
 * PROBLEM STATEMENT:
 * Create paginated API:
 * - GET /products?page=1&limit=10
 * - Return 10 products per page
 * - Include total count in response
 * - Support custom page size
 * 
 * REQUIREMENTS:
 * 1. Accept page and limit in query
 * 2. Calculate skip value
 * 3. Return paginated data
 * 4. Include totalItems in response
 * 5. Include totalPages calculation
 * 6. Default: page=1, limit=10
 * 
 * RESPONSE FORMAT:
 * {
 *   success: true,
 *   page: 1,
 *   limit: 10,
 *   totalItems: 100,
 *   totalPages: 10,
 *   data: [...]
 * }
 * 
 * CONCEPTS TESTED:
 * - Query parameters (req.query)
 * - Pagination math
 * - MongoDB skip/limit
 * - Array slicing
 * 
 * INTERVIEW TIPS:
 * - skip = (page - 1) * limit
 * - totalPages = Math.ceil(totalItems / limit)
 * - Validate page and limit (min values)
 * - Handle edge cases (empty results)
 * 
 * THINK ABOUT:
 * - How to calculate skip?
 * - How to get total count?
 * - What if page > totalPages?
 * - How to validate inputs?
 * - What's default page size?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * EASY 4: FILTERING API
 * =======================
 * 
 * PROBLEM STATEMENT:
 * Create filtering API:
 * - GET /products?category=electronics&minPrice=100
 * - Filter products by multiple criteria
 * - Return matching products
 * 
 * REQUIREMENTS:
 * 1. Filter by category
 * 2. Filter by price range (minPrice, maxPrice)
 * 3. Combine multiple filters
 * 4. Return filtered results
 * 5. Return count of results
 * 
 * PRODUCTS DATA:
 * Product {
 *   name: String,
 *   category: String,
 *   price: Number,
 *   stock: Number
 * }
 * 
 * QUERY EXAMPLES:
 * /products?category=electronics
 * /products?minPrice=50&maxPrice=500
 * /products?category=mobile&minPrice=100
 * 
 * CONCEPTS TESTED:
 * - Query parameters
 * - MongoDB $gte, $lte operators
 * - Filtering logic
 * - Conditional filter building
 * 
 * INTERVIEW TIPS:
 * - Build filter object conditionally
 * - Use $gte for >= and $lte for <=
 * - Don't filter if param not provided
 * - Return count along with data
 * 
 * THINK ABOUT:
 * - How to build filter object?
 * - What if price range missing?
 * - How to handle $gte and $lte?
 * - Return only if filter matches?
 * - What format for response?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * EASY 5: SORTING API
 * ======================
 * 
 * PROBLEM STATEMENT:
 * Create sorting API:
 * - GET /products?sort=price&order=asc
 * - Sort by different fields
 * - Support ascending/descending
 * 
 * REQUIREMENTS:
 * 1. Accept sort field (name, price, date)
 * 2. Accept order (asc or desc)
 * 3. Sort the results
 * 4. Default sort by createdAt descending
 * 5. Return sorted data
 * 
 * QUERY EXAMPLES:
 * /products?sort=price&order=asc
 * /products?sort=name&order=desc
 * /products?sort=createdAt
 * 
 * CONCEPTS TESTED:
 * - Sorting in MongoDB
 * - Query parameters
 * - String to sort direction conversion
 * 
 * INTERVIEW TIPS:
 * - MongoDB sort: { field: 1 } or { field: -1 }
 * - 1 = ascending, -1 = descending
 * - Validate sort field (don't allow random fields)
 * - Set default sort
 * 
 * THINK ABOUT:
 * - How to use MongoDB sort?
 * - What fields are sortable?
 * - How to convert asc/desc to 1/-1?
 * - What if sort field invalid?
 * - What's reasonable default?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// ============================================
// HOW TO USE THIS FILE
// ============================================
/**
 * 
 * WORKFLOW:
 * 
 * 1. READ problem statement carefully
 * 2. PLAN your approach on paper
 *    - What routes do I need?
 *    - What models/schemas?
 *    - What logic per route?
 * 
 * 3. CODE the solution
 *    - Setup Express app
 *    - Define Mongoose schema
 *    - Write route handlers
 *    - Add error handling
 * 
 * 4. TEST your API
 *    - Use Postman or curl
 *    - Test all endpoints
 *    - Test error cases
 * 
 * 5. REVIEW & COMPARE
 *    - Check BACKEND_EASY_SOLUTIONS.js
 *    - Note differences
 *    - Understand patterns
 * 
 * 6. CODE AGAIN from memory
 *    - Don't look at solution
 *    - Implement same problem again
 *    - Should be faster this time
 * 
 * ============================================
 * KEY CONCEPTS TO REVIEW
 * ============================================
 * 
 * Express:
 * - app.get(), app.post(), app.delete()
 * - req.params (URL params)
 * - req.body (request body)
 * - req.query (query string)
 * - res.json(), res.status()
 * 
 * MongoDB/Mongoose:
 * - Schema definition
 * - Model creation
 * - find(), findById()
 * - create(), save()
 * - deleteOne(), updateOne()
 * 
 * Async/Await:
 * - try/catch blocks
 * - await database calls
 * - Error handling
 * 
 * ============================================
 * TIPS FOR EASY PROBLEMS
 * ============================================
 * ✓ Don't overthink - basic CRUD is fine
 * ✓ Focus on routing and database
 * ✓ Use try/catch for error handling
 * ✓ Test with Postman for each route
 * ✓ Check if record exists before operations
 * ✓ Use proper HTTP status codes
 * ✓ Return consistent JSON format
 * 
 * ============================================
 */

export const EasyProblems = {
  easy: [
    {
      id: 'easy1',
      title: 'Simple User CRUD API',
      difficulty: 'Easy',
      concepts: ['Express routing', 'MongoDB CRUD', 'Error handling'],
      time: '30-40 min',
      frequency: '★★★★★'
    },
    {
      id: 'easy2',
      title: 'Basic Authentication with Password',
      difficulty: 'Easy',
      concepts: ['bcrypt', 'Password hashing', 'Validation'],
      time: '30-40 min',
      frequency: '★★★★★'
    },
    {
      id: 'easy3',
      title: 'Pagination in API',
      difficulty: 'Easy',
      concepts: ['Query parameters', 'Pagination math', 'MongoDB limit/skip'],
      time: '20-30 min',
      frequency: '★★★★☆'
    },
    {
      id: 'easy4',
      title: 'Filtering API',
      difficulty: 'Easy',
      concepts: ['Query filtering', 'MongoDB operators', 'Conditional logic'],
      time: '25-35 min',
      frequency: '★★★★★'
    },
    {
      id: 'easy5',
      title: 'Sorting API',
      difficulty: 'Easy',
      concepts: ['Sorting', 'Query parameters', 'MongoDB sort'],
      time: '20-30 min',
      frequency: '★★★★☆'
    }
  ]
};
