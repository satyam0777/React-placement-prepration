// ============================================
// HARD LEVEL & INTERVIEW PROBLEMS
// ============================================
// Problems asked in 4-10 LPA company interviews
// These test your deep React understanding

/**
 * HARD 1: INFINITE SCROLL / LAZY LOADING
 * ========================================
 * 
 * PROBLEM STATEMENT:
 * Build a component that:
 * - Loads initial 10 items
 * - As user scrolls to bottom, loads 10 more items
 * - Shows "Loading..." while fetching
 * - Smooth infinite scroll experience
 * - Don't reload duplicate items
 * 
 * REQUIREMENTS:
 * 1. Display list of items initially
 * 2. Detect when user scrolls to bottom
 * 3. Load more items when near bottom
 * 4. Show loading indicator
 * 5. Prevent duplicate requests (debounce)
 * 6. Handle end of data (no more to load)
 * 7. Smooth user experience
 * 
 * CONCEPTS:
 * - useEffect with scroll listener
 * - useRef to track scroll position
 * - useState for items array
 * - Intersection Observer API (bonus)
 * - Pagination logic
 * - Loading states
 * 
 * INTERVIEW HINTS:
 * - Scroll detection: window.innerHeight + window.scrollY >= document.body.scrollHeight
 * - Debounce to prevent multiple requests
 * - Track if already loading to prevent duplicates
 * - Can use Intersection Observer for better performance
 * 
 * FOLLOW-UP QUESTIONS:
 * - How would you optimize with Intersection Observer?
 * - How would you handle errors?
 * - What if user scrolls very fast?
 * - How to implement virtual scrolling for 100k items?
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 2: MULTI-SELECT WITH TAGS
// ===============================
/**
 * PROBLEM STATEMENT:
 * Build a component that:
 * - Shows list of items you can select multiple
 * - Selected items show as tags/chips above
 * - Remove tag by clicking X
 * - Show selected count
 * - Search to filter items
 * - Handle "Select All" and "Clear All"
 * 
 * REQUIREMENTS:
 * 1. List of items with checkboxes
 * 2. Search/filter functionality
 * 3. Selected items show as removable tags
 * 4. Select All button selects filtered items
 * 5. Clear All clears all selections
 * 6. Show count of selected items
 * 7. Remove individual tags
 * 8. Smooth interaction
 * 
 * STATE STRUCTURE:
 * const [items, setItems] = useState([...])
 * const [selected, setSelected] = useState([])
 * const [searchTerm, setSearchTerm] = useState('')
 * 
 * CONCEPTS:
 * - Array of selected IDs
 * - Check if ID in selected array
 * - Add/remove from array
 * - Multiple state management
 * - Array operations (includes, filter, map)
 * 
 * INTERVIEW TIPS:
 * - Discuss selected items as array or object
 * - Show efficient lookup with Set if many items
 * - Handle edge cases (no items, select all empty, etc.)
 * - Explain why you chose your data structure
 * 
 * HARDER VERSION:
 * - Drag and drop to reorder tags
 * - Keyboard navigation (arrow keys)
 * - Customizable tag appearance
 * - Group items by category
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 3: ACCORDION WITH NESTED ITEMS
// ====================================
/**
 * PROBLEM STATEMENT:
 * Build an accordion that:
 * - Multiple sections expandable/collapsible
 * - Each section has items
 * - Click section header to expand/collapse
 * - Show only one section open OR allow multiple
 * - Smooth animation
 * - Handle nested items
 * 
 * REQUIREMENTS:
 * 1. Display multiple accordion sections
 * 2. Click header to toggle open/close
 * 3. Content slides in/out
 * 4. Show expand/collapse indicator (arrow)
 * 5. Only 1 open at a time (optional: allow multiple)
 * 6. Nested items inside sections
 * 7. Different content per section
 * 8. Smooth animation
 * 
 * DATA STRUCTURE:
 * const sections = [
 *   { id: 1, title: 'Section 1', items: [...], expanded: false },
 *   { id: 2, title: 'Section 2', items: [...], expanded: false },
 * ]
 * 
 * CONCEPTS:
 * - State for expanded sections
 * - Toggle expand/collapse
 * - Conditional rendering
 * - CSS transitions (or CSS-in-JS)
 * - Map nested arrays
 * 
 * INTERVIEW TIPS:
 * - Discuss one-open vs multiple-open
 * - Show CSS transition smoothness
 * - Handle keyboard navigation (Tab, Enter)
 * - ARIA attributes for accessibility
 * 
 * VARIATIONS:
 * - Controlled accordion (from parent)
 * - Uncontrolled accordion
 * - Nested accordions
 * - Custom animations
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 4: MODAL / DIALOG COMPONENT
// =================================
/**
 * PROBLEM STATEMENT:
 * Build a modal dialog that:
 * - Opens on button click
 * - Shows overlay (dark background)
 * - Modal can be closed by:
 *   - Close button (X)
 *   - Click outside modal (optional)
 *   - Escape key
 * - Prevents body scroll when open
 * - Focus management
 * - Smooth open/close animation
 * 
 * REQUIREMENTS:
 * 1. Modal hidden initially
 * 2. Button opens modal
 * 3. Shows semi-transparent overlay
 * 4. Modal centered on screen
 * 5. Close button works
 * 6. Clicking outside closes (optional)
 * 7. Escape key closes
 * 8. Body scroll disabled when open
 * 9. Smooth animations
 * 10. Focus returns to trigger button
 * 
 * CONCEPTS:
 * - Modal state (open/close)
 * - Overlay click handler
 * - Keydown listener (Escape)
 * - Body overflow management
 * - Portal rendering (bonus)
 * - Focus management
 * 
 * INTERVIEW TIPS:
 * - Discuss accessibility (focus trap, ARIA)
 * - Handle body scroll with overflow: hidden
 * - Prevent event bubbling on modal click
 * - Return focus to trigger button on close
 * - Mobile considerations
 * 
 * VARIATIONS:
 * - Confirm dialog (with OK/Cancel)
 * - Alert dialog
 * - Form in modal
 * - Multiple modals
 * - Modal size variations
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 5: COUNTDOWN TIMER / CLOCK
// ================================
/**
 * PROBLEM STATEMENT:
 * Build a countdown timer that:
 * - Takes minutes and seconds as input
 * - Displays remaining time
 * - Start, Pause, Resume buttons
 * - Stop button resets timer
 * - Shows warning when < 1 minute left
 * - Optional: Sound alert when finished
 * 
 * REQUIREMENTS:
 * 1. Input fields for min/sec
 * 2. Display MM:SS format
 * 3. Start button begins countdown
 * 4. Pause button pauses
 * 5. Resume continues
 * 6. Stop resets to initial
 * 7. Disable inputs while running
 * 8. Warning color when < 1 min
 * 9. Show "00:00" sound alert
 * 10. Handles edge cases
 * 
 * CONCEPTS:
 * - setInterval for timer
 * - useEffect cleanup (clear interval)
 * - useState for time remaining
 * - useRef for interval ID
 * - Time formatting (padStart/padEnd)
 * - State management (running, paused)
 * 
 * INTERVIEW TIPS:
 * - Must clear interval in cleanup
 * - Handle pause/resume correctly
 * - Format time as MM:SS with leading zeros
 * - Edge case: What if user enters 0:0?
 * - Memory leak prevention (cleanup)
 * 
 * BONUS FEATURES:
 * - Multiple timers at once
 * - Circular progress indicator
 * - Preset times (5 min, 10 min, etc.)
 * - Save timer presets
 * - Notifications when done
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 6: IMAGE CAROUSEL / SLIDER
// ================================
/**
 * PROBLEM STATEMENT:
 * Build an image carousel that:
 * - Displays one image at a time
 * - Previous/Next buttons
 * - Dots to jump to image
 * - Auto-rotate (optional)
 * - Keyboard arrow keys to navigate
 * - Smooth transitions
 * - Touch gestures (swipe) on mobile
 * 
 * REQUIREMENTS:
 * 1. Array of image URLs
 * 2. Display current image
 * 3. Previous button shows prior image
 * 4. Next button shows next image
 * 5. Navigation dots to jump
 * 6. Active dot highlighted
 * 7. Wraps around (last → first)
 * 8. Keyboard navigation (arrow keys)
 * 9. Auto-rotate after X seconds (optional)
 * 10. Smooth fade/slide transitions
 * 
 * CONCEPTS:
 * - State for current index
 * - Modulo operator for wrapping
 * - Event listeners (keyboard, touch)
 * - CSS transitions or animations
 * - useEffect for auto-rotate
 * - Cleanup intervals
 * 
 * INTERVIEW TIPS:
 * - Discuss different slide effects (fade vs slide)
 * - Handle keyboard shortcuts
 * - Mobile touch handling (swipe detection)
 * - Performance with many images
 * - Accessibility (keyboard nav, alt text)
 * 
 * VARIATIONS:
 * - Auto-play with pause on hover
 * - Thumbnail previews
 * - Caption text
 * - Lightbox modal on click
 * - Different transition effects
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 7: NESTED COMMENTS SYSTEM
// ===============================
/**
 * PROBLEM STATEMENT:
 * Build a comment system with:
 * - Display comments and replies
 * - Reply button to add nested comments
 * - Reply input appears inline
 * - Delete button for each comment
 * - Like button for comments
 * - Edit button to modify comment
 * - Show timestamp
 * - Thread view (show replies indented)
 * 
 * REQUIREMENTS:
 * 1. List of comments (flat or nested structure)
 * 2. Each comment shows: text, author, timestamp, likes
 * 3. Reply button shows input to reply
 * 4. Nested replies shown indented
 * 5. Delete removes comment + nested
 * 6. Edit allows modifying comment
 * 7. Like updates count
 * 8. Cancel reply closes input
 * 9. Smooth rendering
 * 10. Handle deep nesting
 * 
 * DATA STRUCTURE (Choose one):
 * Option A: Flat + parentId reference
 * [{id: 1, text: '..', parentId: null}, {id: 2, text: '..', parentId: 1}]
 * 
 * Option B: Nested structure
 * [{id: 1, text: '..', replies: [...]}, ...]
 * 
 * CONCEPTS:
 * - Recursive rendering for nested items
 * - useState for reply input per comment
 * - Filter to delete comments
 * - Map to update likes/text
 * - Component reusability
 * - Tree data structures
 * 
 * INTERVIEW TIPS:
 * - Discuss flat vs nested data structure
 * - Performance with many comments
 * - Recursive component rendering
 * - Loading comments from API
 * - Optimistic updates
 * - Error handling
 * 
 * CHALLENGE:
 * - Load more comments pagination
 * - Real-time updates (websocket)
 * - Comment moderation
 * - Mention@ notifications
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 8: SORTABLE TABLE WITH FILTERS
// ====================================
/**
 * PROBLEM STATEMENT:
 * Build a data table that:
 * - Display data in columns
 * - Click column headers to sort (ASC/DESC)
 * - Show sort indicator (arrow)
 * - Filter by multiple columns
 * - Search across all data
 * - Show/hide columns (optional)
 * - Pagination (optional)
 * - Responsive design
 * 
 * REQUIREMENTS:
 * 1. Multi-column table
 * 2. Sort by clicking headers
 * 3. Show sort direction
 * 4. Filter text inputs for each column
 * 5. Search globally across data
 * 6. Filter AND is combined
 * 7. Dynamic column show/hide
 * 8. Export to CSV (optional)
 * 9. Pagination
 * 10. Responsive on mobile
 * 
 * CONCEPTS:
 * - Complex state (sort, filters, search)
 * - Multi-level sorting
 * - Multiple filter criteria
 * - Combining filters and search
 * - Pagination logic
 * - Table rendering performance
 * 
 * INTERVIEW TIPS:
 * - Start simple, add features
 * - Discuss filter AND vs OR logic
 * - Search performance with large datasets
 * - Virtual scrolling for performance
 * - Accessibility (keyboard nav, roles)
 * - Explain sort state management
 * 
 * HARDER VERSION:
 * - Row selection (select multiple)
 * - Bulk actions (delete selected)
 * - Drag to reorder columns
 * - Column width adjustment
 * - Advanced filters
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 9: AUTOCOMPLETE / SEARCH DROPDOWN
// =======================================
/**
 * PROBLEM STATEMENT:
 * Build an autocomplete component that:
 * - Shows dropdown with matching suggestions
 * - Filters as user types (with debounce)
 * - Click to select suggestion
 * - Keyboard navigation (arrow keys)
 * - Highlight matching text in suggestions
 * - Handle API calls for suggestions
 * - Show "Loading..." while fetching
 * - Handle no results state
 * 
 * REQUIREMENTS:
 * 1. Input field for search
 * 2. Dropdown suggestions appear on focus
 * 3. Filter suggestions while typing
 * 4. Debounce API calls (300-500ms)
 * 5. Show "Loading..." state
 * 6. Keyboard navigation (up/down arrows)
 * 7. Enter to select
 * 8. Escape to close dropdown
 * 9. Click to select suggestion
 * 10. Highlight matching text
 * 11. Show "No results" message
 * 12. Handle errors gracefully
 * 
 * CONCEPTS:
 * - useRef for dropdown state
 * - Debouncing (setTimeout + cleanup)
 * - Keyboard event handling
 * - Matching and highlighting text
 * - API integration
 * - Loading/error states
 * 
 * INTERVIEW TIPS:
 * - Explain debounce pattern
 * - Keyboard navigation is key
 * - Accessibility (ARIA labels, roles)
 * - How to highlight matching text?
 * - Handle async API calls
 * - Cache previous results (bonus)
 * 
 * VARIATIONS:
 * - Remote API suggestions
 * - Category grouping
 * - Recent searches
 * - Favorite results
 * - Custom icons
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 10: STEP PROGRESSION / WIZARD
// ==================================
/**
 * PROBLEM STATEMENT:
 * Build a multi-step form wizard that:
 * - Shows current step progress
 * - Next/Previous buttons
 * - Form validation per step
 * - Can't go forward with errors
 * - Show summary of entered data
 * - Submit final form
 * - Save form state
 * - Go back and edit previous steps
 * 
 * REQUIREMENTS:
 * 1. Display current step
 * 2. Show progress bar/dots
 * 3. Each step has form fields
 * 4. Validate before next step
 * 5. Show validation errors
 * 6. Next disabled if errors
 * 7. Previous button always enabled
 * 8. Summary step shows all data
 * 9. Submit button on final step
 * 10. Navigate back to edit
 * 11. Save state (not lost on back)
 * 12. Handle form submission
 * 
 * DATA STRUCTURE:
 * const steps = [
 *   { id: 1, title: 'Personal Info', fields: [...] },
 *   { id: 2, title: 'Address', fields: [...] },
 *   { id: 3, title: 'Confirmation', fields: [] },
 * ]
 * 
 * STATE:
 * const [currentStep, setCurrentStep] = useState(0)
 * const [formData, setFormData] = useState({...})
 * const [errors, setErrors] = useState({...})
 * 
 * CONCEPTS:
 * - Complex form state
 * - Validation per step
 * - Navigation between steps
 * - Progress tracking
 * - Form data persistence
 * 
 * INTERVIEW TIPS:
 * - Discuss form state structure
 * - Validation strategy
 * - How to save form data
 * - Edge cases (unsaved changes, back button)
 * - Mobile responsiveness
 * - Data persistence (localStorage)
 * 
 * ADVANCED FEATURES:
 * - Save progress to server
 * - Resume incomplete wizard
 * - Skip optional steps
 * - Dynamic step creation
 * - Conditional steps
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 11: NOTIFICATION SYSTEM
// =============================
/**
 * PROBLEM STATEMENT:
 * Build a notification/toast component that:
 * - Multiple notifications can display
 * - Shows at top/bottom corner
 * - Auto-dismiss after X seconds
 * - Manual close button
 * - Different notification types (success, error, warning, info)
 * - Animations (fade in/out)
 * - Queue notifications
 * - Prevent duplicates
 * 
 * REQUIREMENTS:
 * 1. Display notifications
 * 2. Multiple at once (stacked)
 * 3. Auto-dismiss after timeout
 * 4. Close button
 * 5. Different types (styling)
 * 6. Icons for each type
 * 7. Smooth animations
 * 8. Position configurable (top/bottom)
 * 9. Prevent duplicates
 * 10. Stack vertically
 * 11. Unique ID per notification
 * 12. Remove on dismiss
 * 
 * CONCEPTS:
 * - Array of notifications
 * - Add/remove from array
 * - useEffect for auto-dismiss
 * - setTimeout management
 * - Unique IDs (Date.now(), uuid)
 * - Animation states
 * 
 * INTERVIEW TIPS:
 * - How to prevent duplicates?
 * - How to handle stacking?
 * - Remove timeout on manual close
 * - Accessibility (role, aria-live)
 * - Performance with many notifications
 * - Custom hook (useNotification) - bonus
 * 
 * ARCHITECTURE:
 * Option A: Notifications in state
 * Option B: Context API for global
 * Option C: Custom hook with Context
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// HARD 12: DRAG AND DROP LIST
// ============================
/**
 * PROBLEM STATEMENT:
 * Build a draggable list where:
 * - Items can be dragged
 * - Items can be dropped in new position
 * - Shows drop zone indicator
 * - Reorder list based on drop
 * - Smooth animations
 * - Works on desktop (mouse)
 * - Optional: Works on mobile (touch)
 * 
 * REQUIREMENTS:
 * 1. List of draggable items
 * 2. Drag item shows visual feedback
 * 3. Drop zone indicator shows
 * 4. Drop reorders list
 * 5. Smooth animations
 * 6. No item lost (undo ability)
 * 7. Handle invalid drops
 * 8. Cursor changes on drag
 * 9. Works across browsers
 * 10. Performance with 100+ items
 * 
 * HTML5 Drag & Drop:
 * - ondragstart, ondrag, ondragend
 * - ondragover, ondrop, ondragleave
 * - dataTransfer object
 * 
 * CONCEPTS:
 * - HTML5 drag & drop API
 * - dataTransfer for data passing
 * - dragover event handling
 * - Reordering array (splice)
 * - Visual feedback (CSS + state)
 * 
 * INTERVIEW TIPS:
 * - Discuss DnD vs custom solutions
 * - Libraries like react-beautiful-dnd
 * - Performance with large lists
 * - Accessibility (keyboard alternatives)
 * - Mobile touch support
 * - Browser compatibility
 * 
 * ALTERNATIVES:
 * - react-beautiful-dnd library
 * - react-dnd library
 * - Custom solution with mouse/touch
 * 
 * -----> TRY CODING THIS FIRST <-----
 */

