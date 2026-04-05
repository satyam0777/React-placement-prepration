# Backend 10-Day Practice Tracker
## Track Your Daily Progress & Build Momentum

**Start Date:** ___________  
**Target End Date:** ___________  
**Time Available per Day:** 1-2 hours

---

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| Total Problems | 11 |
| Easy Problems | 5 |
| Medium Problems | 6 |
| Total Time Needed | 8-10 hours |
| Recommended Days | 10 days |
| Time per Day | 45 min - 1.5 hours |

---

## 🎯 DAY 1: Simple User CRUD API (Easy 1)

**Problem:** Build Express API with GET, POST, DELETE for users

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**What I Learned:**
```
Key Pattern 1: 
Key Pattern 2: 
Key Mistake I Made:
```

**Confidence Level:** ☐☐☐☐☐ (1=Low, 5=High)

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 2: Authentication with Password (Easy 2)

**Problem:** Register & login with bcrypt password hashing

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**What I Learned:**
```
bcrypt.hash() usage:
bcrypt.compare() usage:
Key Security Pattern:
```

**Confidence Level:** ☐☐☐☐☐

**Common Mistakes to Avoid:**
- [ ] Storing plain passwords? NO! Always hash
- [ ] Using wrong salt rounds? Use 10
- [ ] Forgot to await bcrypt? Always await
- [ ] Wrong password comparison logic?

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 3: Pagination API (Easy 3)

**Problem:** Implement pagination with page & limit

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**Formula I Used:**
```
skip = (page - 1) * limit
totalPages = Math.ceil(totalItems / limit)
```

**Tested Scenarios:**
- [ ] page=1, limit=10 ✓
- [ ] page=2, limit=5 ✓
- [ ] page > totalPages handled ✓
- [ ] Default values work ✓

**Confidence Level:** ☐☐☐☐☐

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 4: Filtering (Easy 4) + Sorting (Easy 5)

**Problem 1:** Filter by category and price range  
**Problem 2:** Sort by different fields (asc/desc)

### Problem 4: Filtering

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:** _______ min

**Filter Pattern I Used:**
```javascript
let filter = {};
if (category) filter.category = category;
if (minPrice) filter.price.$gte = parseFloat(minPrice);
```

**Tested:**
- [ ] Category filter ✓
- [ ] Price range filter ✓
- [ ] Combined filters ✓

---

### Problem 5: Sorting

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:** _______ min

**Sort Pattern I Used:**
```javascript
// 1 = ascending, -1 = descending
const sortObject = { [field]: order === 'asc' ? 1 : -1 };
```

**Tested:**
- [ ] Sort by price ascending ✓
- [ ] Sort by name descending ✓
- [ ] Default sort applied ✓
- [ ] Validate sort field ✓

**Confidence Level (Both):** ☐☐☐☐☐

**Total Time Today:** _______ min

**Notes:**
_________________________________
_________________________________

---

## 📊 MID-POINT CHECK (End of Day 4)

### Completed: 5 Easy Problems ✓

**Concepts Understood:**
- [ ] Express routing (GET, POST, DELETE)
- [ ] MongoDB CRUD
- [ ] Password hashing with bcrypt
- [ ] Pagination math
- [ ] Filtering with operators
- [ ] Sorting with MongoDB
- [ ] Error handling
- [ ] Response formatting

**Time Invested:** _______ hours

**Confidence:** Am I ready for Medium problems?
- [ ] YES - Move to Medium
- [ ] MAYBE - Review 1-2 problems
- [ ] NO - Practice more

**Feeling:** How confident about backend APIs?
☐☐☐☐☐ (1=Struggling, 5=Very confident)

**Next:** Jump into Medium problems!

---

## 🎯 DAY 5: JWT Authentication Complete (Medium 1)

**Problem:** Register, Login, Protected Routes with JWT

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**JWT Pattern I Implemented:**
```javascript
// Generate
const token = jwt.sign({ userId }, SECRET, { expiresIn: '7d' });

// Verify in middleware
const decoded = jwt.verify(token, JWT_SECRET);
req.user = decoded;

// Use middleware
app.get('/profile', authMiddleware, handler);
```

