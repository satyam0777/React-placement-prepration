# 🎯 Coding Challenges - Quick Reference Guide

## How to Approach Each Problem

### For EASY Level Problems:
**Time to Solve:** 10-15 minutes  
**Complexity:** Low  
**Focus:** React basics

#### EASY 1: Counter - Thought Process
```
QUESTION: What state do I need?
ANSWER: A single number for count

QUESTION: What happens on click?
ANSWER: Call a function that updates the state

QUESTION: How do I prevent negative?
ANSWER: Math.max(0, count - 1)

QUESTION: How many states?
ANSWER: Just 1 state variable for counter
```

**Think Before Writing:**
1. "I need one state for the counter value"
2. "Plus button increments by 1"
3. "Minus button decrements by 1"
4. "Reset goes back to 0"
5. "Can't go below 0"

---

#### EASY 2: Greeting - Thought Process
```
QUESTION: What should happen when user types?
ANSWER: Update state in real-time

QUESTION: What renders when empty?
ANSWER: "Hello, Guest!"

QUESTION: What renders when has text?
ANSWER: "Hello, [name]!"

QUESTION: How do I handle the input?
ANSWER: onChange handler + state
```

**Think Before Writing:**
1. "I need state for the input value"
2. "onChange updates state"
3. "Render different text based on state"
4. "Clear button empties the input"

---

#### EASY 3: Simple List - Thought Process
```
QUESTION: How do I store items?
ANSWER: Array in state

QUESTION: How do I display them?
ANSWER: .map() over the array

QUESTION: How do I add new item?
ANSWER: Spread operator [...items, newItem]

QUESTION: How do I remove item?
ANSWER: .filter() to exclude the item

QUESTION: Do I mutate the array?
ANSWER: NO! Always create new array
```

**Think Before Writing:**
1. "I need TWO states: items + newItem"
2. "Map over items to display"
3. "Filter by index to delete"
4. "Use spread operator to add"
5. "Clear input after adding"

---

#### EASY 4: Toggle Visibility - Thought Process
```
QUESTION: What type of state?
ANSWER: Boolean (true/false)

QUESTION: What does clicking do?
ANSWER: Toggles the boolean (!state)

QUESTION: How show/hide content?
ANSWER: Conditional rendering with &&

QUESTION: Button text changes?
ANSWER: Use ternary: isVisible ? 'Hide' : 'Show'
```

**Think Before Writing:**
1. "I need a boolean state"
2. "Click toggles the boolean"
3. "Use && to show content conditionally"
4. "Button text changes based on state"

---

#### EASY 5: Temperature Converter - Thought Process
```
QUESTION: Input value is string, need number?
ANSWER: parseFloat() to convert

QUESTION: What if input is empty?
ANSWER: Show "N/A" or empty

QUESTION: Where does calculation happen?
ANSWER: In the render, not in a function

QUESTION: Decimal places?
ANSWER: toFixed(2) for 2 decimals
```

**Think Before Writing:**
1. "State is string from input"
2. "Convert with parseFloat()"
3. "Check for empty value"
4. "Apply formula"
5. "Round to 2 decimals"

---

### For MEDIUM Level Problems:
**Time to Solve:** 20-30 minutes  
**Complexity:** Medium  
**Focus:** Multiple states, complex logic

#### MEDIUM 1: Search/Filter - Thought Process
```
QUESTION: What state do I need?
ANSWER: searchTerm only (users are hardcoded)

QUESTION: When does filtering happen?
ANSWER: Every render, based on searchTerm

QUESTION: How do I filter?
ANSWER: .filter() + .includes() + lowercase

QUESTION: Case sensitive?
ANSWER: NO - use .toLowerCase()
```

**Think Before Writing:**
1. "State = searchTerm"
2. "Filter on render with .filter()"
3. "Use .includes() for partial match"
4. "Make both lowercase for comparison"
5. "Show count of results"
6. "Show 'No results' when empty"

**Code Pattern:**
```javascript
const filtered = users.filter(user =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
)
```

---

