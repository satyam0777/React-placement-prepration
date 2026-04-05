# HARD PROBLEMS - 4 to 10 LPA COMPANIES

## Overview

These are the **most commonly asked** problems in 4-10 LPA companies. These questions test your **deep React knowledge**, **state management**, **performance optimization**, and **real-world problem-solving**.

**Interview Statistics:**
- ★★★★★ Asked in almost every interview (must know)
- ★★★★☆ Asked frequently (very important)
- ★★★☆☆ Asked sometimes (good to know)

---

## 12 HARD PROBLEMS

### HARD 1: Infinite Scroll / Lazy Loading
**Frequency:** ★★★★★ (Asked in almost every interview)  
**Time:** 35-45 minutes  
**Companies:** Amazon, Flipkart, Swiggy, Zomato

**What's Being Tested:**
- useCallback optimization
- useRef for non-render state
- Scroll detection logic
- Debouncing to prevent duplicate requests
- Loading state management
- Performance with large datasets

**Key Concepts:**
```javascript
// Scroll detection
if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200)

// Prevent duplicates with ref
const loadingRef = useRef(false);
if (loadingRef.current || !hasMore) return;

// Mock API call with delay
setTimeout(() => { ... }, 800);
```

**Interview Tips:**
- Discuss Intersection Observer API for better performance
- Handle errors in API calls
- What if user scrolls very fast? (debounce)
- Virtual scrolling for 100k items?

---

### HARD 2: Multi-Select with Tags
**Frequency:** ★★★★★  
**Time:** 30-40 minutes  
**Companies:** Amazon, Flipkart, Myntra, Microsoft

**What's Being Tested:**
- Managing array of selected items
- Efficient lookup (includes vs Set)
- Filtering operations
- Search functionality
- UX with tags/chips

**Key Concepts:**
```javascript
// Check if item selected
if (selected.includes(item))

// Add to selected
setSelected(prev => [...prev, item])

// Remove from selected
setSelected(prev => prev.filter(i => i !== item))

// For many items, use Set for O(1) lookup
const selectedSet = new Set(selected);
if (selectedSet.has(item)) { ... }
```

**Interview Tips:**
- Discuss Set vs Array performance
- Handle "Select All" / "Clear All"
- What if items are objects not strings?
- Persist selection to localStorage

---

### HARD 3: Accordion with Nested Items
**Frequency:** ★★★★☆  
**Time:** 25-35 minutes  
**Companies:** Most product companies

**What's Being Tested:**
- Conditional rendering
- Toggle state management
- CSS transitions/animations
- Multiple vs single open

**Key Concepts:**
```javascript
// Toggle only one open at a time
setSections(prev =>
  prev.map(section =>
    section.id === id
      ? { ...section, expanded: !section.expanded }
      : { ...section, expanded: false }
  )
)

// CSS transitions
transition: max-height 0.3s ease;
```

**Interview Tips:**
- Keyboard navigation (Tab, Spacebar)
- ARIA attributes for accessibility
- Nested accordions
- Different animations

---

### HARD 4: Modal / Dialog Component
**Frequency:** ★★★★★  
**Time:** 20-30 minutes  
**Companies:** Almost every company

**What's Being Tested:**
- Modal state management
- Event handling (click outside, Escape)
- Body scroll prevention
- Focus management
- Accessibility

**Key Concepts:**
```javascript
// Prevent body scroll
document.body.style.overflow = isOpen ? 'hidden' : 'unset'

// Close on escape key
useEffect(() => {
  const handler = (e) => e.key === 'Escape' && setIsOpen(false);
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, [])

// Prevent event bubbling
onClick={(e) => e.stopPropagation()}
```

**Interview Tips:**
- Focus trap (keep focus inside modal)
- Return focus to trigger on close
- Accessibility (role="dialog", aria-modal)
- Mobile considerations

---

### HARD 5: Countdown Timer
**Frequency:** ★★★★☆  
**Time:** 25-35 minutes  
**Companies:** Cooking apps, fitness apps, interview timer apps

**What's Being Tested:**
- setInterval management
- useEffect cleanup
- useRef for interval ID
- State updates in intervals
- Time formatting

**Key Concepts:**
```javascript
// useRef for interval ID
const intervalRef = useRef(null);

// setInterval in useEffect
useEffect(() => {
  if (!isRunning) return;
  
  intervalRef.current = setInterval(() => {
    setSeconds(prev => prev - 1);
  }, 1000);

  // CRITICAL: Cleanup interval
  return () => clearInterval(intervalRef.current);
}, [isRunning])

// Format time with leading zeros
String(minutes).padStart(2, '0') // "05"
```

**Interview Mistakes:**
- ❌ Forgetting to clear interval (memory leak)
- ❌ Not cleaning up on component unmount
- ❌ Multiple intervals when button clicked multiple times
- ❌ Not handling pause/resume properly

