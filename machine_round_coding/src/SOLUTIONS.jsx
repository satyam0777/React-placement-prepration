// ============================================
// EASY LEVEL - COMPLETE SOLUTIONS
// ============================================
// Reference these ONLY after you've tried coding!

/**
 * EASY 1: COUNTER WITH INCREMENT & DECREMENT
 * SOLUTION PROVIDED BELOW
 */

export function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1)); // Don't go below 0
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Counter</h2>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</div>
      <button onClick={increment} style={{ margin: '0.5rem' }}>+</button>
      <button onClick={decrement} style={{ margin: '0.5rem' }}>-</button>
      <button onClick={reset} style={{ margin: '0.5rem' }}>Reset</button>
    </div>
  );
}

// KEY POINTS:
// ✓ useState for counter state
// ✓ Three separate handler functions
// ✓ Math.max() prevents negative numbers
// ✓ onClick calls the handler

---

/**
 * EASY 2: GREETING COMPONENT WITH INPUT
 * SOLUTION PROVIDED BELOW
 */

export function GreetingComponent() {
  const [name, setName] = React.useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    setName('');
  };

  const greeting = name.trim() ? `Hello, ${name}!` : 'Hello, Guest!';

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Greeting Component</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleClear}>Clear</button>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{greeting}</p>
    </div>
  );
}

// KEY POINTS:
// ✓ Single state for input value (controlled component)
// ✓ onChange handler captures input value
// ✓ Conditional rendering with ternary operator
// ✓ e.target.value to get input value
// ✓ trim() to avoid whitespace-only input

---

/**
 * EASY 3: SIMPLE LIST WITH ADD & REMOVE
 * SOLUTION PROVIDED BELOW
 */

export function SimpleList() {
  const [items, setItems] = React.useState(['Apple', 'Banana', 'Orange']);
  const [newItem, setNewItem] = React.useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Item List</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '0.75rem',
              background: '#f0f0f0',
              marginBottom: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              style={{ background: '#ff6b6b', color: 'white', border: 'none' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// KEY POINTS:
// ✓ Two separate state variables (items + newItem)
// ✓ .map() to display list
// ✓ .filter() to remove items by index
// ✓ Spread operator [...items] to create new array
// ✓ Check trim() before adding
// ✓ Clear input after successful add

---

/**
 * EASY 4: TOGGLE VISIBILITY COMPONENT
 * SOLUTION PROVIDED BELOW
 */

export function ToggleVisibility() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Toggle Visibility</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>
      
      {isVisible && (
        <div
          style={{
            background: '#e7f3ff',
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '4px',
          }}
        >
          <h3>Hidden Content</h3>
          <p>This content appears and disappears when you click the button!</p>
          <p>Notice the button text also changes dynamically.</p>
        </div>
      )}
    </div>
  );
}

// KEY POINTS:
// ✓ Boolean state (true/false)
// ✓ Toggle with !state
// ✓ Conditional rendering with && operator
// ✓ Ternary for button text
// ✓ Simple and clean approach

---

/**
 * EASY 5: SIMPLE TEMPERATURE CONVERTER
 * SOLUTION PROVIDED BELOW
 */

export function TemperatureConverter() {
  const [celsius, setCelsius] = React.useState('');

  const fahrenheit =
    celsius === '' ? '' : ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Temperature Converter</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Enter temperature"
          style={{ padding: '0.5rem', marginLeft: '0.5rem' }}
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <span style={{ marginLeft: '0.5rem', fontSize: '1.1rem' }}>
          {fahrenheit || 'N/A'}
        </span>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
        Formula: F = (C × 9/5) + 32
      </p>
    </div>
  );
}

// KEY POINTS:
// ✓ Input is string, need parseFloat() to convert
// ✓ Check for empty input (celsius === '')
// ✓ Calculate using formula
// ✓ toFixed(2) for decimal places
// ✓ Show 'N/A' when empty

---

// ============================================
// MEDIUM LEVEL - COMPLETE SOLUTIONS
// ============================================

/**
 * MEDIUM 1: FILTER & SEARCH LIST
 * SOLUTION PROVIDED BELOW
 */

export function FilterSearchList() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com' },
    { id: 5, name: 'Evan Thomas', email: 'evan@example.com' },
  ];

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Users</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
          style={{ padding: '0.5rem', width: '250px' }}
        />
      </div>

      <p style={{ color: '#666' }}>
        Found {filteredUsers.length} result{filteredUsers.length !== 1 ? 's' : ''}
      </p>

      {filteredUsers.length === 0 ? (
        <p style={{ color: '#999' }}>No users found matching "{searchTerm}"</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                padding: '1rem',
                background: '#f9f9f9',
                borderLeft: '4px solid #007bff',
                marginBottom: '0.75rem',
              }}
            >
              <strong>{user.name}</strong>
              <p style={{ margin: '0.25rem 0', color: '#666' }}>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// KEY POINTS:
// ✓ Single state for search term
// ✓ Filter users in render (not separate function)
// ✓ toLowerCase() for case-insensitive search
// ✓ includes() for partial matching
// ✓ Show "No results" when empty
// ✓ Show result count

---

