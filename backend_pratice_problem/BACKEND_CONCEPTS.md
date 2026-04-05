# BACKEND DEVELOPMENT - ALL CONCEPTS GUIDE
## For 4-10 LPA Companies Interview Preparation

---

## 📋 TABLE OF CONTENTS

1. **Core Backend Concepts**
2. **Node.js & Express**
3. **Databases**
4. **Authentication & Security**
5. **API Design**
6. **Data Structures & Algorithms (Backend Focus)**
7. **Middleware & Request Handling**
8. **File & Stream Operations**
9. **Testing & Debugging**
10. **Common Interview Patterns**

---

## 1️⃣ CORE BACKEND CONCEPTS

### What is Backend?
The server-side code that:
- Receives requests from frontend
- Processes data
- Interacts with databases
- Returns responses

### Basic Flow:
```
Client Request → Server Processing → Database Query → Response
```

---

## 2️⃣ NODE.JS & EXPRESS

### Node.js Basics

**What is Node.js?**
- JavaScript runtime for backend
- Non-blocking I/O model
- Event-driven architecture
- Uses V8 engine

**Key Features:**
```javascript
// Create a simple server
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000);
```

### Express Framework

**What is Express?**
- Minimalist web framework for Node.js
- Handles routing, middleware, etc.
- Most popular backend framework

**Basic Setup:**
```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

// Start server
app.listen(3000, () => console.log('Server running'));
```

### Key Express Concepts:

**Routing:**
```javascript
// GET - Retrieve data
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId });
});

// POST - Create data
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.json({ created: newUser });
});

// PUT - Update data
app.put('/users/:id', (req, res) => {
  const updatedUser = req.body;
  res.json({ updated: updatedUser });
});

// DELETE - Delete data
app.delete('/users/:id', (req, res) => {
  res.json({ deleted: req.params.id });
});
```

**Middleware:**
```javascript
// Custom middleware
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next(); // Pass to next middleware
};

app.use(logMiddleware);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});
```

**Request & Response:**
```javascript
// Request
req.params      // URL parameters: /users/:id
req.query       // Query string: ?name=john
req.body        // Request body (form/JSON)
req.headers     // HTTP headers

// Response
res.status(200).json(data)    // Send JSON
res.send(data)                // Send any data
res.append('header', 'value') // Add headers
res.redirect('/path')         // Redirect
```

---

## 3️⃣ DATABASES

### Types of Databases:

**SQL (Relational):**
- MySQL, PostgreSQL, SQL Server
- Tables with rows/columns
- Fixed schema
- Relationships between tables

**NoSQL:**
- MongoDB, Firebase, DynamoDB
- Flexible schema
- Collections/documents
- Good for unstructured data

### MongoDB Basics (Most Asked)

**What is MongoDB?**
- NoSQL document database
- Stores JSON-like documents
- No fixed schema
- Easy to scale

**Basic Operations:**

```javascript
// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create Model
const User = mongoose.model('User', userSchema);

// CREATE - Insert new document
const newUser = new User({ name: 'John', email: 'john@email.com' });
newUser.save();

// Or
User.create({ name: 'John', email: 'john@email.com' });

// READ - Find documents
User.find();                    // All users
User.findById(id);              // Find by ID
User.findOne({ email: 'john@email.com' }); // Find one

// UPDATE - Update document
User.findByIdAndUpdate(id, { name: 'Jane' });
User.updateOne({ email }, { $set: { age: 30 } });

// DELETE - Delete document
User.findByIdAndDelete(id);
User.deleteOne({ email });
```

**MongoDB Operators:**
```javascript
// Comparison
{ age: { $gt: 18 } }      // Greater than
{ age: { $lt: 65 } }      // Less than
{ age: { $gte: 18 } }     // Greater than or equal
{ age: { $lte: 65 } }     // Less than or equal

// Logical
{ $and: [{ age: 18 }, { city: 'NYC' }] }
{ $or: [{ age: 18 }, { age: 65 }] }

// Array
{ tags: { $in: ['node', 'react'] } }
{ tags: { $all: ['node', 'react'] } }
```

### SQL Basics

```javascript
// MySQL with Node.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// CREATE
connection.query(
  'INSERT INTO users (name, email) VALUES (?, ?)',
  ['John', 'john@email.com'],
  (error, results) => { ... }
);

// READ
connection.query('SELECT * FROM users', (error, results) => {
  console.log(results); // Array of rows
});

// UPDATE
connection.query(
  'UPDATE users SET age = ? WHERE id = ?',
  [30, 1],
  (error, results) => { ... }
);

// DELETE
connection.query(
  'DELETE FROM users WHERE id = ?',
  [1],
  (error, results) => { ... }
);
```

