# Backend Practice Setup Guide
## Quick Start for 10-Day Challenge

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Project Directory
```bash
mkdir backend-practice
cd backend-practice
npm init -y
```

### Step 2: Install All Dependencies
```bash
npm install express mongoose bcrypt jsonwebtoken multer joi dotenv cors
npm install --save-dev nodemon
```

### Step 3: Create package.json Structure
Copy the complete `package.json` below to your project.

### Step 4: Create .env file
```env
MONGODB_URI=mongodb://localhost:27017/interview_db
JWT_SECRET=your-secret-key-change-this
PORT=3000
NODE_ENV=development
```

### Step 5: Start Server
```bash
npm start
```

---

## 📦 Complete package.json

```json
{
  "name": "backend-interview-practice",
  "version": "1.0.0",
  "description": "Backend coding interview practice - 10 day challenge",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["backend", "interview", "node", "express", "mongodb"],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "bcrypt": "^5.1.0",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1",
    "joi": "^17.9.0",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

---

## 🔧 Basic Server Boilerplate

Create `index.js`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/interview_db')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes (add your routes here)
app.get('/', (req, res) => {
  res.json({ message: 'Backend Interview Practice Server' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
```

---

## 📝 All Dependencies Explained

| Package | Purpose | Used In |
|---------|---------|---------|
| **express** | Web framework for routing | All problems |
| **mongoose** | MongoDB ODM for schemas | All problems |
| **bcrypt** | Password hashing | Easy 2, Easy 2, Medium 1, Medium 5 |
| **jsonwebtoken** | JWT token generation/verification | Medium 1 |
| **multer** | File upload handling | Medium 4 |
| **joi** | Data validation schemas | Medium 5 |
| **dotenv** | Environment variable management | All |
| **cors** | Cross-origin resource sharing | Optional |
| **nodemon** | Auto-reload on file changes (dev) | Development |

---

## 🔌 MongoDB Setup Guide

### Option 1: Local MongoDB (Recommended for Learning)

**Windows:**
```bash
# Download from: https://www.mongodb.com/try/download/community
# Run the installer
# MongoDB runs as service automatically
# Connection: mongodb://localhost:27017
```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
# Connection: mongodb://localhost:27017
```

**Linux (Ubuntu):**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
# Connection: mongodb://localhost:27017
```

### Option 2: MongoDB Atlas (Cloud - Free 512MB)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create Project → Create Cluster (Free tier)
4. Create DB User & get connection string
5. Add to `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dbname
```

---

## 🧪 Testing Your Setup

### Test 1: Server Starts
```bash
npm start
# Should see: "Server running on port 3000"
# Visit: http://localhost:3000
```

### Test 2: MongoDB Connected
```bash
# You should see: "MongoDB connected" in console
# Check with MongoDB Compass or command line
```

### Test 3: Create Test Schema
Add to your `index.js` after MongoDB connection:

```javascript
// Quick Test Schema
const testSchema = new mongoose.Schema({
  name: String,
});

const TestModel = mongoose.model('Test', testSchema);

// Test CREATE
app.post('/test', async (req, res) => {
  try {
    const doc = await TestModel.create({ name: 'test' });
    res.json({ success: true, data: doc });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

// Test READ
app.get('/test', async (req, res) => {
  try {
    const docs = await TestModel.find();
    res.json({ success: true, data: docs });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});
```

Then:
- POST to http://localhost:3000/test (create)
- GET http://localhost:3000/test (read)

---

## 🛠️ Useful Tools for Testing

### Postman (Recommended)
```
Download: https://www.postman.com/downloads/
Features:
- Make HTTP requests easily
- Save request collections
- Test all endpoints
```

### cURL (Command Line)
```bash
# POST with data
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'

# GET
curl http://localhost:3000/users

# DELETE
curl -X DELETE http://localhost:3000/users/123
```

### VS Code REST Client Extension
```
Install: REST Client extension in VS Code
Create file: requests.http

# In file:
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com"
}

###

GET http://localhost:3000/users
```

