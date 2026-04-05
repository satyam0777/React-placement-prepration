# 🚀 MERN Stack Machine Round Interview Problems

## Overview
This project contains **real-world MERN stack coding problems** commonly asked in machine round interviews for **4-15 LPA** positions. These are practical, full-stack problems that focus on React, Node.js, Express, MongoDB integration, not traditional DSA.

## 📚 Problems Included

### 1. **Todo App with Local Storage** ⭐ Easy
**What You'll Learn:**
- `useState` Hook for state management
- `useEffect` Hook for side effects
- CRUD Operations (Create, Read, Update, Delete)
- Browser `localStorage` API
- Form handling and event management
- State persistence and loading

**Real-World Use:**
- Personal task management apps
- Note-taking applications  
- Shopping list apps
- Any app needing data persistence

**Key Concepts:**
- Two separate useEffect hooks (loading vs saving)
- Immutable state updates
- localStorage JSON serialization/deserialization
- Form validation

**Interview Tips:**
- Explain the two useEffect pattern
- Show how you handle missing localStorage data
- Discuss performance optimization for large lists
- Mention follow-ups: due dates, categories, cloud sync

---

### 2. **Paginated Table with API** ⭐⭐ Medium
**What You'll Learn:**
- Fetch API for HTTP requests
- Loading and error state management
- Pagination logic (skip, limit calculations)
- Sorting data dynamically
- Conditional rendering for UX states

**Real-World Use:**
- User management dashboards
- Product listings in e-commerce
- Analytics dashboards
- Data-heavy applications

**Key Concepts:**
- Async/await patterns
- Error handling and recovery
- Pagination math: `skip = (page-1) * limit`
- Sorting by columns (ASC/DESC toggle)

**Backend Integration:**
- Express route with MongoDB pagination
- Query optimization with indexing
- Proper response formatting

**Interview Tips:**
- Explain pagination vs infinite scroll tradeoffs
- Discuss database indexing for performance
- Show error boundary patterns
- Mention caching strategies (React Query, SWR)

---

### 3. **Form Validation & Error Handling** ⭐⭐ Medium
**What You'll Learn:**
- Complex form state management with `useReducer`
- Field validation (email, password, phone, age)
- Regex patterns for validation
- Conditional error rendering (touched state)
- Loading states during submission
- Form reset after submission

**Real-World Use:**
- User registration/login forms
- Profile update forms
- Checkout/payment forms
- Contact forms

**Key Concepts:**
- `useReducer` Hook vs `useState`
- Validation regex patterns
- "Touched" state for better UX
- Async validation (email uniqueness check)
- Error message management

**Validation Included:**
- Email: RFC-compliant regex
- Password: Min 8 chars, 1 uppercase, 1 number
- Phone: 10-digit format
- Age: 18-65 range

**Interview Tips:**
- Explain why useReducer is better for forms
- Show regex patterns and explain them
- Discuss client-side vs server-side validation
- Mention accessibility (form labels, error roles)
- Show async validation patterns

---

### 4. **Shopping Cart with Context API** ⭐⭐ Medium
**What You'll Learn:**
- Context API: `createContext`, `useContext`
- `useReducer` for complex state management
- Custom hooks (`useCart`)
- Global state management without Redux
- localStorage persistence
- Calculation logic (subtotal, tax, shipping)

**Real-World Use:**
- E-commerce shopping carts
- Order management systems
- Multi-step checkout flows
- Any app needing global state

**Key Concepts:**
- Context Provider pattern
- Reducer pattern for state transitions
- Custom hooks for encapsulation
- Provider wrapper setup
- State persistence

**State Operations:**
- ADD_ITEM: With quantity deduplication
- REMOVE_ITEM: Filter out by ID
- UPDATE_QUANTITY: Map and update
- CLEAR_CART: Reset to empty

**Interview Tips:**
- Explain Context API vs Redux vs other alternatives
- Show how custom hooks encapsulate context
- Discuss performance optimization with `useMemo`
- Mention persistence strategies (localStorage vs server)
- Explain when to use Redux vs Context

---

### 5. **Search & Filter with Debounce** ⭐⭐ Medium
**What You'll Learn:**
- **Debouncing** for performance optimization
- `useRef` for non-render state (timeout ID)
- `useEffect` cleanup functions
- Network optimization
- Real-time search filtering

**Why Debouncing Matters:**
- Without debounce: 10 characters = 10 API calls ❌
- With debounce: 10 characters = 1 API call ✅
- Reduces server load by 80-90%
- Improves bandwidth usage
- Better user experience

**Real-World Use:**
- Google search suggestions
- E-commerce product search
- User/profile search
- Location autocomplete
- Any search feature

**Key Concepts:**
- Debounce delay selection (300-500ms)
- `useRef` for storing timeout ID
- Timer reset on each keystroke
- Cleanup function in useEffect
- Debounce vs Throttle comparison

**Debounce Formula:**
```
User types → Timer starts
Every keystroke → Previous timer clears, new timer starts
500ms with no typing → API call executes
```

**Interview Tips:**
- Explain debouncing and why it's important
- Show the API call count improvement
- Compare debounce vs throttle
- Discuss when to use each pattern
- Mention React Query for async operations

---

## 🎯 Learning Path

### Beginner (Week 1)
1. Start with **Todo App** - Learn React hooks and localStorage
2. Understand useState, useEffect, basic CRUD