**Follow-up Questions:**
- How to persist timer to localStorage?
- Multiple timers at once?
- Circular progress indicator?

---

### HARD 6: Image Carousel / Slider
**Frequency:** ★★★☆☆  
**Time:** 30-40 minutes  
**Companies:** E-commerce, Media companies

**What's Being Tested:**
- Index state management
- Modulo operator for wrapping
- Event handling (keyboard, touch)
- CSS transitions
- Auto-rotate logic

**Key Concepts:**
```javascript
// Navigate with wrapping
const nextSlide = () => {
  setCurrentIndex(prev => 
    (prev === images.length - 1) ? 0 : prev + 1
  )
}

// Modulo for circular array
const index = (currentIndex + 1) % images.length;

// CSS transitions
transition: transform 0.3s ease;

// Touch for mobile
onTouchStart, onTouchEnd
```

**Interview Tips:**
- Discuss fade vs slide animations
- Keyboard navigation (arrow keys)
- Mobile swipe gestures
- Auto-play with pause on hover

---

### HARD 7: Nested Comments System
**Frequency:** ★★★★☆  
**Time:** 40-50 minutes  
**Companies:** Social media, Reddit clones, forums

**What's Being Tested:**
- Recursive component rendering
- Nested data structures
- Tree traversal
- Add/delete operations
- Performance with deep nesting

**Key Concepts:**
```javascript
// Recursive component
const CommentItem = ({ comment, depth = 0 }) => (
  <div style={{ marginLeft: depth * 20 }}>
    {comment.text}
    {comment.replies?.map(reply => (
      <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
    ))}
  </div>
)

// Flat structure with parentId
[{ id: 1, parentId: null }, { id: 2, parentId: 1 }]

// Nested structure
[{ id: 1, replies: [{ id: 2, replies: [] }] }]
```

**Interview Tips:**
- Discuss flat vs nested data structure pros/cons
- Performance with 1000 comments?
- Loading nested comments paginated
- Real-time updates (WebSocket)

---

### HARD 8: Sortable Table with Filters
**Frequency:** ★★★★★  
**Time:** 45-60 minutes  
**Companies:** AdTech, Analytics, Admin dashboards

**What's Being Tested:**
- Complex state management (sort, filters, search)
- Sorting algorithm usage
- Multiple filter combinations
- Performance with large datasets
- Column-specific filtering

**Key Concepts:**
```javascript
// Complex state
const [data, setData] = useState(initialData);
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
const [filters, setFilters] = useState({});

// Sort by column
const sorted = [...data].sort((a, b) => {
  if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
  return 0;
})

// Filter by multiple columns
const filtered = data.filter(item =>
  Object.keys(filters).every(key =>
    !filters[key] || String(item[key]).includes(filters[key])
  )
)
```

**Interview Tips:**
- How to handle very large datasets (pagination, virtual scrolling)?
- Search performance optimization
- Sorting multiple columns
- Export to CSV
- Row selection with bulk actions

---

### HARD 9: Autocomplete / Search Dropdown
**Frequency:** ★★★★★  
**Time:** 35-45 minutes  
**Companies:** Google, Amazon, Microsoft, every company

**What's Being Tested:**
- Debouncing technique
- Keyboard navigation (arrow keys, Enter, Escape)
- Async API calls
- Loading states
- Matching and highlighting text

**Key Concepts:**
```javascript
// Debounce API calls
const debounceRef = useRef(null);

const handleInput = (value) => {
  clearTimeout(debounceRef.current);
  debounceRef.current = setTimeout(() => {
    // API call here
  }, 300);
}

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'ArrowDown') {
    setActiveIndex(prev => (prev + 1) % suggestions.length);
  }
  if (e.key === 'ArrowUp') {
    setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
  }
}

// Highlight matching text
const highlight = (text, query) => {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}
```

**Interview Mistakes:**
- ❌ Not debouncing (too many API calls)
- ❌ Forgetting Escape to close
- ❌ Not handling empty results
- ❌ Not showing loading state

---

### HARD 10: Multi-Step Wizard / Stepper
**Frequency:** ★★★★☆  
**Time:** 45-60 minutes  
**Companies:** Insurance, Banking, E-commerce checkout

**What's Being Tested:**
- Complex form state management
- Step-by-step validation
- Form persistence
- Navigation between steps
- Conditional steps
- Progress tracking

**Key Concepts:**
```javascript
// Form state
const [currentStep, setCurrentStep] = useState(0);
const [formData, setFormData] = useState({...});
const [errors, setErrors] = useState({...});

// Validate step before next
const canProceed = steps[currentStep].fields.every(field =>
  formData[field] && !errors[field]
)

// Save form on step change
const handleNext = () => {
  if (validateStep(currentStep)) {
    setCurrentStep(prev => prev + 1);
  }
}
```