#### MEDIUM 2: Form Validation - Thought Process
```
QUESTION: What state do I need?
ANSWER: form (object) + errors (object)

QUESTION: When to validate?
ANSWER: On form submit

QUESTION: Show errors?
ANSWER: Only on submit or after user touches field

QUESTION: How to validate email?
ANSWER: Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

QUESTION: Multiple fields in one state?
ANSWER: Yes, form object with properties
```

**Think Before Writing:**
1. "State = form object (name, email, age)"
2. "State = errors object"
3. "Create validateForm() function"
4. "Validate each field with rules"
5. "Store errors in object"
6. "Show errors conditionally"
7. "OnSubmit: validate → if valid submit → reset"

**Validation Pattern:**
```javascript
const validateForm = () => {
  const errors = {}
  if (!form.name) errors.name = 'Required'
  if (!form.email.includes('@')) errors.email = 'Invalid'
  return Object.keys(errors).length === 0
}
```

---

#### MEDIUM 3: Toggle Items - Thought Process
```
QUESTION: State structure?
ANSWER: Array of objects {id, text, completed}

QUESTION: How to toggle completion?
ANSWER: .map() to find and update that item

QUESTION: How to delete?
ANSWER: .filter() to exclude item

QUESTION: Generate unique ID?
ANSWER: Date.now() or Math.random()

QUESTION: Show count?
ANSWER: .filter(t => t.completed).length
```

**Think Before Writing:**
1. "State = todos array"
2. "State = newTodo input"
3. "Each todo = {id, text, completed}"
4. "Toggle: map and update matching todo"
5. "Delete: filter out by id"
6. "Add: push to array with spread"
7. "Count: filter completed items"

**Toggle Pattern:**
```javascript
setTodos(todos.map(todo =>
  todo.id === id 
    ? { ...todo, completed: !todo.completed }
    : todo
))
```

---

#### MEDIUM 4: Star Rating - Thought Process
```
QUESTION: What states?
ANSWER: rating (permanent) + hoverRating (preview)

QUESTION: How many stars?
ANSWER: Array [1,2,3,4,5] and map

QUESTION: Highlighting logic?
ANSWER: if (star <= hoverRating OR rating) then yellow

QUESTION: Which takes priority?
ANSWER: hoverRating if hovering, else rating
```

**Think Before Writing:**
1. "Two states: rating + hoverRating"
2. "Create array of 5 stars"
3. "Map to render stars"
4. "onMouseEnter sets hoverRating"
5. "onMouseLeave clears hoverRating"
6. "onClick sets permanent rating"
7. "Color = star <= (hoverRating || rating) ? yellow : gray"

**Logic Pattern:**
```javascript
star <= (hoverRating || rating) ? '#ffc107' : '#ddd'
// Shows yellow if current star <= hover OR rating
```

---

#### MEDIUM 5: Tabs - Thought Process
```
QUESTION: What state?
ANSWER: activeTab (id of current tab)

QUESTION: How many states?
ANSWER: Just 1 (activeTab)

QUESTION: How to show content?
ANSWER: .find() to get active tab, show content

QUESTION: How to style active tab?
ANSWER: Conditional className/style
```

**Think Before Writing:**
1. "State = activeTab"
2. "Array of tabs with {id, label, content}"
3. "Map tabs to render buttons"
4. "Find active tab to show content"
5. "onClick changes activeTab"
6. "Conditional style for active"

**Pattern:**
```javascript
const activeTabData = tabs.find(tab => tab.id === activeTab)
// Render activeTabData.content
```

---

## Common Patterns You'll See

### Pattern 1: Controlled Input
```javascript
const [value, setValue] = useState('')
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

### Pattern 2: Array .map() Rendering
```javascript
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### Pattern 3: Array .filter() Deletion
```javascript
setItems(items.filter((item, index) => index !== deleteIndex))
```

### Pattern 4: Conditional Rendering
```javascript
{condition ? <ComponentA /> : <ComponentB />}
{condition && <ComponentA />}
```

### Pattern 5: Toggle Boolean
```javascript
const [isOpen, setIsOpen] = useState(false)
onClick={() => setIsOpen(!isOpen)}
```

