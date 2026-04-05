# Backend 10-Day Coding Challenge Roadmap
## Building Confidence Through Practice (Node.js + Express + MongoDB)

> **Your Days: Days 1-10**  
> **Target:** Solve 1-2 problems per day  
> **Goal:** Master backend interview patterns (4-10 LPA level)  
> **Methodology:** Code First → Review Solutions → Repeat

---

## 📊 Challenge Overview

| Difficulty | Problems | Total Time | Pattern Focus |
|-----------|----------|-----------|---------------|
| **Easy** | 5 problems | 2.5-3.5 hours | CRUD API basics |
| **Medium** | 6 problems | 4-5 hours | Auth, relationships, validation |
| **Total** | 11 problems | 6.5-8.5 hours | Complete REST API patterns |

---

## 🎯 Day 1: Foundation + First Kill (Easy 1)
### Problem: Simple User CRUD API

**What You'll Build:**
- Express server with routing (GET, POST, DELETE)
- MongoDB schema definition and CRUD operations
- Error handling and validation
- Consistent JSON response format

**Time:** 30-40 minutes

**Key Learning:**
```javascript
// Basic structure you'll implement
app.get('/users', async (req, res) => {
  try {
    // Query database
    // Return response
  } catch (error) {
    // Handle error
  }
});
```

**After Coding:**
- ✅ Review BACKEND_EASY_SOLUTIONS.js → Easy 1
- ✅ Compare your implementation
- ✅ Note patterns you missed
- ✅ Code again from memory in 2 hours

**Time Spent:** 30-40 min coding + 20 min review = ~60 min  
**Confidence Gain:** ⭐⭐⭐⭐

---

## 🎯 Day 2: Authentication Basics (Easy 2)
### Problem: Basic Authentication with Password

**What You'll Build:**
- Registration endpoint with password validation
- Login endpoint with password comparison
- Password hashing with bcrypt
- User creation with validation

**Time:** 30-40 minutes

**Key Learning:**
```javascript
// What you'll use
const hashedPassword = await bcrypt.hash(password, 10);
const isValid = await bcrypt.compare(inputPassword, hashedPassword);

// Remember: NEVER store plain passwords!
```

**Build Order:**
1. Define User schema
2. Create register endpoint
3. Hash password before saving
4. Create login endpoint
5. Compare hashesfor validation
6. Return success/error messages

**After Coding:**
- ✅ Can you register a user?
- ✅ Can you login successfully?
- ✅ Does it reject wrong password?
- ✅ Review solution and compare

**Time Spent:** 30-40 min coding + 20 min review = ~60 min  
**Confidence Gain:** ⭐⭐⭐⭐

**Interview Value:** ⭐⭐⭐⭐⭐ (Asked in 95% of companies)

---

## 🎯 Day 3: Data Pagination (Easy 3)
### Problem: Pagination in API

**What You'll Build:**
- Query parameter parsing (page, limit)
- Skip/limit calculation
- Total count and pages calculation
- Paginated response format

**Time:** 20-30 minutes  
**Fastest Problem:** Perfect for a quick win!

**Key Learning:**
```javascript
// Pagination math (very important!)
skip = (page - 1) * limit
totalPages = Math.ceil(totalItems / limit)
```

**After Coding:**
- ✅ Test with ?page=1&limit=10
- ✅ Test with ?page=2&limit=5
- ✅ Verify calculations
- ✅ Check error cases (page > totalPages)

**Time Spent:** 20-30 min coding + 15 min review = ~50 min  
**Confidence Gain:** ⭐⭐⭐⭐

---

## 🎯 Day 4: Filtering (Easy 4) + Sorting (Easy 5) - Combo Day
### Problems: Filtering API + Sorting API

**What You'll Build (Problem 1):**
- Build filter object conditionally
- Filter by multiple criteria (category, price range)
- Use MongoDB operators ($gte, $lte)
- Combine filters

**What You'll Build (Problem 2):**
- Sort by different fields
- Support asc/desc order
- Validate sort fields (security)
- Set default sort

**Time:** 45-55 minutes total

**Key Patterns:**
```javascript
// Filtering
let filter = {};
if (category) filter.category = category;
if (minPrice) filter.price.$gte = parseFloat(minPrice);

// Sorting
const sortOrder = order === 'desc' ? -1 : 1;
const sortObject = { [field]: sortOrder };
```

