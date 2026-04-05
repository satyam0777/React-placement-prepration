// ============================================
// EASY LEVEL CODING CHALLENGES
// ============================================
// Try to solve these without looking at solutions first!
// Focus on understanding what the problem is asking before coding.

/**
 * EASY 1: COUNTER WITH INCREMENT & DECREMENT
 * ==========================================
 * 
 * PROBLEM STATEMENT:
 * Create a React component that displays a counter with two buttons:
 * - "+" button that increases the counter by 1
 * - "-" button that decreases the counter by 1
 * - Reset button that sets counter back to 0
 * 
 * REQUIREMENTS:
 * 1. Display current counter value
 * 2. Plus button increases by 1
 * 3. Minus button decreases by 1
 * 4. Reset button goes back to 0
 * 5. Don't let counter go below 0
 * 
 * HINTS:
 * - Use useState for the counter value
 * - Use onClick handlers for buttons
 * - Math.max() can help prevent negative numbers
 * 
 * THINK ABOUT:
 * - What state do you need?
 * - What functions do you need?
 * - How do you update state?
 * - How do you prevent negative values?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// EASY 2: GREETING COMPONENT WITH INPUT
// =======================================
/**
 * PROBLEM STATEMENT:
 * Create a component that:
 * - Has an input field for user's name
 * - Shows "Hello, [Name]!" when name is entered
 * - Shows "Hello, Guest!" if name is empty
 * - Clear button to reset the input
 * 
 * REQUIREMENTS:
 * 1. Input field that accepts text
 * 2. Display changes dynamically as user types
 * 3. Show "Hello, Guest!" initially
 * 4. Show "Hello, [typed name]!" when typing
 * 5. Clear button resets input
 * 
 * HINTS:
 * - Use useState for input value
 * - Use conditional rendering (ternary or if)
 * - onChange handler updates state
 * - onClick handler for clear button
 * 
 * THINK ABOUT:
 * - Is this controlled component or uncontrolled?
 * - What state do you need?
 * - How do you render conditionally?
 * - How do you clear input?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// EASY 3: SIMPLE LIST WITH ADD & REMOVE
// ======================================
/**
 * PROBLEM STATEMENT:
 * Create a component that:
 * - Shows a list of items (start with 3 items)
 * - Each item has a delete button
 * - Clicking delete removes that item
 * - Add button adds new items with input value
 * 
 * REQUIREMENTS:
 * 1. Display initial list of items
 * 2. Each item has a delete button
 * 3. Clicking delete removes the item
 * 4. Input field to type new items
 * 5. Add button adds new item to list
 * 6. Clear input after adding
 * 
 * STARTER DATA:
 * const [items, setItems] = useState(['Apple', 'Banana', 'Orange'])
 * 
 * HINTS:
 * - Use .map() to display list
 * - Use .filter() to remove items
 * - Need two state variables
 * - Array operations need new array (not mutate)
 * 
 * THINK ABOUT:
 * - State structure? Array of items
 * - How to delete by index? filter() or splice()
 * - How to maintain new input separately? Second state
 * - Immutability - always create new array/object
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// EASY 4: TOGGLE VISIBILITY COMPONENT
// ====================================
/**
 * PROBLEM STATEMENT:
 * Create a component that:
 * - Shows a "Show Details" button
 * - When clicked, shows hidden content
 * - Button text changes to "Hide Details"
 * - Clicking again hides the content
 * 
 * REQUIREMENTS:
 * 1. Initially content is hidden
 * 2. Button shows "Show Details"
 * 3. Clicking button shows content & changes button text
 * 4. Clicking again hides content
 * 5. Button text toggles between "Show Details" and "Hide Details"
 * 
 * HINTS:
 * - Use boolean state (true/false)
 * - Conditional rendering to show/hide
 * - Ternary operator for button text
 * - onClick toggles boolean
 * 
 * THINK ABOUT:
 * - What state? Single boolean
 * - How to toggle? setVisibility(!visibility)
 * - How to show conditionally? {visibility && <Content />}
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// EASY 5: SIMPLE TEMPERATURE CONVERTER
// =====================================
/**
 * PROBLEM STATEMENT:
 * Create a component that converts temperature:
 * - Input field accepts Celsius
 * - Displays Fahrenheit in real-time
 * - Formula: F = (C × 9/5) + 32
 * 
 * REQUIREMENTS:
 * 1. Input field for Celsius
 * 2. Display converted Fahrenheit
 * 3. Updates as you type
 * 4. Handle empty input gracefully
 * 5. Show both values with labels
 * 
 * HINTS:
 * - Use useState for input value
 * - Parse input as number: parseFloat()
 * - Calculate on render
 * - Handle empty string case
 * 
 * THINK ABOUT:
 * - Input is always string, need to convert
 * - What if input is empty? Show 0 or nothing?
 * - Decimal places? Should you round?
 * - Error handling needed?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// ============================================
// MEDIUM LEVEL CODING CHALLENGES
// ============================================

// MEDIUM 1: FILTER & SEARCH LIST
// ===============================
/**
 * PROBLEM STATEMENT:
 * Create a component that:
 * - Shows list of 5-10 users with names and emails
 * - Has search input to filter by name
 * - Updates list as you type
 * - Shows "No results" when no match
 * 
 * REQUIREMENTS:
 * 1. Display list of users
 * 2. Search input filters by name
 * 3. Updates in real-time as you type
 * 4. Case-insensitive search
 * 5. Show "No results found" when empty
 * 6. Show count of results
 * 
 * STARTER DATA:
 * const users = [
 *   { id: 1, name: 'Alice', email: 'alice@example.com' },
 *   { id: 2, name: 'Bob', email: 'bob@example.com' },
 *   // ... more users
 * ]
 * 
 * HINTS:
 * - Use .filter() with .includes() or .startsWith()
 * - toLowerCase() for case-insensitive
 * - State for search input
 * - Show filtered results
 * 
 * THINK ABOUT:
 * - Two pieces of state? (users + searchTerm)
 * - Filter logic? name.toLowerCase().includes(...)
 * - Should filter happen every render? Yes
 * - Show all users initially? Yes
 * - Case sensitivity? Make it case-insensitive
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// MEDIUM 2: FORM WITH MULTIPLE FIELDS & VALIDATION
// ==================================================
/**
 * PROBLEM STATEMENT:
 * Create a simple registration form with:
 * - Name input (required, min 2 chars)
 * - Email input (required, must be valid email)
 * - Age input (required, 18-60)
 * - Submit button (disabled if form invalid)
 * - Show error messages for each field
 * 
 * REQUIREMENTS:
 * 1. Three input fields
 * 2. Validation for each field
 * 3. Error messages display only with errors
 * 4. Submit button disabled until form valid
 * 5. Show success message on submit
 * 6. Clear form after successful submit
 * 7. Show validation errors below each field
 * 
 * VALIDATION RULES:
 * - Name: Not empty, min 2 characters
 * - Email: Valid email format
 * - Age: Number between 18 and 60
 * 
 * HINTS:
 * - Need state for form data (object or separate)
 * - Need state for errors (object with field names)
 * - Validate on input change or blur
 * - Check form validity before enabling submit
 * - Use regex for email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 * 
 * THINK ABOUT:
 * - Form state structure? Object with name, email, age
 * - Errors structure? Object with same keys
 * - When to validate? On each keystroke? On blur?
 * - isFormValid function? Check all fields
 * - Email regex needed? Yes
 * - What happens on submit? Show success, clear form
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// MEDIUM 3: TOGGLE ITEMS IN A LIST (MULTIPLE STATE)
// ===================================================
/**
 * PROBLEM STATEMENT:
 * Create a to-do list where:
 * - Each item can be marked complete/incomplete
 * - Shows checkboxes for each item
 * - Strikethrough for completed items
 * - Count of completed vs total items
 * - Delete button for each item
 * - Add new items
 * 
 * REQUIREMENTS:
 * 1. Display list of todos
 * 2. Each todo is object: {id, text, completed}
 * 3. Checkbox toggles completed status
 * 4. Strikethrough for completed items
 * 5. Show "X completed out of Y total"
 * 6. Delete button removes item
 * 7. Add new todo from input
 * 8. Items persist in state, not localStorage
 * 
 * STARTER DATA:
 * const [todos, setTodos] = useState([
 *   { id: 1, text: 'Learn React', completed: false },
 *   { id: 2, text: 'Build a project', completed: false },
 *   // ...
 * ])
 * 
 * HINTS:
 * - Map over todos
 * - Create new object with spread to toggle completed
 * - Filter to remove items
 * - Generate unique ID: Date.now() or random number
 * - Count completed: .filter(t => t.completed).length
 * 
 * THINK ABOUT:
 * - Todo structure? Object with id, text, completed
 * - Toggle completed? Map and update that item
 * - Delete? Filter by id
 * - New input state? Separate useState
 * - Counter? .filter().length
 * - Styling for completed? Conditional className or style
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// MEDIUM 4: STAR RATING COMPONENT
// ================================
/**
 * PROBLEM STATEMENT:
 * Create a star rating component:
 * - Shows 5 empty stars
 * - Hovering over stars shows preview rating
 * - Clicking sets the rating
 * - Selected stars are filled/highlighted
 * - Shows rating text (e.g., "3 out of 5 stars")
 * 
 * REQUIREMENTS:
 * 1. Display 5 stars
 * 2. Hover highlights stars up to that position
 * 3. Click sets rating permanently
 * 4. Filled stars show current rating
 * 5. Show text "X out of 5 stars"
 * 6. Reset button clears rating
 * 
 * HINTS:
 * - State for current rating (number 0-5)
 * - State for hover rating (number 0-5)
 * - Array of 5 stars, map and render
 * - onMouseEnter/onMouseLeave for hover
 * - onClick to set rating
 * - Conditional styling based on rating
 * 
 * THINK ABOUT:
 * - Two separate states? rating and hoverRating
 * - How to render 5 stars? Array with .map()
 * - How to show preview? If hovering, show hoverRating
 * - How to show selected? If clicked, show rating
 * - Styling? Different color for filled vs empty
 * - Logic? If i <= rating, show filled. Else show empty
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// MEDIUM 5: TABS/ACCORDION COMPONENT
// ===================================
/**
 * PROBLEM STATEMENT:
 * Create a tabbed interface:
 * - 3 tabs: About, Skills, Projects
 * - Click tab to show its content
 * - Only one tab active at a time
 * - Active tab shown in different style
 * - Content changes when tab changes
 * 
 * REQUIREMENTS:
 * 1. Display 3 tab buttons
 * 2. Display content for active tab only
 * 3. Click tab to activate it
 * 4. Active tab has different styling
 * 5. Content matches selected tab
 * 6. Smooth switching between tabs
 * 
 * STARTER DATA:
 * const tabs = [
 *   { id: 'about', label: 'About', content: 'About content...' },
 *   { id: 'skills', label: 'Skills', content: 'Skills content...' },
 *   { id: 'projects', label: 'Projects', content: 'Projects content...' }
 * ]
 * 
 * HINTS:
 * - State for active tab ID
 * - Map over tabs for buttons
 * - Conditional rendering for content
 * - Onclick sets active tab
 * - Conditional className for active style
 * 
 * THINK ABOUT:
 * - Store active tab as ID/string or index/number?
 * - How to render tabs? .map() over array
 * - How to show content? Find tab, show content
 * - Active styling? classname={activeTab === tab.id ? 'active' : ''}
 * - Should be easy to add/remove tabs
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// ============================================
// HOW TO USE THIS FILE
// ============================================
/**
 * WORKFLOW:
 * 
 * 1. READ: Read the problem statement carefully
 *    - What does it need to do?
 *    - What are the requirements?
 *    - Look at the THINK ABOUT section
 * 
 * 2. THINK: Don't code yet!
 *    - What state do you need?
 *    - What functions/handlers?
 *    - How will data flow?
 *    - Draw it on paper if needed
 * 
 * 3. CODE: Now write the component
 *    - Start with state (useState)
 *    - Write JSX structure
 *    - Add event handlers
 *    - Don't look at solutions yet!
 * 
 * 4. TEST: Check if it works
 *    - Does it match requirements?
 *    - Try edge cases (empty input, etc.)
 *    - Fix bugs
 * 
 * 5. REVIEW: Compare with solutions
 *    - Did you approach it similarly?
 *    - Any better ways?
 *    - Learn from differences
 * 
 * ============================================
 * TIPS:
 * ============================================
 * ✓ Write code on paper first (practice for interviews)
 * ✓ Think about edge cases (empty input, wrong type)
 * ✓ Use meaningful variable names
 * ✓ Add comments explaining logic
 * ✓ Test your code thoroughly
 * ✓ Don't rush - understand before coding
 * ✓ Implement 3x your first time
 * ✓ Refactor - think of better ways
 * 
 * ============================================
 * DIFFICULTY PROGRESSION:
 * ============================================
 * Easy 1-5 → Core React hooks & basics
 * Medium 1-2 → Validation & complex state
 * Medium 3-5 → Multiple state operations
 * 
 * After these, move to the full problems in:
 * src/components/mern-problems/
 * 
 * ============================================
 */