/**
 * MEDIUM 2: FORM WITH VALIDATION
 * SOLUTION PROVIDED BELOW
 */

export function FormValidation() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    age: '',
  });

  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Age validation
    const age = parseInt(form.age);
    if (!form.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || age < 18 || age > 60) {
      newErrors.age = 'Age must be between 18 and 60';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', form);
      
      // Reset form
      setTimeout(() => {
        setForm({ name: '', email: '', age: '' });
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px' }}>
      <h2>Registration Form</h2>

      {submitted && (
        <div
          style={{
            background: '#d4edda',
            color: '#155724',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}
        >
          Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderColor: errors.name ? 'red' : '#ddd',
              border: '1px solid',
            }}
          />
          {errors.name && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderColor: errors.email ? 'red' : '#ddd',
              border: '1px solid',
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Age Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Age
          </label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderColor: errors.age ? 'red' : '#ddd',
              border: '1px solid',
            }}
          />
          {errors.age && (
            <span style={{ color: 'red', fontSize: '0.9rem' }}>
              {errors.age}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0 && form.name && form.email && form.age}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// KEY POINTS:
// ✓ Form state as object
// ✓ Errors state tracks validation errors
// ✓ Validate function checks all fields
// ✓ Show errors conditionally
// ✓ Regex for email validation
// ✓ Clear form after successful submit
// ✓ PreventDefault on form submission

---

/**
 * MEDIUM 3: TOGGLE ITEMS IN LIST
 * SOLUTION PROVIDED BELOW
 */

export function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Practice coding', completed: false },
  ]);
  const [newTodo, setNewTodo] = React.useState('');

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo('');
    }
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div style={{ padding: '2rem', maxWidth: '500px' }}>
      <h2>Todo List</h2>

      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          style={{ padding: '0.75rem', width: '70%', marginRight: '0.5rem' }}
        />
        <button onClick={addTodo} style={{ padding: '0.75rem 1rem' }}>
          Add
        </button>
      </div>

      <p style={{ color: '#666' }}>
        Completed: {completedCount} / {todos.length}
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: '1rem',
              background: '#f9f9f9',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
              style={{ width: '20px', height: '20px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#333',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// KEY POINTS:
// ✓ Array of objects (todos) as state
// ✓ Map to toggle completed status
// ✓ Filter to delete items
// ✓ Spread operator to create new objects
// ✓ Conditional styling based on completion
// ✓ Generated ID with Date.now()
// ✓ Calculate completion count with .filter()

---

/**
 * MEDIUM 4: STAR RATING COMPONENT
 * SOLUTION PROVIDED BELOW
 */

export function StarRating() {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Star Rating</h2>

      <div
        style={{
          fontSize: '3rem',
          margin: '2rem 0',
          letterSpacing: '0.5rem',
        }}
      >
        {stars.map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(star)}
            style={{
              cursor: 'pointer',
              color: star <= (hoverRating || rating) ? '#ffc107' : '#ddd',
              transition: 'color 0.2s',
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p>
        {rating > 0 ? (
          <>
            You rated: <strong>{rating} out of 5 stars</strong>
          </>
        ) : (
          'Hover and click to rate'
        )}
      </p>

      {rating > 0 && (
        <button
          onClick={() => setRating(0)}
          style={{
            padding: '0.75rem 1rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Clear Rating
        </button>
      )}
    </div>
  );
}

// KEY POINTS:
// ✓ Two states: rating (selected) and hoverRating (preview)
// ✓ Array of 5 stars, map and render
// ✓ onMouseEnter/Leave for hover preview
// ✓ onClick to set permanent rating
// ✓ Conditional color: star <= (hoverRating || rating)
// ✓ Show different text based on rating
// ✓ Clear button to reset

---

/**
 * MEDIUM 5: TABS/ACCORDION COMPONENT
 * SOLUTION PROVIDED BELOW
 */

export function TabsComponent() {
  const [activeTab, setActiveTab] = React.useState('about');

  const tabs = [
    {
      id: 'about',
      label: 'About',
      content:
        'This tab shows information about me. I am a developer passionate about React and full-stack development.',
    },
    {
      id: 'skills',
      label: 'Skills',
      content:
        'JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, and more!',
    },
    {
      id: 'projects',
      label: 'Projects',
      content:
        'I have built several projects including todo apps, dashboards, and e-commerce platforms.',
    },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div style={{ padding: '2rem', maxWidth: '500px' }}>
      <h2>Tabs Component</h2>

      {/* Tab Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #ddd',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              background:
                activeTab === tab.id
                  ? '#007bff'
                  : 'transparent',
              color: activeTab === tab.id ? 'white' : '#333',
              cursor: 'pointer',
              fontSize: '1rem',
              borderBottom:
                activeTab === tab.id ? '3px solid #007bff' : 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '4px',
          minHeight: '100px',
        }}
      >
        <p>{activeTabContent?.content}</p>
      </div>
    </div>
  );
}

// KEY POINTS:
// ✓ Single state for active tab ID
// ✓ Array of tabs with id, label, content
// ✓ Map over tabs to render buttons
// ✓ Find active tab content to display
// ✓ Conditional styling for active tab
// ✓ onClick sets active tab
// ✓ Clean and easy to extend with more tabs