**After Coding:**
- ✅ Can you filter by category?
- ✅ Can you do price range?
- ✅ Can you sort by price ascending?
- ✅ Review both solutions

**Time Spent:** 45-55 min coding + 20 min review = ~75 min  
**Confidence Gain:** ⭐⭐⭐⭐⭐

**Interview Value:** ⭐⭐⭐⭐⭐ (Filtering/sorting in every API interview)

---

## 📊 Mid-Point Check (Days 1-4)
### You've Completed: 5 Easy Problems

**Concepts Mastered:**
- ✅ Express routing (GET, POST, DELETE)
- ✅ MongoDB CRUD operations
- ✅ Password hashing (bcrypt)
- ✅ Pagination math
- ✅ Filtering with operators
- ✅ Sorting in MongoDB
- ✅ Error handling basics
- ✅ Response formatting

**Time Invested:** ~4.5 hours of actual coding  
**Next Level:** Ready for Medium problems (more complex)

**Confidence Check:**
- Could you build a basic product API? **YES ✓**
- Would you code without looking at solutions? **Maybe 80%**

---

## 🎯 Day 5: JWT Authentication (Medium 1)
### Problem: Complete JWT Authentication Flow

**Major Leap** - This is the first truly Medium problem!

**What You'll Build:**
- Register endpoint (hash + validate)
- Login endpoint (generate JWT token)
- Auth middleware (verify token)
- Protected route (/profile)
- Handle token expiry (7 days)

**Time:** 45-60 minutes  
**Difficulty:** ⭐⭐⭐

**Key Pattern:**
```javascript
// Generate JWT
const token = jwt.sign(
  { userId: user._id },
  JWT_SECRET,
  { expiresIn: '7d' }
);

// Verify in middleware
const decoded = jwt.verify(token, JWT_SECRET);
req.user = decoded; // Attach user
next();

// Use middleware
app.get('/profile', authMiddleware, handler);
```

**Build Steps:**
1. Generate token on login
2. Extract token from header ("Bearer <token>")
3. Create auth middleware
4. Verify token on protected routes
5. Attach user to request
6. Handle expired tokens

**Test Scenarios:**
- ✅ Register new user
- ✅ Login and get token
- ✅ Access /profile with token
- ✅ Access /profile without token (should fail)
- ✅ Use expired token (should fail)

**After Coding:**
- ✅ Review solution thoroughly (this is complex!)
- ✅ Understand every line
- ✅ Don't move forward until comfortable

**Time Spent:** 45-60 min coding + 30 min review = ~90 min  
**Confidence Gain:** ⭐⭐⭐⭐⭐

**Interview Value:** ⭐⭐⭐⭐⭐ (Core authentication pattern)

---

## 🎯 Day 6: Complex APIs with Relationships (Medium 2)
### Problem: Multi-Endpoint REST API (Blog System)

**Most Complex Problem Yet!**

**What You'll Build:**
- 3 models: User, Post, Comment
- User has many Posts
- Post has many Comments
- 10+ endpoints total

**Endpoints to Implement:**
```
Users:
  GET /users (list all)
  POST /users (create)
  GET /users/:id (get one)
  PUT /users/:id (update)
  DELETE /users/:id (delete)

Posts:
  GET /users/:userId/posts (user's posts)
  POST /users/:userId/posts (create post)
  GET /posts/:postId (get post)
  PUT /posts/:postId (update)
  DELETE /posts/:postId (delete)

Comments:
  GET /posts/:postId/comments
  POST /posts/:postId/comments
  DELETE /comments/:commentId
```

**Time:** 60-75 minutes  
**Difficulty:** ⭐⭐⭐⭐

**Key Pattern - Relationships:**
```javascript
// Define reference
author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

// Use populate
const post = await Post.findById(id).populate('author');

// Add to array
await User.findByIdAndUpdate(userId, { $push: { posts: postId } });
```

**Complex Scenario:**
- Delete a user → Should also delete all their posts
- Delete a post → Should delete all its comments

**After Coding:**
- ⚠️ **Spend 30-40 min on review!**
- ✅ Understand model relationships
- ✅ Study populate() usage
- ✅ Understand cascade delete
- ✅ This pattern repeats in many interviews

**Time Spent:** 60-75 min coding + 40 min review = ~2 hours  
**Confidence Gain:** ⭐⭐⭐⭐

**Interview Value:** ⭐⭐⭐⭐⭐ (Most realistic API design)

---

