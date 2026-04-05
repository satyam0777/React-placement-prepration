import React, { useState, useEffect } from 'react';
import '../../styles/MERNProblemDetail.css';

/**
 * PROBLEM: TODO APP WITH LOCAL STORAGE
 * =====================================
 * PROBLEM STATEMENT:
 * Build a Todo application with:
 * 1. Add new todos
 * 2. Mark todos as complete/incomplete
 * 3. Delete todos
 * 4. Persist data in localStorage
 * 5. Load data from localStorage on mount
 * 
 * CONCEPTS COVERED:
 * - useState Hook: Manage local state
 * - useEffect Hook: Side effects (localStorage persistence)
 * - CRUD Operations: Create, Read, Update, Delete
 * - localStorage API: Browser storage
 * - Event Handling: Form submission, clicks
 * 
 * REAL-WORLD USE CASE:
 * - Personal task management
 * - Shopping lists
 * - Note-taking apps
 * 
 * INTERVIEW TIPS:
 * - Explain state structure before coding
 * - Handle edge cases (empty input, duplicate items)
 * - Show cleanup with useEffect
 * - Discuss localStorage limitations
 * 
 * FOLLOW-UP QUESTIONS:
 * 1. How would you add due dates?
 * 2. How would you categorize todos?
 * 3. How would you sync with a backend API?
 * 4. How would you handle conflicts with multiple tabs?
 */

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Failed to parse todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    
    // Validation: don't add empty todos
    if (!inputValue.trim()) {
      alert('Please enter a todo');
      return;
    }

    const newTodo = {
      id: Date.now(), // Simple unique ID (in production, use UUID)
      text: inputValue,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="mern-problem">
      <section className="problem-section">
        <h3>Problem Statement</h3>
        <div className="problem-description">
          <p>
            Build a Todo application where users can add, complete, and delete tasks.
            All data should persist in the browser using localStorage.
          </p>
          <div className="requirements-box">
            <strong>Requirements:</strong>
            <ul>
              <li>✓ Add new todos via form submission</li>
              <li>✓ Mark todos as complete/incomplete</li>
              <li>✓ Delete todos</li>
              <li>✓ Persist todos using localStorage</li>
              <li>✓ Filter todos (All, Active, Completed)</li>
              <li>✓ Display todo counts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Live Demo - Try It</h3>
        
        {/* Add Todo Form */}
        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>

        {/* Stats */}
        <div className="todo-stats">
          <span>Total: {todos.length}</span>
          <span>Active: {activeCount}</span>
          <span>Completed: {completedCount}</span>
        </div>

        {/* Filters */}
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">
              {todos.length === 0
                ? 'No todos yet. Add one to get started!'
                : 'No todos in this filter.'}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-delete"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="problem-section">
        <h3>Code Implementation</h3>
        <div className="code-box">
          <pre>{`
// Key CONCEPTS:

// 1. STATE MANAGEMENT
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');

// 2. LOAD FROM LOCALSTORAGE (useEffect)
useEffect(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    setTodos(JSON.parse(savedTodos));
  }
}, []); // Empty dependency = runs once on mount

// 3. SAVE TO LOCALSTORAGE (useEffect)
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]); // Runs whenever todos change

// 4. ADD TODO (CREATE)
const addTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: inputValue,
    completed: false,
  };
  setTodos([...todos, newTodo]);
  setInputValue('');
};

// 5. TOGGLE TODO (UPDATE)
const toggleTodo = (id) => {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

// 6. DELETE TODO (DELETE)
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

// 7. FILTER TODOS (READ with condition)
const filteredTodos = todos.filter(todo => {
  if (filter === 'active') return !todo.completed;
  if (filter === 'completed') return todo.completed;
  return true;
});
          `}</pre>
        </div>
      </section>

      <section className="problem-section">
        <h3>Key Concepts Explained</h3>
        <div className="concepts">
          <div className="concept">
            <h4>useState Hook</h4>
            <p>
              Manages component state. When state updates, React re-renders the component
              with new data.
            </p>
            <code>const [todos, setTodos] = useState(initialValue);</code>
          </div>

          <div className="concept">
            <h4>useEffect Hook with Dependencies</h4>
            <p>
              Runs side effects. With empty [], runs once on mount. With [todos], runs
              whenever todos change.
            </p>
            <code>useEffect(() =&gt; {/* code */}, [dependency]);</code>
          </div>

          <div className="concept">
            <h4>localStorage API</h4>
            <p>
              Browser storage that persists across sessions. Data must be JSON stringified
              to store and parsed to retrieve.
            </p>
            <code>localStorage.setItem('key', JSON.stringify(value));</code>
          </div>

          <div className="concept">
            <h4>Immutable State Updates</h4>
            <p>
              Never mutate state directly. Always create new arrays/objects using spread
              operator or map/filter.
            </p>
            <code>setTodos([...todos, newTodo]); // Good</code>
          </div>

          <div className="concept">
            <h4>CRUD Operations</h4>
            <p>
              Create: Add new item | Read: Fetch/filter items | Update: Modify existing
              | Delete: Remove item
            </p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Interview Talking Points</h3>
        <ul className="talking-points">
          <li>
            <strong>Two useEffect hooks:</strong> One for loading data, one for saving it
            (separation of concerns)
          </li>
          <li>
            <strong>Event handling:</strong> Form submission, checkbox changes, button clicks
          </li>
          <li>
            <strong>Immutability:</strong> Always create new state objects, never mutate
            directly
          </li>
          <li>
            <strong>Data persistence:</strong> localStorage limitations (5-10MB, string-only,
            same-origin)
          </li>
          <li>
            <strong>Performance:</strong> Could add useMemo/useCallback if list gets very
            large
          </li>
        </ul>
      </section>

      <section className="problem-section">
        <h3>Next Steps / Follow-up Improvements</h3>
        <div className="next-steps">
          <div className="step">
            <h4>1. Add Due Dates & Priority</h4>
            <p>Add date input and priority levels. Sort by priority/due date.</p>
          </div>
          <div className="step">
            <h4>2. Backend Integration</h4>
            <p>Replace localStorage with API calls (POST, GET, PUT, DELETE).</p>
          </div>
          <div className="step">
            <h4>3. Categories/Tags</h4>
            <p>Add ability to organize todos into categories or tags.</p>
          </div>
          <div className="step">
            <h4>4. Search Functionality</h4>
            <p>Add search with debouncing to find todos quickly.</p>
          </div>
          <div className="step">
            <h4>5. Local vs Server Sync</h4>
            <p>Handle offline functionality with sync when back online.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TodoApp;