### Intermediate (Week 2-3)
3. **Paginated Table** - Learn API integration and data management
4. **Form Validation** - Learn form handling and validation

### Advanced (Week 4)
5. **Shopping Cart** - Learn state management patterns
6. **Search with Debounce** - Learn performance optimization

---

## 🛠️ Tech Stack

**Frontend:**
- React 18+
- Hooks (useState, useEffect, useReducer, useContext, useRef)
- CSS3 for styling
- No external UI libraries (pure CSS)

**Backend (Concepts Covered):**
- Express.js routing
- MongoDB with pagination
- Error handling
- Response formatting

**Browser APIs:**
- Fetch API for HTTP requests
- localStorage for persistence
- setTimeout/clearTimeout for debouncing

---

## 📋 Project Structure

```
machine_round_coding/
├── src/
│   ├── components/
│   │   ├── MERNProblems.jsx          (Main navigation)
│   │   └── mern-problems/
│   │       ├── TodoApp.jsx            (Problem 1)
│   │       ├── PaginatedTable.jsx     (Problem 2)
│   │       ├── FormValidation.jsx     (Problem 3)
│   │       ├── ShoppingCart.jsx       (Problem 4)
│   │       └── SearchFilter.jsx       (Problem 5)
│   ├── styles/
│   │   ├── MERNProblems.css          (Main layout styles)
│   │   └── MERNProblemDetail.css     (Problem detail styles)
│   ├── App.jsx                        (Entry point)
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Visit in browser:**
   ```
   http://localhost:5173
   ```

---

## 💡 Interview Preparation Tips

### Before the Interview:
1. ✅ Understand the concepts, don't just memorize code
2. ✅ Practice explaining each problem out loud
3. ✅ Know the real-world applications
4. ✅ Be ready for follow-up questions
5. ✅ Understand time/space complexity

### During the Interview:
1. **Clarify requirements** - Don't jump into coding
2. **Explain your approach** - Tell them what you'll do before coding
3. **Write clean code** - Good variable names, comments
4. **Handle edge cases** - Error states, empty inputs
5. **Test as you code** - Show you're thinking about quality
6. **Discuss improvements** - Mention optimization and follow-ups

### Follow-up Questions You Might Get:

**Todo App:**
- How would you add categories/tags?
- How would you handle sync across multiple tabs?
- How would you migrate to a backend database?

**Paginated Table:**
- How would you handle infinite scroll instead?
- How would you add filtering by multiple fields?
- How would you cache previous pages?

**Form Validation:**
- How would you handle async validation (email uniqueness)?
- How would you integrate with a form library?
- How would you handle multi-step forms?

**Shopping Cart:**
- How would you handle inventory/stock checking?
- How would you persist cart across browser sessions securely?
- How would you handle coupon codes/discounts?

**Search with Debounce:**
- How would you implement throttling instead?
- How would you add search history?
- How would you highlight search results?
- How would you handle very large result sets?

---

## 📖 Key Concepts Summary

### React Hooks Used:
- `useState` - Local component state
- `useEffect` - Side effects and lifecycle
- `useReducer` - Complex state logic
- `useContext` - Global state sharing
- `useRef` - Non-render values

### Patterns Learned:
- CRUD operations
- Controlled components
- Form validation
- State management
- Error handling
- Performance optimization
- Debouncing
- localStorage persistence

### JavaScript Concepts:
- Async/Await
- Promises and error handling
- Array methods (map, filter, reduce)
- Regex patterns
- setTimeout/clearTimeout
- Object immutability

---

## 🎓 What Interviewers Look For

1. **Code Quality:**
   - Clean, readable code
   - Proper naming conventions
   - Comments where needed
   - DRY (Don't Repeat Yourself)

2. **Problem Solving:**
   - Understanding requirements
   - Logical approach
   - Edge case handling
   - Optimization awareness

3. **Communication:**
   - Explaining your approach
   - Discussing trade-offs
   - Asking clarifying questions
   - Discussing improvements

4. **React Expertise:**
   - Hook proficiency
   - Component design
   - State management
   - Performance optimization
   - Accessibility basics

---

## 📝 Additional Resources

**Recommended Reading:**
- React Documentation: https://react.dev
- Node.js & Express: https://expressjs.com
- MongoDB: https://docs.mongodb.com
- JavaScript.info for deeper concepts

**Practice Suggestions:**
- Build a real project using what you learned
- Combine multiple problems (e.g., Todo + API backend)
- Add more validation rules
- Optimize for performance
- Make it production-ready

---

## ❓ FAQ

**Q: Should I memorize the code?**
A: No! Understand the concepts. You should be able to explain and code it without copying.

**Q: What if I get stuck?**
A: Ask clarifying questions. Explain what you know. Try different approaches.

**Q: Is this all that's asked in interviews?**
A: No, but these cover the most common full-stack scenarios.

**Q: How long should I practice?**
A: At least 1-2 weeks, implementing each problem 3-4 times independently.

**Q: Should I use libraries like Formik or React Query?**
A: Learn vanilla React first. Then show you know about these libraries.

---

## 🎉 Best of Luck!

Remember: **Consistency > Intensity**. Practice a little bit every day rather than cramming. Focus on understanding concepts deeply. Good luck with your interviews! 🚀

---

## 📞 Support

If you have questions about specific problems:
1. Re-read the problem statement
2. Check the code comments
3. Review the Key Concepts section
4. Try implementing again from scratch

Happy Learning! 💻✨