**Tested Scenarios:**
- [ ] Register new user ✓
- [ ] Login with correct password ✓
- [ ] Login with wrong password fails ✓
- [ ] Access /profile with token ✓
- [ ] Access /profile without token fails ✓
- [ ] Expired token fails ✓

**Confidence Level:** ☐☐☐☐☐

**Interview Prep:** Can I explain JWT in 2 minutes?
- [ ] Yes, clearly
- [ ] Somewhat
- [ ] Need more practice

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 6: Multi-Endpoint REST API (Medium 2)

**Problem:** Blog system with Users, Posts, Comments

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**Endpoints Implemented:**
- [ ] GET /users
- [ ] POST /users
- [ ] GET /users/:id
- [ ] PUT /users/:id
- [ ] DELETE /users/:id
- [ ] GET /users/:userId/posts
- [ ] POST /users/:userId/posts
- [ ] GET /posts/:postId
- [ ] PUT /posts/:postId
- [ ] DELETE /posts/:postId
- [ ] POST /posts/:postId/comments
- [ ] DELETE /comments/:commentId

**Relationship Pattern Used:**
```javascript
author: { type: ObjectId, ref: 'User' }
// Then: Post.findById(id).populate('author')
```

**Tested Scenarios:**
- [ ] Create post for user ✓
- [ ] Get posts with author details (populate) ✓
- [ ] Delete post (remove from user array) ✓
- [ ] Delete user (cascade delete posts) ✓
- [ ] Add comment to post ✓

**Most Challenging Part:** 
_________________________________

**Confidence Level:** ☐☐☐☐☐

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 7: Advanced Search (Medium 3)

**Problem:** Combined Pagination + Filtering + Sorting

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**Query I Handled:**
```
/products?search=laptop&category=electronics&minPrice=100&
          maxPrice=5000&sort=price&order=asc&page=1&limit=10
```

**Implementation Order:**
1. Build search filter ($or with $regex)
2. Add category filter
3. Add price range filter
4. Handle sorting
5. Handle pagination
6. Return with total counts

**Tested Scenarios:**
- [ ] Search in multiple fields ✓
- [ ] Case-insensitive search ✓
- [ ] Filter + search together ✓
- [ ] Sort + filter + paginate ✓
- [ ] All parameters together ✓

**Performance Consideration:** Limit searches to top 20 results ✓

**Confidence Level:** ☐☐☐☐☐

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 8: File Upload (Medium 4) + Validation (Medium 5)

### Problem 4: File Upload with Multer

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:** _______ min

**Multer Configuration:**
```javascript
[ ] fileSize limit (5MB)
[ ] file filter (jpg, png only)
[ ] storage configuration
[ ] unique filename generation
```

**Features Implemented:**
- [ ] File upload endpoint ✓
- [ ] File validation (type & size) ✓
- [ ] Serve static files ✓
- [ ] File deletion ✓

**Tested:**
- [ ] Upload valid file ✓
- [ ] Reject invalid type ✓
- [ ] Reject oversized file ✓
- [ ] Delete file ✓

---

### Problem 5: Joi Validation

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:** _______ min

**Validation Rules Implemented:**
```javascript
[ ] Email format
[ ] Password strength (8+ chars, 1 uppercase, 1 number)
[ ] Name length (3-50 chars)
[ ] Phone format (10 digits)
[ ] Age range (18-120)
```

**Joi Schema Pattern:**
```javascript
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(/regex/).required()
});
```

**Custom Error Messages:** ✓

**Tested:**
- [ ] Valid data passes ✓
- [ ] Invalid email rejected ✓
- [ ] Weak password rejected ✓
- [ ] Error messages clear ✓

**Confidence Level (Both):** ☐☐☐☐☐

**Total Time Today:** _______ min

**Notes:**
_________________________________
_________________________________

---

## 🎯 DAY 9: Search with Regex (Medium 6)

**Problem:** Search across multiple fields with case-insensitive matching

**Status:**
- [ ] Started
- [ ] Coding Complete
- [ ] Solution Reviewed
- [ ] Coded Again from Memory

**Time Tracking:**
- First Attempt: _______ min
- Solution Review: _______ min
- Second Attempt: _______ min
- **Total Today:** _______ min