---

## 4️⃣ AUTHENTICATION & SECURITY

### Password Hashing

**Why Hash?**
- Never store plain passwords
- One-way encryption
- Can't be reversed

```javascript
const bcrypt = require('bcrypt');

// Hash password
const password = 'myPassword123';
const hashedPassword = await bcrypt.hash(password, 10);

// Verify password
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
```

### JWT (JSON Web Tokens)

**What is JWT?**
- Token-based authentication
- Stateless (no session needed)
- Contains user info

**How it works:**
```javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign(
  { userId: 123, email: 'john@email.com' },
  'SECRET_KEY',
  { expiresIn: '24h' }
);

// Verify token
const decoded = jwt.verify(token, 'SECRET_KEY');
console.log(decoded.userId); // 123

// Middleware to check token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const decoded = jwt.verify(token, 'SECRET_KEY');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

### Input Validation

**Why Validate?**
- Prevent bad data entry
- Security (SQL injection, XSS)
- Data consistency

```javascript
// Manual validation
if (!email || !email.includes('@')) {
  return res.status(400).json({ error: 'Invalid email' });
}

// Using validation library
const joi = require('joi');

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  age: joi.number().min(0).max(150)
});

const { error, value } = schema.validate(req.body);
if (error) {
  return res.status(400).json({ error: error.message });
}
```

---

## 5️⃣ API DESIGN

### RESTful APIs

**REST Principles:**
- Use HTTP methods correctly
- Resource-based URLs
- Stateless
- Meaningful status codes

**HTTP Status Codes:**
```
200 - OK (Success)
201 - Created (New resource)
400 - Bad Request (Client error)
401 - Unauthorized (Need auth)
403 - Forbidden (No permission)
404 - Not Found
500 - Server Error
```

**Good API Design:**
```javascript
// User API Example
// GET /api/users              - Get all users
// POST /api/users             - Create user
// GET /api/users/:id          - Get specific user
// PUT /api/users/:id          - Update user
// DELETE /api/users/:id       - Delete user

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

**Standard Response Format:**
```javascript
// Success Response
{
  success: true,
  data: { ... }
}

// Error Response
{
  success: false,
  error: "Error message"
}
```

---

## 6️⃣ DATA STRUCTURES & ALGORITHMS (Backend Focus)

### Common Patterns:

**Array Operations:**
```javascript
// Filter users by age > 18
const adults = users.filter(user => user.age > 18);

// Map to get only names
const names = users.map(user => user.name);

// Find first user named John
const john = users.find(user => user.name === 'John');

// Check if any user is admin
const hasAdmin = users.some(user => user.role === 'admin');

// Sum total age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
```

**Object Operations:**
```javascript
// Merge objects
const merged = { ...user, ...updates };

// Extract specific fields
const { name, email } = user;

// Check if key exists
if ('age' in user) { ... }
```

**Sorting:**
```javascript
// Sort by age ascending
users.sort((a, b) => a.age - b.age);

// Sort by age descending
users.sort((a, b) => b.age - a.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));
```

### Common Algorithms:

**Searching:**
```javascript
// Linear search O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary search O(log n) - requires sorted array
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

**Sorting in API Queries:**
```javascript
// Backend should provide sorting option
app.get('/users', async (req, res) => {
  const { sort = 'name', order = 'asc' } = req.query;
  // ?sort=age&order=desc
  
  const sortObj = {};
  sortObj[sort] = order === 'desc' ? -1 : 1;
  
  const users = await User.find().sort(sortObj);
  res.json(users);
});
```

---

## 7️⃣ MIDDLEWARE & REQUEST HANDLING

### What is Middleware?
- Functions that process requests
- Run before route handlers
- Can modify request/response
- Can pass to next middleware

**Common Middleware:**

```javascript
// Logging
const logMiddleware = (req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
};

// Error handling
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
};

// CORS (Cross-Origin)
const cors = require('cors');
app.use(cors());

// Body parser (JSON)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  
  try {
    const user = jwt.verify(token, 'SECRET');
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/protected', auth, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});
```

---

## 8️⃣ FILE & STREAM OPERATIONS

### Reading/Writing Files

```javascript
const fs = require('fs');

// Synchronous (blocks code)
const data = fs.readFileSync('file.txt', 'utf8');

// Asynchronous (non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) console.error(err);
  console.log(data);
});

// Promise-based
const data = await fs.promises.readFile('file.txt', 'utf8');

// Write file
fs.writeFile('file.txt', 'content', (err) => {
  if (err) console.error(err);
});