## 🎯 Day 7: Advanced Search (Medium 3)
### Problem: Pagination + Filtering + Sorting Combined

**What You'll Build:**
- Single endpoint that handles:
  - Text search (name, description, brand)
  - Category filtering
  - Price range filtering
  - Sorting by different fields
  - Pagination
  - All combined!

**Complex Query Example:**
```
GET /products?search=laptop&category=electronics&minPrice=100&maxPrice=5000&
              sort=price&order=asc&page=1&limit=10
```

**Time:** 45-60 minutes  
**Difficulty:** ⭐⭐⭐

**Key Pattern:**
```javascript
filter.$or = [
  { name: { $regex: search, $options: 'i' } },
  { description: { $regex: search, $options: 'i' } }
];

// Then add other filters...
// Then sort...
// Then paginate...
```

**After Coding:**
- ✅ Test all filter combinations
- ✅ Test search (case-insensitive)
- ✅ Test sorting with filtering
- ✅ Test pagination with all filters

**Time Spent:** 45-60 min coding + 20 min review = ~80 min  
**Confidence Gain:** ⭐⭐⭐⭐⭐

**Interview Value:** ⭐⭐⭐⭐⭐ (E-commerce APIs use this pattern)

---

## 🎯 Day 8: File Upload (Medium 4) + Validation (Medium 5) - Combo Day
### Problems: File Upload API + Data Validation with Joi

**Problem 1: File Upload (20-30 min)**
- Configure multer
- Validate file type (jpg, png only)
- Validate file size (< 5MB)
- Save to disk
- Serve static files
- Delete file endpoint

**Problem 2: Data Validation (35-45 min)**
- Define Joi schemas
- Validate email format
- Validate password strength
- Validate phone format
- Return detailed error messages
- Create validation middleware

**Key Patterns:**
```javascript
// Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    // Validate
  }
});

// Joi
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(/.../).required()
});
```

**Time:** 55-75 minutes total  
**Difficulty:** ⭐⭐⭐

**After Coding:**
- ✅ Upload a file and verify it's saved
- ✅ Try uploading invalid file (should fail)
- ✅ Test validation on form data
- ✅ Verify error messages are clear

**Time Spent:** 55-75 min coding + 25 min review = ~2 hours  
**Confidence Gain:** ⭐⭐⭐⭐

---

## 🎯 Day 9: Search Functionality (Medium 6)
### Problem: Advanced Search with Relevance

**What You'll Build:**
- Search across multiple fields (name, description, brand)
- Case-insensitive search
- Return match count
- Limit results for performance

**Key Pattern:**
```javascript
const searchFilter = {
  $or: [
    { name: { $regex: q, $options: 'i' } },
    { description: { $regex: q, $options: 'i' } },
    { brand: { $regex: q, $options: 'i' } }
  ]
};
```

**Time:** 40-50 minutes  
**Difficulty:** ⭐⭐⭐

**After Coding:**
- ✅ Search for "laptop"
- ✅ Verify case-insensitive
- ✅ Check all fields searched
- ✅ Limit results

**Time Spent:** 40-50 min coding + 15 min review = ~60 min  
**Confidence Gain:** ⭐⭐⭐⭐

---

## 📊 Final Check (Days 1-9)
### You've Completed: 11 Total Problems (5 Easy + 6 Medium)

**Concepts Mastered:**
- ✅ Complete CRUD APIs
- ✅ Authentication (basic + JWT)
- ✅ Relationships (references, populate)
- ✅ Pagination, Filtering, Sorting
- ✅ Advanced search
- ✅ File uploads (multer)
- ✅ Data validation (Joi)
- ✅ Error handling
- ✅ Middleware patterns

**Total Time:** ~8-10 hours of actual coding

**Confidence Check:**
- Could you build a production API? **YES ✓✓**
- Would you code WITHOUT looking at solutions? **YES 90%**
- Ready for job interviews? **YES ABSOLUTELY ✓**

---

## 🎯 Day 10: Review + Speed Challenge
### Your Last Day - Consolidation

**Morning (2 hours): Review Hardest Problem**
- Re-read Medium 2 (Multi-Endpoint API)
- Review relationships and populate()
- Code one section from memory

**Afternoon (2 hours): Speed Challenge**
- Pick your weakest problem
- Code it again without solution
- How much faster? (Should be 50% faster)
- Time yourself

**Evening (1 hour): Prepare for Interviews**
- List all concepts learned
- Pick 2-3 favorite problems
- Practice explaining solution verbally
- Prepare answers: "What was challenging?"