**Interview Tips:**
- How to save incomplete forms?
- Resume partially filled wizard?
- Skip optional steps?
- Conditional steps based on answers?
- Summary page before submit

---

### HARD 11: Notification / Toast System
**Frequency:** ★★★★☆  
**Time:** 30-40 minutes  
**Companies:** Most companies with real-time feedback

**What's Being Tested:**
- Managing array of notifications
- Auto-dismiss timing
- Stacking/positioning
- Animation states
- Preventing duplicates

**Key Concepts:**
```javascript
// Array of notifications
const [notifications, setNotifications] = useState([]);

// Add notification
const notify = (message, type) => {
  const id = Date.now();
  setNotifications(prev => [...prev, { id, message, type }]);
  
  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, 3000);
}

// Remove manually
const removeNotification = (id) => {
  setNotifications(prev => prev.filter(n => n.id !== id));
}
```

**Custom Hook Bonus:**
```javascript
const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  
  const notify = (message, type) => {
    // ... implementation
  };
  
  return { notifications, notify };
}
```

---

### HARD 12: Drag and Drop List
**Frequency:** ★★★☆☆  
**Time:** 40-50 minutes  
**Companies:** Trello clones, Task management, Design tools

**What's Being Tested:**
- HTML5 Drag and Drop API
- dataTransfer object usage
- Reordering array logic
- Visual feedback during drag
- Performance with many items

**Key Concepts:**
```javascript
// Drag start - store dragged item ID
const handleDragStart = (e, itemId) => {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', itemId);
}

// Drag over - allow drop
const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

// Drop - reorder
const handleDrop = (e, dropIndex) => {
  const draggedId = e.dataTransfer.getData('text/plain');
  const draggedIndex = items.findIndex(i => i.id === draggedId);
  
  // Reorder array
  const newItems = [...items];
  const [removed] = newItems.splice(draggedIndex, 1);
  newItems.splice(dropIndex, 0, removed);
  setItems(newItems);
}
```

**Libraries Alternative:**
- react-beautiful-dnd (recommended)
- react-dnd
- Custom solution

---

## HOW TO PRACTICE

### Week 1-2: Foundation
1. Start with **HARD 1** (Infinite Scroll)
2. Continue with **HARD 2-4** (Multi-Select, Accordion, Modal)
3. These test basic state and event handling

### Week 2-3: Intermediate
4. **HARD 5-8** (Timer, Carousel, Comments, Table)
5. These require more complex state management
6. Start thinking about performance

### Week 3-4: Advanced + Interview Prep
7. **HARD 9-10** (Autocomplete, Wizard)
8. **HARD 11-12** (Notifications, Drag & Drop)
9. These are real interview questions

---

## INTERVIEW STRATEGY

### Before the Interview
- Know the basics (useState, useEffect, etc.)
- Practice each problem 3-5 times
- Time yourself (should code in 45 min)
- Discuss with peers

### During the Interview
1. **Ask clarifying questions** (5 min)
   - "Should it support X?"
   - "How many items max?"
   - "What about on mobile?"

2. **Discuss approach** (5 min)
   - "I'll use state for..."
   - "For performance, I'll..."
   - "Edge cases to handle..."

3. **Code solution** (30-40 min)
   - Start simple
   - Add features incrementally
   - Clean, readable code
   - Test as you go

4. **Optimize and discuss** (5-10 min)
   - "How to improve further?"
   - "Alternative approaches?"
   - "Performance considerations?"
   - "What about security?"

---

## SUCCESS CHECKLIST

By the end of 4 weeks, you should be able to:

- [ ] Implement all 10 EASY problems without reference (< 30 min each)
- [ ] Implement all 10 MEDIUM problems without reference (< 45 min each)
- [ ] Implement 8/12 HARD problems without reference (< 50 min each)
- [ ] Explain why you chose each approach
- [ ] Discuss edge cases and optimizations
- [ ] Handle errors gracefully
- [ ] Write clean, readable code
- [ ] Keyboard and accessibility support

---

## RESOURCES

**Files:**
- `HARD_PROBLEMS.js` - Problem specifications
- `HARD_SOLUTIONS.jsx` - Complete working solutions
- `PRACTICE_GUIDE.md` - Detailed thought processes

**Tools:**
- CodeSandbox or CodePen to practice
- Browser DevTools for debugging
- Time yourself with a timer

**Topics to Review:**
- React Hooks (useState, useEffect, useRef, useCallback)
- ES6 Array methods (map, filter, sort, reduce)
- Event handling (click, keyboard, drag)
- CSS transitions and animations
- Performance optimization (memoization, debouncing)

---

**Remember:** These are the **actual questions** asked in 4-10 LPA interviews. Master them and you'll be confident in any interview!