// ============================================
// HOW THESE ARE ASKED IN INTERVIEWS
// ============================================
/**
 * INTERVIEW FORMAT:
 * 
 * 1. REQUIREMENT GATHERING (5-10 minutes)
 * Interviewer: "Build a component that..."
 * Your job: Ask clarifying questions
 * - "Should it support X?"
 * - "What about on mobile?"
 * - "How many items max?"
 * 
 * 2. DISCUSSION (5 minutes)
 * Explain your approach:
 * - "I'll use state for..."
 * - "I'll handle X by..."
 * - "For performance, I'll..."
 * 
 * 3. CODE (30-40 minutes)
 * Write the component
 * - Start simple
 * - Add features incrementally
 * - Clean, readable code
 * - Good variable names
 * 
 * 4. DISCUSSION (5-10 minutes)
 * - How to optimize further?
 * - What about edge cases?
 * - How would you test?
 * - What about performance?
 * 
 * WHAT THEY'RE TESTING:
 * ✓ React knowledge (hooks, state)
 * ✓ JavaScript (arrays, objects, functions)
 * ✓ Problem solving (break down complexity)
 * ✓ Code quality (readable, maintainable)
 * ✓ Edge case handling
 * ✓ Performance awareness
 * ✓ Communication skills
 * 
 * TIPS:
 * - Talk through your thinking
 * - Don't try to be perfect
 * - Ask for clarification
 * - Can you improve? Offer to refactor
 * - Acknowledge edge cases
 * - Time management (don't get stuck)
 */