---

## 📋 Interview Preparation Checklists

### Backend Concepts You Can Now Explain:

**Routing & Middleware:**
- [ ] How Express routing works
- [ ] What middleware is and why
- [ ] How to chain middleware
- [ ] Error handling middleware

**Authentication & Security:**
- [ ] How password hashing works (bcrypt)
- [ ] How JWT works (sign, verify, decode)
- [ ] How to protect routes
- [ ] How to handle token expiry

**Database Patterns:**
- [ ] CRUD operations
- [ ] Model relationships (references)
- [ ] Populate in Mongoose
- [ ] Query filtering with operators

**API Design:**
- [ ] HTTP status codes (what each means)
- [ ] REST principles (resource-based)
- [ ] Pagination implementation
- [ ] Filtering and sorting patterns
- [ ] Error response format

**File Operations:**
- [ ] File upload with multer
- [ ] File validation
- [ ] Serving static files
- [ ] File deletion

**Validation:**
- [ ] Input validation importance
- [ ] Joi schema definition
- [ ] Regex patterns for validation
- [ ] Error message formatting

---

## 🚀 Common Interview Questions You Can Answer

**Q1: "Explain how authentication works in your project"**
```
Answer framework:
1. Registration: Hash password with bcrypt, save user
2. Login: Get password, compare with bcrypt
3. Return JWT token on success
4. Client stores token
5. Protected routes verify JWT via middleware
6. Middleware extracts token, verifies, attaches user to request
```

**Q2: "How do you handle relationships between models?"**
```
Answer framework:
1. Define reference in schema: author: { type: ObjectId, ref: 'User' }
2. When querying, use populate() to join data
3. Example: Post.findById(id).populate('author')
4. For cascade delete, delete related documents first
```

**Q3: "How would you implement pagination?"**
```
Answer framework:
1. Get page and limit from query params
2. Calculate skip: (page - 1) * limit
3. Query with .skip(skip).limit(limit)
4. Get total count to calculate totalPages
5. Return page info + data
```

**Q4: "How do you validate user input?"**
```
Answer framework:
1. Use Joi for schema validation
2. Define schema with rules (min, max, email, regex)
3. Create validation middleware
4. Return specific error messages
5. Check both format and content
```

---

## 💡 Pro Tips for Your 10 Days

### Code Quality:
- ✅ Always use try/catch
- ✅ Always check if record exists
- ✅ Always validate inputs
- ✅ Always use proper status codes
- ✅ Always return consistent format

### Testing:
- ✅ Use Postman or similar tool
- ✅ Test happy path first
- ✅ Then test error cases
- ✅ Check non-existent IDs
- ✅ Check invalid inputs

### Learning:
- ✅ Code first, then review
- ✅ Understand WHY, not just HOW
- ✅ Do second pass without solution
- ✅ Explain code out loud
- ✅ Practice similar patterns

### Interview Prep:
- ✅ Prepare 1-2 minute explanations
- ✅ Know your hardest problem inside-out
- ✅ Have answers for "what was challenging?"
- ✅ Be ready to modify solutions
- ✅ Practice thinking out loud

---

## 📊 Success Metrics

By Day 10, you should:
- ✅ Understand every pattern
- ✅ Code without looking at solutions
- ✅ Explain your code clearly
- ✅ Modify solutions easily
- ✅ Apply patterns to new problems
- ✅ Confident in interviews

---

## 🎓 What's Next After 10 Days?

**If confident:** Start practicing Hard problems (advanced patterns)  
**If want more practice:** Repeat Easy + Medium problems  
**If ready for interviews:** Practice mock interviews, system design, and live coding

---

## 📚 Files to Reference

| File | Purpose |
|------|---------|
| `BACKEND_CONCEPTS.md` | Concept reference while coding |
| `BACKEND_EASY_CHALLENGES.js` | Easy problem statements |
| `BACKEND_MEDIUM_CHALLENGES.js` | Medium problem statements |
| `BACKEND_EASY_SOLUTIONS.js` | Easy solutions after 30+ min |
| `BACKEND_MEDIUM_SOLUTIONS.js` | Medium solutions after 40+ min |
| `BACKEND_10DAY_TRACKER.md` | Track daily progress |

---

**Good luck! Remember: Code first, no AI help, review after coding. By Day 10, you'll be unstoppable. 🚀**