### Pattern 6: Update Object in Array
```javascript
setArray(array.map(item =>
  item.id === targetId ? { ...item, updated: true } : item
))
```

### Pattern 7: Form Object State
```javascript
const [form, setForm] = useState({ name: '', email: '' })
onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
```

---

## Step-by-Step Approach for Any Problem

### STEP 1: UNDERSTAND (5 minutes)
- [ ] Read problem carefully
- [ ] Identify requirements
- [ ] Think about state needed
- [ ] Visualize the UI

### STEP 2: PLAN (5 minutes)
- [ ] What state variables?
- [ ] What functions/handlers?
- [ ] How does data flow?
- [ ] What renders conditionally?

### STEP 3: CODE (15 minutes)
- [ ] Start with useState
- [ ] Write JSX structure
- [ ] Add event handlers
- [ ] Add conditional logic

### STEP 4: TEST (5 minutes)
- [ ] Does it match requirements?
- [ ] Try edge cases
- [ ] Fix bugs
- [ ] Clean up code

### STEP 5: REVIEW (5 minutes)
- [ ] Is code clean?
- [ ] Any better ways?
- [ ] Good variable names?
- [ ] Comments where needed?

---

## Common MISTAKES to Avoid

❌ **Mistake 1:** Mutating state directly
```javascript
// WRONG
items.push(newItem)
setItems(items)

// RIGHT
setItems([...items, newItem])
```

❌ **Mistake 2:** Using .map() with same items as rendered
```javascript
// Avoid: what if item appears twice?
{items.map((item) => <div key={item.id}>{item}</div>)}
```

❌ **Mistake 3:** Not handling empty input
```javascript
// WRONG
setItems([...items, newItem])

// RIGHT
if (newItem.trim()) {
  setItems([...items, newItem])
}
```

❌ **Mistake 4:** Forgetting to convert input string to number
```javascript
// If you need a number:
const num = parseFloat(stringValue)
const age = parseInt(stringValue)
```

❌ **Mistake 5:** Not resetting form after submit
```javascript
// After submit, reset:
setForm({ name: '', email: '' })
setNewItem('')
```

---

## Time Estimation

| Problem | Easy | Medium |
|---------|------|--------|
| **Planning** | 5 min | 5 min |
| **Coding** | 10 min | 20 min |
| **Testing** | 5 min | 5 min |
| **Total** | 20 min | 30 min |

---

## Interview Tips While Solving

✅ **DO:**
- Think out loud
- Explain what you're doing
- Ask clarifying questions
- Start simple, then optimize
- Write clean code
- Handle edge cases
- Test thoroughly

❌ **DON'T:**
- Jump into coding immediately
- Ignore edge cases
- Write spaghetti code
- Forget semicolons (use linter)
- Mutate state
- Use .index as key in lists
- Assume inputs are valid

---

## After Solving

1. **Compare with solution** - Did you approach it similarly?
2. **Refactor** - Can you write it cleaner?
3. **Extend** - Add new features
4. **Optimize** - Can it be faster?
5. **Explain** - Can you explain it to someone?
6. **Implement again** - Without looking at code

---

## Practice Schedule

### Week 1:
- Day 1-2: Easy 1-2 (counters, greetings)
- Day 3-4: Easy 3-4 (lists, toggles)
- Day 5: Easy 5 (calculations)
- Day 6-7: Review & combine easy problems

### Week 2:
- Day 1-2: Medium 1 (search/filter)
- Day 3-4: Medium 2 (validation)
- Day 5: Medium 3 (todos)
- Day 6-7: Medium 4-5 (ratings, tabs)

### Week 3:
- Practice all problems from scratch
- Combine concepts
- Add extra features

### Week 4:
- Move to full MERN problems
- Build real projects
- Mock interviews

---

## Files to Reference

1. **CODING_CHALLENGES.js** - Problem statements (code without looking at solutions!)
2. **SOLUTIONS.jsx** - Solutions to compare after

---

## Remember

**The goal is NOT to memorize code, but to understand patterns.**

- Know WHY you use useState
- Know HOW .map() works
- Know WHEN to use .filter()
- Know WHERE state should go

Happy coding! 🚀