**Pattern I Used:**
```javascript
const filter = {
  $or: [
    { name: { $regex: q, $options: 'i' } },
    { description: { $regex: q, $options: 'i' } },
    { brand: { $regex: q, $options: 'i' } }
  ]
};
```

**Key Concepts:**
- [ ] $regex operator
- [ ] $options: 'i' (case-insensitive)
- [ ] $or for multiple fields
- [ ] Limit results (20)

**Tested Scenarios:**
- [ ] Search by name ✓
- [ ] Search by description ✓
- [ ] Search case-insensitive ✓
- [ ] All fields searchable ✓
- [ ] Results limited ✓

**Confidence Level:** ☐☐☐☐☐

**Notes:**
_________________________________
_________________________________

---

## ⭐ FINAL CHECK (End of Day 9)

### Completed: 11 Total Problems ✓

**All Concepts Mastered:**
- [ ] CRUD APIs (5/5)
- [ ] Authentication (2/2)
- [ ] Relationships & populate (1/1)
- [ ] Pagination (1/1)
- [ ] Filtering (1/1)
- [ ] Sorting (1/1)
- [ ] Advanced search (2/2)
- [ ] File uploads (1/1)
- [ ] Data validation (1/1)

**Total Time Invested:** _______ hours

**Can I Build API Without Solutions?** ✓ YES / ___ NO

**Interview Readiness:** ☐☐☐☐☐ (1=Not ready, 5=Ready)

---

## 🎯 DAY 10: Review & Consolidation

**Morning Session (2 hours): Review + Deep Dive**

Problem You'll Review: _________

- [ ] Re-read problem statement
- [ ] Understand every line of solution
- [ ] Code one section from memory
- [ ] Check where you got stuck
- [ ] Note learning for interviews

**Afternoon Session (2 hours): Speed Challenge**

Problem Selected: _________

- [ ] Try to code without solution
- [ ] Time yourself
- [ ] How much faster than Day 1? _______ %
- [ ] Compare with solution
- [ ] Review mistakes

**Evening Session (1 hour): Interview Preparation**

- [ ] Write down all 11 problems
- [ ] Pick your 3 strongest
- [ ] Pick your 1 weakest
- [ ] Prepare 2-minute explanation for each
- [ ] Practice talking through the code

**Concepts I Can Explain Clearly:**
```
[ ] JWT authentication flow
[ ] Mongoose relationships
[ ] Pagination implementation
[ ] Validation with Joi
[ ] Error handling middleware
[ ] File uploads with multer
```

---

## 📋 Self-Assessment Checklist

**After 10 Days, Can I:**

- [ ] Build a User CRUD API from scratch
- [ ] Implement JWT authentication
- [ ] Create relationships between models
- [ ] Implement pagination, filtering, sorting
- [ ] Handle file uploads
- [ ] Validate user input
- [ ] Explain code in interviews
- [ ] Handle error cases
- [ ] Modify implementations for new requirements
- [ ] Write production-ready code

**Interview Readiness Score:** _____ /10

**Confidence Level:** ☐☐☐☐☐

---

## 🚀 What's Next?

**Immediate Next Steps:**
- [ ] Practice Mock Interviews
- [ ] Do Hard Problems (if available)
- [ ] Practice on LeetCode (backend problems)
- [ ] Build small project using patterns
- [ ] Join mock interviews with friends

**Before Interviews:**
- [ ] Review all 11 problems
- [ ] Practice live coding (write while talking)
- [ ] Prepare system design answers
- [ ] Know company's tech stack
- [ ] Practice explaining code clearly

**Success Criteria:**
You're ready when you can:
- ✓ Code smoothly without hesitation
- ✓ Explain every decision you make
- ✓ Handle edge cases
- ✓ Write clean, readable code
- ✓ Asked "can you change X?" and you can pivot easily

---

## 💪 Daily Motivation

**Remember:**
- Day 1-2: "This is hard" → Day 9-10: "This is easy"
- You're building muscle memory
- Each problem teaches 3-4 reusable patterns
- By Day 10, you've seen 95% of backend interview patterns
- You've got this! 🚀

**Total Time Invested:** _______ hours  
**Problems Solved:** 11/11  
**Confidence Gained:** ∞  

---

**Celebration: 🎉 You completed backend mastery challenge!**

Good luck in your interviews!