// ============================================
// HARD LEVEL CODING CHALLENGES
// ============================================
// Advanced problems asked in 4-10 LPA companies
// These test deep React knowledge & problem-solving

/**
 * HARD 1: INFINITE SCROLL / LAZY LOADING
 * ========================================
 * 
 * PROBLEM STATEMENT:
 * Build a component that:
 * - Displays a list of items
 * - When user scrolls to bottom, load more items
 * - Show "Loading..." while fetching
 * - No duplicate items
 * - Don't request multiple times if already loading
 * 
 * REQUIREMENTS:
 * 1. Initial list of 10 items
 * 2. Detect when scrolled to bottom (200px)
 * 3. Auto-load 10 more items
 * 4. Show loading state
 * 5. Prevent duplicate requests (use ref flag)
 * 6. Stop when no more items
 * 7. Smooth scroll experience
 * 
 * CONCEPTS:
 * - useEffect for scroll listener
 * - useRef to track loading state
 * - useState for items array
 * - Scroll event detection
 * - window.scrollY, innerHeight, scrollHeight
 * 
 * INTERVIEW TIPS:
 * - Scroll detection: window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
 * - Why debounce? Scroll fires many times per second
 * - Why useRef for loading? State updates async, need immediate check
 * - Discuss Intersection Observer API (better performance)
 * 
 * THINK ABOUT:
 * - Where to add scroll listener? useEffect
 * - How to prevent duplicate requests? useRef flag
 * - When to clear listener? useEffect cleanup
 * - How to detect bottom? Calculate using window properties
 * - Should you debounce? Yes, scroll fires frequently
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 2: MULTI-SELECT WITH TAGS
 * ===============================
 * 
 * PROBLEM STATEMENT:
 * Build component with:
 * - List of items (frameworks: React, Vue, Angular, etc.)
 * - Click item to select/deselect
 * - Selected items show as tags above list
 * - Remove tag by clicking X
 * - Search to filter items
 * - Select All / Clear All buttons
 * 
 * REQUIREMENTS:
 * 1. Display items with checkboxes
 * 2. Search input filters items
 * 3. Selected items show as tags
 * 4. Tag has X button to remove
 * 5. Show count of selected
 * 6. Select All selects filtered items
 * 7. Clear All removes all selections
 * 8. Remove tag updates both tag area and checkbox
 * 
 * CONCEPTS:
 * - Array of selected items
 * - .includes() to check if selected
 * - .filter() to remove or filter
 * - Multiple state variables
 * - Tag component design
 * 
 * INTERVIEW TIPS:
 * - For many items, use Set instead of Array (O(1) lookup)
 * - Show selected.length and total.length
 * - Discuss efficiency: Set vs Array vs Object
 * - What if items are objects not strings?
 * 
 * THINK ABOUT:
 * - What state? selected array, search string
 * - How to add? setSelected([...selected, item])
 * - How to remove? setSelected(prev => prev.filter(i => i !== item))
 * - How to check? selected.includes(item)
 * - Filter items? allItems.filter(item => item.includes(search))
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 3: MODAL / DIALOG COMPONENT
 * =================================
 * 
 * PROBLEM STATEMENT:
 * Create a modal that:
 * - Hidden by default
 * - Opens when button clicked
 * - Shows semi-transparent overlay behind
 * - Modal centered on screen
 * - Close on X button, outside click, Escape key
 * - Prevent body scroll when open
 * - Smooth animations
 * 
 * REQUIREMENTS:
 * 1. Modal state (open/close)
 * 2. Overlay (dark background)
 * 3. Modal window with content
 * 4. Close button (X)
 * 5. Click outside closes modal
 * 6. Escape key closes
 * 7. Body scroll disabled
 * 8. Smooth animations
 * 
 * CONCEPTS:
 * - Boolean state for open/close
 * - Overlay click handler
 * - Event.stopPropagation()
 * - Keydown event listener
 * - document.body.style.overflow
 * - useEffect for listeners
 * 
 * INTERVIEW TIPS:
 * - Prevent body scroll: document.body.style.overflow = 'hidden'
 * - Detect Escape: e.key === 'Escape'
 * - Stop event bubbling: e.stopPropagation()
 * - Accessibility: role="dialog", aria-modal="true"
 * - Focus management (bonus)
 * 
 * THINK ABOUT:
 * - Where to add listener? useEffect
 * - How to prevent scroll? Modify body style
 * - How to close? Multiple ways (X, overlay, Escape)
 * - How to center? position: fixed, top 50%, left 50%, transform
 * - Accessibility? ARIA attributes
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 4: COUNTDOWN TIMER
 * =======================
 * 
 * PROBLEM STATEMENT:
 * Build a timer that:
 * - Input for minutes and seconds
 * - Display remaining time as MM:SS
 * - Start, Pause, Resume, Stop buttons
 * - Stop resets to initial time
 * - Warning color when < 1 minute left
 * - Prevent input changes while running
 * 
 * REQUIREMENTS:
 * 1. Input fields for min/sec
 * 2. Display MM:SS format with padding
 * 3. Start button begins countdown
 * 4. Pause pauses timer
 * 5. Resume continues from pause
 * 6. Stop resets to initial values
 * 7. Inputs disabled while running
 * 8. Warning style when < 60 sec
 * 9. Alert or visual when timer ends
 * 10. Handle edge cases (0:0, 99:99)
 * 
 * CONCEPTS:
 * - setInterval for timer
 * - useRef for interval ID
 * - useEffect cleanup (clearInterval)
 * - useState for time, running, paused states
 * - String.padStart(2, '0') for formatting
 * 
 * INTERVIEW TIPS:
 * - MUST clear interval in cleanup (memory leak!)
 * - Why useRef? Need immediate access to interval ID
 * - Why cleanup? Component unmount, state change
 * - How to format? String(minutes).padStart(2, '0')
 * - Edge case: What if user sets 0:0?
 * 
 * THINK ABOUT:
 * - States needed? minutes, seconds, isRunning, isPaused
 * - Where to update? Every 1000ms in interval
 * - How to pause? setInterval cleanup, don't create new
 * - How to format? padStart or padEnd
 * - Clean up? Yes, in useEffect return
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 5: AUTOCOMPLETE / SEARCH DROPDOWN
 * =======================================
 * 
 * PROBLEM STATEMENT:
 * Build autocomplete that:
 * - Input field shows suggestions
 * - Filter suggestions as user types
 * - Debounce API calls (don't call every keystroke)
 * - Keyboard navigation (arrow keys)
 * - Click or Enter to select
 * - Escape to close
 * - Show "Loading..." while fetching
 * - Show "No results" if nothing found
 * 
 * REQUIREMENTS:
 * 1. Input field
 * 2. Suggestions dropdown
 * 3. Filter based on input
 * 4. Debounce 300ms before searching
 * 5. Show loading state
 * 6. Keyboard: Arrow Up/Down to navigate
 * 7. Keyboard: Enter to select
 * 8. Keyboard: Escape to close
 * 9. Click item to select
 * 10. Active item highlighted
 * 
 * CONCEPTS:
 * - useRef for debounce timeout
 * - useRef for active index
 * - setTimeout and clearTimeout
 * - Keyboard event handlers
 * - Filtering suggestions
 * - Active/highlighted state
 * 
 * INTERVIEW TIPS:
 * - Debounce prevents API overload
 * - useRef for ID tracking (not causing re-render)
 * - Modulo operator for wrapping: (index + 1) % length
 * - API error handling
 * - Cache results (bonus)
 * 
 * THINK ABOUT:
 * - How to debounce? setTimeout with clearTimeout
 * - How to navigate? Up/Down arrows change activeIndex
 * - How to select? Enter key or click
 * - How to wrap? Use modulo: (index + 1) % suggestions.length
 * - How to highlight? Background color on active
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 6: SORTABLE TABLE WITH FILTERS
 * ====================================
 * 
 * PROBLEM STATEMENT:
 * Build a data table with:
 * - Display data in columns
 * - Click header to sort ASC/DESC
 * - Show sort direction arrow
 * - Filter inputs for each column
 * - Global search across data
 * - Show count of filtered results
 * - Combine multiple filters
 * 
 * REQUIREMENTS:
 * 1. Table with columns
 * 2. Click header to sort
 * 3. Show ↑ or ↓ for sort direction
 * 4. Only one column sorted at a time
 * 5. Filter inputs below headers
 * 6. Filter AND combined (not OR)
 * 7. Global search across all fields
 * 8. Show X of Y matching items
 * 9. Sorting persists with filtering
 * 10. Responsive design
 * 
 * CONCEPTS:
 * - Complex state (sort, filters, search)
 * - Array.sort() method
 * - Multiple conditions in filter
 * - Combining sort + filter
 * - Table rendering with .map()
 * 
 * INTERVIEW TIPS:
 * - Store sort as { key, direction }
 * - Filter all criteria together
 * - Sorting multiple columns? Discuss
 * - Performance with 10k rows? Virtual scrolling
 * - Preserve sort when filtering
 * 
 * THINK ABOUT:
 * - State structure? sortConfig, filters, search
 * - How to sort? Array.sort() with comparison
 * - How to filter? .filter() with all criteria
 * - How to combine? Apply filter first, then sort? Or sort first?
 * - How to count? filteredData.length
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 7: NESTED COMMENTS SYSTEM
 * ===============================
 * 
 * PROBLEM STATEMENT:
 * Build a comment system with:
 * - Display comments and replies nested
 * - Indentation shows reply level
 * - Add new top-level comments
 * - Reply button to add nested comments
 * - Delete button removes comment
 * - Like count for each comment
 * - Recursive rendering of nested items
 * 
 * REQUIREMENTS:
 * 1. Display initial nested comments
 * 2. Top-level comments not indented
 * 3. Replies indented under parent
 * 4. Add top-level comment form
 * 5. Reply button shows input
 * 6. Delete removes nested replies too
 * 7. Like button increments count
 * 8. Edit button modifies comment
 * 9. Show author, timestamp, content
 * 10. Handle deep nesting
 * 
 * CONCEPTS:
 * - Recursive component rendering
 * - Nested array/object structure
 * - Reply to specific comment
 * - Recursive deletion
 * - Depth-based styling (margin, indent)
 * 
 * INTERVIEW TIPS:
 * - Discuss flat vs nested data structure
 * - Recursive component: <Comment><Comment></Comment></Comment>
 * - Depth parameter to track nesting level
 * - Performance with 1000 comments?
 * - Loading paginated comments API
 * 
 * THINK ABOUT:
 * - Data structure? Nested or flat with parentId?
 * - How to render recursively? Pass replies to component
 * - How to delete? Recursive filter function
 * - How to reply? Add to replies array of parent
 * - Depth calculation? Pass depth +1 to child
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 8: IMAGE CAROUSEL
 * ======================
 * 
 * PROBLEM STATEMENT:
 * Build image carousel with:
 * - Display one image at a time
 * - Previous/Next buttons to navigate
 * - Dots below to jump to image
 * - Active dot highlighted
 * - Keyboard arrow keys to navigate
 * - Smooth transitions
 * - Wrap around (last → first)
 * 
 * REQUIREMENTS:
 * 1. Current index state
 * 2. Array of image URLs
 * 3. Display current image
 * 4. Previous button: index - 1 (wrap)
 * 5. Next button: index + 1 (wrap)
 * 6. Dots for each image
 * 7. Click dot to jump
 * 8. Arrow keys navigate (left/right)
 * 9. Smooth fade or slide transition
 * 10. Touch swipe support (bonus)
 * 
 * CONCEPTS:
 * - Index state management
 * - Modulo for wrapping: (prev === 0) ? length - 1 : prev - 1
 * - Keyboard event listeners
 * - CSS transitions or Keyframes
 * - Map to render dots
 * 
 * INTERVIEW TIPS:
 * - Wrapping: Use modulo or conditional
 * - Smooth: CSS transition, not instant
 * - Keyboard: Add 'keydown' listener in useEffect
 * - Touch: Track touch start/end positions (bonus)
 * - Auto-rotate? setTimeout with cleanup
 * 
 * THINK ABOUT:
 * - State? currentIndex only
 * - Next logic? (currentIndex + 1) % images.length
 * - Prev logic? (currentIndex - 1 + images.length) % images.length
 * - Keyboard? Add listener in useEffect
 * - Animation? CSS or state-driven?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 9: MULTI-STEP FORM WIZARD
 * ===============================
 * 
 * PROBLEM STATEMENT:
 * Build a multi-step form with:
 * - Multiple steps (Personal, Address, Confirmation)
 * - Progress indicator showing current step
 * - Next/Previous buttons
 * - Validate before moving next
 * - Can't go forward with errors
 * - Go back to edit previous steps
 * - Form state saved between steps
 * - Summary before final submit
 * 
 * REQUIREMENTS:
 * 1. Current step state
 * 2. Form data state (object with all fields)
 * 3. Errors state per field
 * 4. Progress bar/dots showing steps
 * 5. Step-specific validation
 * 6. Next disabled if validation errors
 * 7. Previous always enabled
 * 8. Form data persists on back
 * 9. Summary/confirmation step
 * 10. Submit button on final step
 * 
 * CONCEPTS:
 * - Multiple state variables
 * - Complex form state management
 * - Validation logic
 * - Step-specific field arrays
 * - Conditional rendering per step
 * 
 * INTERVIEW TIPS:
 * - Store all form data in one object
 * - Each step validates its fields only
 * - Save form data even if go back
 * - Show summary of all entered data
 * - Handle form submission
 * 
 * THINK ABOUT:
 * - State structure? currentStep, formData {}, errors {}
 * - Validation? Do per step, not all at once
 * - Steps data? Array of step objects with fields
 * - Disable next? Check if formData[field] exists
 * - Summary? Find and display all data
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 10: ACCORDION MENU
 * =======================
 * 
 * PROBLEM STATEMENT:
 * Build accordion component with:
 * - Multiple sections
 * - Each section expandable/collapsible
 * - Click header to toggle
 * - Only one section open at a time (optional)
 * - Show/hide indicator (arrow)
 * - Smooth expansion animation
 * - Nested items in each section
 * 
 * REQUIREMENTS:
 * 1. Display multiple sections
 * 2. Each section has title and content
 * 3. Click title to toggle expand/collapse
 * 4. Show ▶ (closed) or ▼ (open)
 * 5. Smooth height transition
 * 6. Only one open OR allow multiple
 * 7. Content slides in/out
 * 8. Nested items list in content
 * 9. Prevent clicking content closing it
 * 10. Responsive design
 * 
 * CONCEPTS:
 * - Boolean expanded state per section
 * - Toggle expand/collapse
 * - Conditional rendering
 * - CSS transitions for height
 * - Map over sections
 * 
 * INTERVIEW TIPS:
 * - One-open-only? Map and set others to false
 * - Smooth animation? Use max-height transition
 * - Multiple open? Just toggle current
 * - Nested? Map over items array too
 * - Performance? OK if < 50 sections
 * 
 * THINK ABOUT:
 * - State? Array of sections with expanded boolean
 * - Toggle? Update specific section's expanded state
 * - Animation? CSS max-height or React Transition Group
 * - One open? When toggle, close all others
 * - Content render? Only if expanded={true}
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 11: DRAG & DROP LIST
 * ==========================
 * 
 * PROBLEM STATEMENT:
 * Build a draggable list where:
 * - Items can be dragged
 * - Drop in new position to reorder
 * - Shows drop zone indicator
 * - Updates order on drop
 * - Smooth animations
 * - Visual feedback during drag
 * - Works on desktop (optional: mobile touch)
 * 
 * REQUIREMENTS:
 * 1. List of items
 * 2. Items are draggable
 * 3. Cursor shows drag icon
 * 4. Drop zone indicator shows gap
 * 5. On drop, reorder list
 * 6. Smooth animation
 * 7. Show nothing lost message
 * 8. Handle invalid drops gracefully
 * 9. Performance with 100+ items
 * 10. Undo capability (bonus)
 * 
 * CONCEPTS:
 * - HTML5 Drag & Drop API
 * - onDragStart, onDragEnd, onDrop
 * - onDragOver, onDragEnter, onDragLeave
 * - dataTransfer object
 * - Reordering array (splice)
 * 
 * INTERVIEW TIPS:
 * - Library alternative: react-beautiful-dnd
 * - dataTransfer.setData to pass data
 * - Prevent drag of certain items
 * - Performance with virtual scrolling
 * - Mobile touch alternative
 * 
 * THINK ABOUT:
 * - Store what? Dragged item ID, drop position
 * - Start drag? onDragStart store ID to dataTransfer
 * - Allow drop? onDragOver preventDefault
 * - Drop action? Get ID, splice from old, into new
 * - Visual feedback? Opacity on drag, highlight on drop
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

/**
 * HARD 12: NOTIFICATION SYSTEM
 * =============================
 * 
 * PROBLEM STATEMENT:
 * Build a notification/toast system with:
 * - Multiple notifications display at once
 * - Auto-dismiss after 3-5 seconds
 * - Manual close button
 * - Different types (success, error, warning, info)
 * - Different icons and colors
 * - Stacked vertically
 * - Smooth animations
 * - Prevent duplicates
 * 
 * REQUIREMENTS:
 * 1. Array of notifications
 * 2. Each has: id, message, type
 * 3. Display multiple at once
 * 4. Auto-dismiss after timeout
 * 5. Close button on each
 * 6. Different styling per type
 * 7. Stack vertically
 * 8. Smooth slide in/out
 * 9. Unique ID per notification
 * 10. Delete from array on dismiss
 * 
 * CONCEPTS:
 * - Array of notification objects
 * - Add to array (unshift or push)
 * - Remove from array (filter)
 * - useEffect for auto-dismiss
 * - setTimeout and cleanup
 * 
 * INTERVIEW TIPS:
 * - Store notifications in state array
 * - Notify function adds to array
 * - useEffect removes after timeout
 * - Prevent duplicates? Check message exists
 * - Context API for global access (bonus)
 * 
 * THINK ABOUT:
 * - State? Array of {id, message, type}
 * - Add? setNotifications([...prev, newNotification])
 * - Remove? setNotifications(prev => prev.filter(n => n.id !== id))
 * - ID generation? Date.now(), UUID, random
 * - Auto-dismiss? useEffect with setTimeout
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

export const ChallengesInfo = {
  easy: [
    {
      id: 'easy1',
      title: 'Counter with Increment & Decrement',
      difficulty: 'Easy',
      concepts: ['useState', 'onClick handlers', 'Math.max()'],
    },
    {
      id: 'easy2',
      title: 'Greeting Component with Input',
      difficulty: 'Easy',
      concepts: ['useState', 'onChange', 'Conditional rendering'],
    },
    {
      id: 'easy3',
      title: 'Simple List with Add & Remove',
      difficulty: 'Easy',
      concepts: ['useState', '.map()', '.filter()', 'Array operations'],
    },
    {
      id: 'easy4',
      title: 'Toggle Visibility Component',
      difficulty: 'Easy',
      concepts: ['useState boolean', 'Conditional rendering', '.toggle()'],
    },
    {
      id: 'easy5',
      title: 'Simple Temperature Converter',
      difficulty: 'Easy',
      concepts: ['useState', 'parseFloat()', 'Math calculation'],
    },
  ],
  medium: [
    {
      id: 'medium1',
      title: 'Filter & Search List',
      difficulty: 'Medium',
      concepts: ['.filter()', '.includes()', 'toLowerCase()', 'Real-time search'],
    },
    {
      id: 'medium2',
      title: 'Form with Validation',
      difficulty: 'Medium',
      concepts: ['Form state', 'Validation logic', 'Error handling', 'Regex'],
    },
    {
      id: 'medium3',
      title: 'Toggle Items in List',
      difficulty: 'Medium',
      concepts: ['Complex state', 'Immutable updates', 'Object spread operator'],
    },
    {
      id: 'medium4',
      title: 'Star Rating Component',
      difficulty: 'Medium',
      concepts: ['Multiple states', 'onMouseEnter/Leave', 'Conditional styling'],
    },
    {
      id: 'medium5',
      title: 'Tabs/Accordion Component',
      difficulty: 'Medium',
      concepts: ['Active state', 'Conditional rendering', 'Ternary operators'],
    },
  ],
  hard: [
    {
      id: 'hard1',
      title: 'Infinite Scroll / Lazy Loading',
      difficulty: 'Hard',
      concepts: ['useEffect', 'useRef', 'Scroll detection', 'Debouncing'],
      frequency: '★★★★★'
    },
    {
      id: 'hard2',
      title: 'Multi-Select with Tags',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Array operations', 'Search filtering'],
      frequency: '★★★★★'
    },
    {
      id: 'hard3',
      title: 'Modal / Dialog Component',
      difficulty: 'Hard',
      concepts: ['Modal state', 'Event handling', 'Body overflow', 'Escape key'],
      frequency: '★★★★★'
    },
    {
      id: 'hard4',
      title: 'Countdown Timer',
      difficulty: 'Hard',
      concepts: ['setInterval', 'useEffect cleanup', 'State management'],
      frequency: '★★★★☆'
    },
    {
      id: 'hard5',
      title: 'Autocomplete / Search Dropdown',
      difficulty: 'Hard',
      concepts: ['Debouncing', 'Keyboard nav', 'API calls', 'Highlighting'],
      frequency: '★★★★★'
    },
    {
      id: 'hard6',
      title: 'Sortable Table with Filters',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Sorting', 'Filtering', 'Performance'],
      frequency: '★★★★★'
    },
    {
      id: 'hard7',
      title: 'Nested Comments System',
      difficulty: 'Hard',
      concepts: ['Recursive rendering', 'Nested state', 'Tree structures'],
      frequency: '★★★★☆'
    },
    {
      id: 'hard8',
      title: 'Image Carousel',
      difficulty: 'Hard',
      concepts: ['Index management', 'Keyboard nav', 'CSS transitions'],
      frequency: '★★★☆☆'
    },
    {
      id: 'hard9',
      title: 'Multi-Step Form Wizard',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Validation', 'Form handling'],
      frequency: '★★★★☆'
    },
    {
      id: 'hard10',
      title: 'Accordion Menu',
      difficulty: 'Hard',
      concepts: ['Toggle state', 'Nested rendering', 'CSS transitions'],
      frequency: '★★★★☆'
    },
    {
      id: 'hard11',
      title: 'Drag & Drop List',
      difficulty: 'Hard',
      concepts: ['Drag API', 'Reordering', 'Visual feedback'],
      frequency: '★★★☆☆'
    },
    {
      id: 'hard12',
      title: 'Notification System',
      difficulty: 'Hard',
      concepts: ['Array state', 'useEffect cleanup', 'Animations'],
      frequency: '★★★★☆'
    },
  ],
};