export const HardProblems = {
  hard: [
    {
      id: 'hard1',
      title: 'Infinite Scroll / Lazy Loading',
      difficulty: 'Hard',
      concepts: ['useEffect', 'useRef', 'Scroll detection', 'Debouncing'],
      time: '35-45 min',
      frequency: '★★★★★',
    },
    {
      id: 'hard2',
      title: 'Multi-Select with Tags',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Array operations', 'Multiple selections'],
      time: '30-40 min',
      frequency: '★★★★★',
    },
    {
      id: 'hard3',
      title: 'Accordion with Nested Items',
      difficulty: 'Hard',
      concepts: ['Toggle state', 'Nested rendering', 'CSS transitions'],
      time: '25-35 min',
      frequency: '★★★★☆',
    },
    {
      id: 'hard4',
      title: 'Modal / Dialog Component',
      difficulty: 'Hard',
      concepts: ['Modal state', 'Event handling', 'Accessibility', 'Focus'],
      time: '20-30 min',
      frequency: '★★★★★',
    },
    {
      id: 'hard5',
      title: 'Countdown Timer',
      difficulty: 'Hard',
      concepts: ['setInterval', 'useEffect cleanup', 'State management'],
      time: '25-35 min',
      frequency: '★★★★☆',
    },
    {
      id: 'hard6',
      title: 'Image Carousel / Slider',
      difficulty: 'Hard',
      concepts: ['State management', 'Keyboard handling', 'CSS transitions'],
      time: '30-40 min',
      frequency: '★★★☆☆',
    },
    {
      id: 'hard7',
      title: 'Nested Comments System',
      difficulty: 'Hard',
      concepts: ['Recursive rendering', 'Nested state', 'Tree structures'],
      time: '40-50 min',
      frequency: '★★★★☆',
    },
    {
      id: 'hard8',
      title: 'Sortable Table with Filters',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Sorting', 'Filtering', 'Performance'],
      time: '45-60 min',
      frequency: '★★★★★',
    },
    {
      id: 'hard9',
      title: 'Autocomplete / Search Dropdown',
      difficulty: 'Hard',
      concepts: ['Debouncing', 'Keyboard nav', 'API calls', 'Highlighting'],
      time: '35-45 min',
      frequency: '★★★★★',
    },
    {
      id: 'hard10',
      title: 'Multi-Step Wizard',
      difficulty: 'Hard',
      concepts: ['Complex state', 'Validation', 'Form handling', 'Navigation'],
      time: '45-60 min',
      frequency: '★★★★☆',
    },
    {
      id: 'hard11',
      title: 'Notification System',
      difficulty: 'Hard',
      concepts: ['Array state', 'useEffect cleanup', 'Animations', 'Queuing'],
      time: '30-40 min',
      frequency: '★★★★☆',
    },
    {
      id: 'hard12',
      title: 'Drag & Drop List',
      difficulty: 'Hard',
      concepts: ['Drag & drop API', 'Reordering', 'Visual feedback'],
      time: '40-50 min',
      frequency: '★★★☆☆',
    },
  ],
};

// FREQUENCY LEGEND:
// ★★★★★ = Asked in almost every interview (must know)
// ★★★★☆ = Asked frequently (very important)
// ★★★☆☆ = Asked sometimes (good to know)
// ★★☆☆☆ = Asked occasionally (nice to know)