---

## 📁 Project Structure Recommendation

```
backend-practice/
├── index.js                 (main server)
├── .env                     (environment variables)
├── package.json             (dependencies)
├── routes/
│   ├── users.js
│   ├── posts.js
│   └── comments.js
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
└── uploads/                 (for file uploads)
```

---

## 🚨 Common Setup Issues & Fixes

### Issue 1: "Cannot find module 'express'"
```bash
Solution: npm install
# Make sure package.json exists and dependencies are installed
```

### Issue 2: "MongoDB connection failed"
```
Solution:
1. Check if MongoDB service is running
2. Check connection string in .env
3. For Atlas: check IP whitelist (allow 0.0.0.0/0)
```

### Issue 3: "Port 3000 already in use"
```bash
Solution:
# Use different port
PORT=3001 npm start

# OR kill process using port 3000
# Windows: netstat -ano | findstr :3000
# Mac/Linux: lsof -i :3000
```

### Issue 4: "Module not found: bcrypt"
```bash
Solution: 
npm install bcrypt
# Sometimes needs rebuild on Windows
npm rebuild bcrypt
```

### Issue 5: "Multer file upload not working"
```
Solution:
1. Create uploads/ directory in project root
2. Make sure multer storage path is correct
3. Check file size limits
4. Verify MIME types allowed
```

---

## 🎯 File Structure for Each Problem

### For Easy Problems:
```javascript
// easy1-user-crud.js

const express = require('express');
const router = express.Router();

// Schema
const userSchema = new mongoose.Schema({...});
const User = mongoose.model('User1', userSchema);

// Routes
router.get('/users', async (req, res) => {...});
router.post('/users', async (req, res) => {...});
// ... etc

module.exports = router;
```

Then in `index.js`:
```javascript
const easyRoutes = require('./easy1-user-crud');
app.use('/api', easyRoutes);
```

---

## 💻 Code Templates

### Async Route Template
```javascript
app.get('/endpoint', async (req, res) => {
  try {
    // Your code here
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
```

### Validation Middleware Template
```javascript
const validateInput = (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
  req.validatedData = value;
  next();
};

app.post('/endpoint', validateInput, async (req, res) => {
  // Use req.validatedData
});
```

### Auth Middleware Template
```javascript
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  // req.user available here
});
```

---

## 📚 Reference: MongoDB Connection Patterns

### Single Connection (use this)
```javascript
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected'))
  .catch(err => console.log('Error:', err));
```

### With Options
```javascript
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});
```

---

## 🎓 Quick Command Reference

| Command | What it Does |
|---------|-------------|
| `npm start` | Start server |
| `npm run dev` | Start with auto-reload |
| `npm install <package>` | Install package |
| `npm list` | View installed packages |
| `npm uninstall <package>` | Remove package |

---

## ✅ Pre-Coding Checklist

Before you start each problem, verify:

- [ ] Server starts without errors
- [ ] MongoDB connected
- [ ] .env file exists with credentials
- [ ] All dependencies installed
- [ ] Postman or testing tool ready
- [ ] You've read problem statement
- [ ] You've planned your approach

---

## 🚀 You're Ready to Code!

Once setup is complete:
1. Read problem in `BACKEND_EASY_CHALLENGES.js`
2. Plan solution on paper
3. Code in your editor
4. Test using Postman
5. Review solution file
6. Code again from memory

Good luck! 💪

---

## 📞 Troubleshooting

**Still stuck?** Debug step-by-step:

1. **Check error message** - Read it carefully
2. **Check console logs** - Add `console.log()` everywhere
3. **Check syntax** - Are parentheses balanced?
4. **Check imports** - Is module imported?
5. **Check MongoDB** - Is it running?
6. **Check endpoints** - Are routes defined?
7. **Google the error** - Exact error message
8. **Check solutions** - Compare with provided code

Remember: Every error is a learning opportunity! 🎓
