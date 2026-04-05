# 📋 Daily Practice Checklist & Progress Tracker

## How to Use This Document

1. **Print this out** or keep it open while practicing
2. **Check off** each item as you complete it
3. **Track your progress** day by day
4. **Aim for consistency** - practice a little bit daily
5. **Review mistakes** - understand why, not just move on

---

## WEEK 1: EASY PROBLEMS

### Day 1: Counter Component
**Goal:** Understand useState and onClick handlers

**Checklist:**
- [ ] Read problem statement in CODING_CHALLENGES.js
- [ ] Think about state needed (Don't code yet!)
- [ ] Write on paper first
- [ ] Implement the component
- [ ] Test: Increment, Decrement, Reset all work
- [ ] Test edge case: Can't go below 0
- [ ] Compare with SOLUTIONS.jsx
- [ ] Re-implement without looking at code
- [ ] Add a "Double" button that adds 2

**Time Target:** 20 minutes  
**Difficulty:** Easy  
**Key Concepts:** useState, onClick, Math.max()

**Notes:** 
_____________________________________

---

### Day 2: Greeting Component
**Goal:** Learn controlled components and conditional rendering

**Checklist:**
- [ ] Read problem statement
- [ ] Plan your state structure
- [ ] Code the component
- [ ] Test: Typing updates greeting
- [ ] Test: Empty input shows "Guest"
- [ ] Test: Clear button works
- [ ] Compare with solution
- [ ] Implement again from scratch
- [ ] Add features: Welcome back message, character count

**Time Target:** 20 minutes  
**Difficulty:** Easy  
**Key Concepts:** Controlled input, onChange, Conditional rendering

**Notes:** 
_____________________________________

---

### Day 3: Simple List
**Goal:** Learn .map(), .filter(), and array immutability

**Checklist:**
- [ ] Read problem statement
- [ ] Think about TWO states needed
- [ ] Code the component
- [ ] Test: Adding items works
- [ ] Test: Deleting items works
- [ ] Test: Input clears after add
- [ ] Check for immutability (always new array)
- [ ] Compare with solution
- [ ] Implement 3x from scratch
- [ ] Add: Edit functionality, mark favorite

**Time Target:** 25 minutes  
**Difficulty:** Easy  
**Key Concepts:** .map(), .filter(), spread operator, immutability

**Notes:** 
_____________________________________

---

### Day 4: Toggle Visibility
**Goal:** Practice boolean state and conditional rendering

**Checklist:**
- [ ] Read problem statement
- [ ] Realize: Simple boolean needed!
- [ ] Code the component
- [ ] Test: Toggle works
- [ ] Test: Button text changes
- [ ] Test: Content shows/hides
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Multiple sections to toggle

**Time Target:** 15 minutes  
**Difficulty:** Easy  
**Key Concepts:** Boolean state, conditional rendering, &&, ternary

**Notes:** 
_____________________________________

---

### Day 5: Temperature Converter
**Goal:** Learn calculations and input type conversions

**Checklist:**
- [ ] Read problem statement
- [ ] Understand: Input is string, need to convert
- [ ] Code the component
- [ ] Test: Typing updates conversion
- [ ] Test: Formula is correct
- [ ] Test: Empty input handled
- [ ] Test: Decimals show correctly
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Reverse conversion (F to C), Kelvin conversion

**Time Target:** 20 minutes  
**Difficulty:** Easy  
**Key Concepts:** parseFloat(), calculations, toFixed()

**Notes:** 
_____________________________________

---

### Day 6-7: Easy Problems Review

**Day 6 Checklist:**
- [ ] Implement ALL 5 easy problems from scratch in 1 hour
- [ ] Don't look at code, just problem statements
- [ ] Time yourself: Try to do them faster
- [ ] Fix any bugs immediately
- [ ] Compare with solutions afterward

**Day 7 Checklist:**
- [ ] Pick your easiest one, implement it in 5 minutes
- [ ] Pick your hardest one, implement it in 20 minutes
- [ ] Combine features: Todo + Counter? List + Search?
- [ ] Code review: Read other solutions online
- [ ] Reflect: What did you learn this week?

**Reflection Questions:**
1. Which problem was easiest? _____________
2. Which was hardest? _____________
3. Biggest mistake made? _____________
4. Concept you need to review? _____________

---

## WEEK 2: MEDIUM PROBLEMS

### Day 1: Search & Filter
**Goal:** Learn .filter() with search logic

**Checklist:**
- [ ] Read problem statement carefully
- [ ] Understand: Need array + search state
- [ ] Think through filter logic (lowercase, includes)
- [ ] Code the component
- [ ] Test: Typing filters list
- [ ] Test: Case-insensitive
- [ ] Test: "No results" shows when empty
- [ ] Test: Result count updates
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Search by email, search multiple fields

**Time Target:** 25 minutes  
**Difficulty:** Medium  
**Key Concepts:** .filter(), .includes(), .toLowerCase(), state

**Notes:** 
_____________________________________

---

### Day 2: Form Validation
**Goal:** Master form state and validation

**Checklist:**
- [ ] Read problem statement
- [ ] Plan: Form object + Errors object states
- [ ] Plan: Validation function first
- [ ] Code validation logic first
- [ ] Code form component
- [ ] Test: Each field validates
- [ ] Test: Error messages show correctly
- [ ] Test: Submit button disabled with errors
- [ ] Test: Form resets after successful submit
- [ ] Test: Email regex works
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Async validation (email uniqueness), password strength

**Time Target:** 30 minutes  
**Difficulty:** Medium  
**Key Concepts:** Form state, validation, regex, error handling

**Notes:** 
_____________________________________

---

### Day 3: Toggle Todo List
**Goal:** Learn complex state operations (map, filter, object updates)

**Checklist:**
- [ ] Read problem - understand object array structure
- [ ] Plan: todos array state + newTodo input state
- [ ] Code the component
- [ ] Test: Adding todos works
- [ ] Test: Completing toggle works
- [ ] Test: Completed items have strikethrough
- [ ] Test: Delete removes correctly
- [ ] Test: Counter shows correct totals
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Categories, due dates, filters (active/completed)

**Time Target:** 30 minutes  
**Difficulty:** Medium  
**Key Concepts:** Complex state, .map() updates, immutability

**Notes:** 
_____________________________________

---

### Day 4: Star Rating
**Goal:** Learn multi-state and hover effects

**Checklist:**
- [ ] Read problem - TWO states!!
- [ ] Understand: rating (permanent) vs hoverRating (preview)
- [ ] Think through star logic
- [ ] Code the component
- [ ] Test: Hovering shows preview
- [ ] Test: Clicking sets permanent rating
- [ ] Test: Mouse leave clears preview
- [ ] Test: Correct stars highlighted
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: Show 10 stars instead of 5, display review text

**Time Target:** 25 minutes  
**Difficulty:** Medium  
**Key Concepts:** Multiple states, onMouse events, conditional logic

**Notes:** 
_____________________________________

---

### Day 5: Tabs Component
**Goal:** Learn component switching and conditional rendering

**Checklist:**
- [ ] Read problem - simple activeTab state!
- [ ] Code the tabs array first
- [ ] Code the component
- [ ] Test: Clicking tabs updates content
- [ ] Test: Only one tab active at time
- [ ] Test: Active tab has different styling
- [ ] Test: Easy to add more tabs
- [ ] Compare with solution
- [ ] Implement 2x from scratch
- [ ] Add: 5+ tabs, keyboard navigation (arrow keys), tab animation

**Time Target:** 20 minutes  
**Difficulty:** Medium  
**Key Concepts:** Component switching, .find(), conditional styling

**Notes:** 
_____________________________________

---

### Day 6-7: Medium Problems Review

**Day 6 Checklist:**
- [ ] Implement all 5 medium problems from scratch in 2 hours
- [ ] Focus on logic, not styling
- [ ] Time yourself
- [ ] Compare afterward

**Day 7 Checklist:**
- [ ] Pick hardest medium problem
- [ ] Implement 3 times today
- [ ] First time: With hints from notes
- [ ] Second time: Without any reference
- [ ] Third time: Add extra features
- [ ] Reflect on progress

**Reflection Questions:**
1. Hardest concept in medium? _____________
2. Most useful pattern learned? _____________
3. How much faster are you coding? _____________
4. Ready for complex problems? Y / N

---

## WEEK 3: ADVANCED PROBLEMS

### Practice Checklist:
- [ ] Implement all 5 MERN problems from MERN stack section
- [ ] Each problem once: 2 hours
- [ ] Each problem twice: understand deeply: 3 hours
- [ ] Combine problems: merge features: 3 hours
- [ ] Add new features: think beyond requirements: 2 hours

### Projects to Build:
- [ ] Todo App with API (combine Todo + API knowledge)
- [ ] User Dashboard (Pagination + Search + Sort)
- [ ] Profile Form with validation
- [ ] Product Listing with cart
- [ ] Auto-save form using debounce

---

## WEEK 4: INTERVIEW PREP

### Interview Simulation:
- [ ] Practice explaining problems verbally (without code)
- [ ] Implement problem with timer (45 min limit)
- [ ] Answer follow-up questions for each problem
- [ ] Teach someone else your solution
- [ ] Write code on paper (for practice)
- [ ] Mock interview with a friend

### Before Interview:
- [ ] All problems implemented 3+ times
- [ ] Can explain each in 5 minutes
- [ ] Know real-world applications
- [ ] Ready for follow-ups
- [ ] Code is clean and readable
- [ ] Handle edge cases

---

## CONCEPT MASTERY CHECKLIST

### React Hooks
- [ ] useState - Use it automatically
- [ ] useEffect - Know when/why to use  
- [ ] useReducer - Know vs useState
- [ ] useContext - Understand global state
- [ ] useRef - Know non-render storage

### JavaScript Operations
- [ ] Array .map() ✓
- [ ] Array .filter() ✓
- [ ] Array .find() ✓
- [ ] Array .reduce() (if applicable)
- [ ] Spread operator [...] ✓
- [ ] Object spread {...} ✓
- [ ] String methods (toLowerCase, includes, trim)
- [ ] Regex basics ✓
- [ ] String/Number conversions ✓

### Form Concepts
- [ ] Controlled components ✓
- [ ] Form state management ✓
- [ ] Field validation ✓
- [ ] Error display ✓
- [ ] Form submission ✓
- [ ] Reset form ✓

### Performance Patterns
- [ ] Debouncing (Medium 5)
- [ ] Conditional rendering
- [ ] Key usage in .map()
- [ ] State placement
- [ ] Unnecessary re-renders

---

## PROGRESS TRACKER

### Easy Problems
| Problem | Day | Time Spent | Completed | Notes |
|---------|-----|-----------|-----------|-------|
| Counter | 1 | ___min | ✓/❌ | |
| Greeting | 2 | ___min | ✓/❌ | |
| List | 3 | ___min | ✓/❌ | |
| Toggle | 4 | ___min | ✓/❌ | |
| Converter | 5 | ___min | ✓/❌ | |

**Average Time:** __ minutes  
**Success Rate:** __/5

---

### Medium Problems
| Problem | Day | Time Spent | Completed | Notes |
|---------|-----|-----------|-----------|-------|
| Search | 1 | ___min | ✓/❌ | |
| Validation | 2 | ___min | ✓/❌ | |
| Todos | 3 | ___min | ✓/❌ | |
| Rating | 4 | ___min | ✓/❌ | |
| Tabs | 5 | ___min | ✓/❌ | |

**Average Time:** __ minutes  
**Success Rate:** __/5

---

## FINAL CHECKLIST BEFORE INTERVIEW

### Knowledge
- [ ] All concepts understood deeply
- [ ] Can explain without code
- [ ] Know real-world applications
- [ ] Prepared for follow-ups
- [ ] Understand edge cases

### Implementation
- [ ] All problems coded 3x minimum
- [ ] Code is clean and readable
- [ ] Have good variable names
- [ ] Added helpful comments
- [ ] Handle edge cases

### Speed
- [ ] Easy problems: 15-20 minutes each
- [ ] Medium problems: 25-30 minutes each
- [ ] Complex problems: 45 minutes
- [ ] Can code without IDE: ✓/❌

### Communication
- [ ] Explain approach before coding
- [ ] Talk through logic while coding
- [ ] Ask clarifying questions
- [ ] Discuss improvements
- [ ] Show edge case handling

---

## Success Metrics

### By End of Week 1:
- [ ] All 5 easy problems coded independently
- [ ] Can implement each in < 20 minutes
- [ ] Know the "why" behind each pattern
- [ ] Understand immutability fully

### By End of Week 2:
- [ ] All 5 medium problems coded independently
- [ ] Can implement each in < 30 minutes  
- [ ] Comfortable with complex state
- [ ] Know validation patterns

### By End of Week 3:
- [ ] All MERN problems understood
- [ ] Can combine concepts
- [ ] Build small features independently
- [ ] Quick bug fixing

### By End of Week 4:
- [ ] Ready for interview
- [ ] Confident in all areas
- [ ] Good communication skills
- [ ] Handle unexpected questions

---

## Daily Habit Tracking

| Week | Day | Completed | Time | Difficulty |
|------|-----|-----------|------|-----------|
| 1 | 1 | ✓/❌ | __ min | Easy/Med |
| 1 | 2 | ✓/❌ | __ min | Easy/Med |
| 1 | 3 | ✓/❌ | __ min | Easy/Med |
| 1 | 4 | ✓/❌ | __ min | Easy/Med |
| 1 | 5 | ✓/❌ | __ min | Easy/Med |

---

## Notes & Learnings

### What I learned this week:
_________________________________________
_________________________________________
_________________________________________

### Concepts to review:
_________________________________________
_________________________________________

### Progress made:
_________________________________________
_________________________________________

### Next focus:
_________________________________________
_________________________________________

---

## Remember

✨ **Consistency > Intensity**  
💪 **Understand > Memorize**  
⏰ **Start Now > Procrastinate**  
🎯 **Daily Practice > Cram**  

You've got this! 🚀