// Append to file
fs.appendFile('file.txt', 'more content', (err) => {
  if (err) console.error(err);
});
```

### Streams (For Large Files)

```javascript
// Read stream
const readStream = fs.createReadStream('largefile.txt');
readStream.on('data', (chunk) => {
  console.log(chunk);
});

// Write stream
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);

// File upload with multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // { filename, size, path, etc. }
  res.json({ message: 'File uploaded' });
});
```

---

## 9️⃣ ASYNC/AWAIT & PROMISES

### Promises

```javascript
// Create promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

// Use promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Async/Await (Preferred)

```javascript
// Async function
async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// In route
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Parallel Requests

```javascript
// Promise.all - all must succeed
const [user, posts] = await Promise.all([
  User.findById(id),
  Post.find({ userId: id })
]);

// Promise.allSettled - handle failures
const results = await Promise.allSettled([
  User.findById(id),
  Post.find({ userId: id })
]);
```

---

## 🔟 TESTING & DEBUGGING

### Debugging Tools

```javascript
// Console logging
console.log('Normal log');
console.error('Error message');
console.warn('Warning');
console.table(arrayOfObjects); // Table format

// Breakpoints in VS Code
// Add breakpoint, run with: node --inspect app.js

// Try/catch
try {
  riskyOperation();
} catch (error) {
  console.error('Caught error:', error);
}
```

### Unit Testing (Jest)

```javascript
// Simple test
test('should return user by id', async () => {
  const user = await User.findById(1);
  expect(user.id).toBe(1);
  expect(user.name).toBe('John');
});

// Test group
describe('User API', () => {
  test('GET /users returns all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
```

---

## 1️⃣1️⃣ ENVIRONMENT VARIABLES

```javascript
// .env file
PORT=3000
DATABASE_URL=mongodb://localhost/mydb
JWT_SECRET=secret_key_here

// Access in code
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
```

---

## 1️⃣2️⃣ ERROR HANDLING PATTERNS

### Express Error Handling

```javascript
// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Throw error
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    res.json(user);
  } catch (error) {
    next(error); // Pass to error handler
  }
});

// Error handler middleware (must be last)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message
  });
});
```

---

## 1️⃣3️⃣ COMMON PATTERNS IN INTERVIEWS

### Pattern 1: CRUD API
```javascript
// Create, Read, Update, Delete operations
app.post('/api/resource', create);
app.get('/api/resource', read);
app.put('/api/resource/:id', update);
app.delete('/api/resource/:id', delete_);
```

### Pattern 2: Pagination
```javascript
app.get('/api/users', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  
  const users = await User.find()
    .skip(skip)
    .limit(limit);
  
  res.json({ page, limit, users });
});
```

### Pattern 3: Filtering & Sorting
```javascript
app.get('/api/users', async (req, res) => {
  const { age, role, sort } = req.query;
  
  const filter = {};
  if (age) filter.age = { $gte: parseInt(age) };
  if (role) filter.role = role;
  
  const sortObj = {};
  if (sort) sortObj[sort] = 1;
  
  const users = await User.find(filter).sort(sortObj);
  res.json(users);
});
```

### Pattern 4: Search
```javascript
app.get('/api/search', async (req, res) => {
  const { q } = req.query;
  
  const results = await User.find({
    $or: [
      { name: { $regex: q, $options: 'i' } },
      { email: { $regex: q, $options: 'i' } }
    ]
  });
  
  res.json(results);
});
```

---

## 🎯 INTERVIEW PREPARATION ROADMAP

### Concepts to Master:
1. ✅ Node.js + Express basics
2. ✅ REST API design
3. ✅ Database (MongoDB/SQL)
4. ✅ Authentication (JWT, Bcrypt)
5. ✅ Middleware
6. ✅ Error handling
7. ✅ Async/await
8. ✅ File operations
9. ✅ Validation
10. ✅ CRUD operations

### Interview Questions Usually Cover:
- Building a full REST API
- Database schema design
- Authentication implementation
- Error handling
- Pagination & filtering
- Data validation
- File uploads
- Caching strategies

---

## 📚 QUICK REFERENCE

### Common Imports:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const multer = require('multer');
```

### Common npm Packages:
```
express       - Web framework
mongoose      - MongoDB ORM
mongodb       - MongoDB driver
mysql         - MySQL driver
bcrypt        - Password hashing
jsonwebtoken  - JWT auth
cors          - CORS middleware
dotenv        - Environment variables
multer        - File upload
joi           - Data validation
```

---

**Now let's practice with coding problems! 👇**
