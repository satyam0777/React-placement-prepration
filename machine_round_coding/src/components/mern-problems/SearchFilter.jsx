import React, { useState, useEffect, useRef } from 'react';
import '../../styles/MERNProblemDetail.css';

/**
 * PROBLEM: SEARCH & FILTER WITH DEBOUNCE
 * ======================================
 * PROBLEM STATEMENT:
 * Build a search feature that:
 * 1. Filters data in real-time
 * 2. Prevents excessive API calls with debouncing
 * 3. Shows search results count
 * 4. Handles loading and empty states
 * 5. Optimizes performance
 * 
 * CONCEPTS COVERED:
 * - Debouncing: Delay function execution until user stops typing
 * - useRef: Store timeout ID without causing re-renders
 * - useEffect: Cleanup debounce timer
 * - Performance optimization
 * - UX improvements
 * 
 * WHY DEBOUNCING IS IMPORTANT:
 * Without debounce:
 * - Every keystroke triggers API call
 * - 10 characters = 10 API calls (WASTEFUL!)
 * - Server gets hammered
 * - Bandwidth wasted
 * 
 * With debounce:
 * - Only API call when user stops typing
 * - Wait 300ms after last keystroke
 * - Much more efficient
 * - Better server load
 * 
 * REAL-WORLD SCENARIOS:
 * - Google search suggestions
 * - E-commerce product search
 * - User/profile search
 * - Location autocomplete
 * - Any search/filter feature
 * 
 * INTERVIEW TIPS:
 * - Explain debouncing vs throttling
 * - Show performance improvement
 * - Discuss debounce delay values (typically 300-500ms)
 * - Mention cleanup in useEffect
 */

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiCallCount, setApiCallCount] = useState(0);
  const debounceTimer = useRef(null);

  // Mock data
  const allUsers = [
    { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Backend Developer', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'Full Stack Developer', email: 'charlie@example.com' },
    { id: 4, name: 'Diana Prince', role: 'UI Designer', email: 'diana@example.com' },
    { id: 5, name: 'Evan Thomas', role: 'Product Manager', email: 'evan@example.com' },
    { id: 6, name: 'Fiona Green', role: 'DevOps Engineer', email: 'fiona@example.com' },
    { id: 7, name: 'George White', role: 'Data Scientist', email: 'george@example.com' },
    { id: 8, name: 'Hannah Black', role: 'QA Engineer', email: 'hannah@example.com' },
    { id: 9, name: 'Ian Davis', role: 'Security Engineer', email: 'ian@example.com' },
    { id: 10, name: 'Julia Wilson', role: 'Technical Writer', email: 'julia@example.com' },
  ];

  /**
   * DEBOUNCED SEARCH FUNCTION
   * 
   * How it works:
   * 1. User types → searchTerm updates → useEffect runs
   * 2. Clear previous timer
   * 3. Set new timer for 500ms
   * 4. If user types again before 500ms, timer clears and resets
   * 5. After 500ms without typing, API call executes
   * 
   * Results:
   * - Typing "john" = 1 API call (not 4)
   * - Better performance
   * - Reduced server load
   */
  useEffect(() => {
    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // If search is empty, clear results
    if (searchTerm.trim() === '') {
      setResults([]);
      setLoading(false);
      return;
    }

    // Set loading state
    setLoading(true);

    // Set new timer - execute after 500ms of no typing
    debounceTimer.current = setTimeout(() => {
      // Simulate API call
      performSearch(searchTerm);
    }, 500); // 500ms debounce delay

    // Cleanup function - runs before next effect or unmount
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm]);

  /**
   * SEARCH FUNCTION
   * Simulates API call to backend
   * Real example: fetch('/api/users/search?q=' + searchTerm)
   */
  const performSearch = (term) => {
    // Simulate network delay
    setTimeout(() => {
      // Increment API call counter (for demo purposes)
      setApiCallCount((prev) => prev + 1);

      // Filter users based on search term
      const filtered = allUsers.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.role.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
      );

      setResults(filtered);
      setLoading(false);

      console.log(`API Call #${apiCallCount + 1}: Searching for "${term}"`);
    }, 300); // Simulate network delay
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setApiCallCount(0);
  };

  return (
    <div className="mern-problem">
      <section className="problem-section">
        <h3>Problem Statement</h3>
        <div className="problem-description">
          <p>
            Build an optimized search feature with debouncing to prevent excessive API calls
            while typing.
          </p>
          <div className="requirements-box">
            <strong>Requirements:</strong>
            <ul>
              <li>✓ Search filters data in real-time</li>
              <li>✓ Debounce API calls (300-500ms delay)</li>
              <li>✓ Show loading state while searching</li>
              <li>✓ Display result count</li>
              <li>✓ Handle empty state</li>
              <li>✓ Performance optimization (minimize API calls)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Live Demo - Try It</h3>

        {/* Search Box */}
        <div className="search-container">
          <div className="search-input-group">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by name, role, or email..."
              className="search-input"
              autoFocus
            />
            {searchTerm && (
              <button className="btn btn-delete" onClick={handleClearSearch}>
                ✕ Clear
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="search-stats">
            <p>
              <strong>API Calls Made:</strong> {apiCallCount}
              <span className="help-text">
                (Without debounce, this would be {searchTerm.length} for "{searchTerm}")
              </span>
            </p>
            <p>
              <strong>Results:</strong> {results.length} found
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && searchTerm && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Searching...</p>
          </div>
        )}

        {/* Results */}
        {!loading && searchTerm && (
          <>
            {results.length === 0 ? (
              <div className="empty-results">
                <p>No results found for "{searchTerm}"</p>
                <p>Try searching for popular names like "Alice", "Bob", or roles like "Developer"</p>
              </div>
            ) : (
              <div className="search-results">
                {results.map((user) => (
                  <div key={user.id} className="result-item">
                    <div className="result-avatar">
                      {user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="result-content">
                      <h4>{user.name}</h4>
                      <p className="result-role">{user.role}</p>
                      <p className="result-email">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Initial State */}
        {!searchTerm && (
          <div className="initial-state">
            <p>Start typing to search...</p>
            <p className="tip">💡 Type character by character to see how debouncing works!</p>
          </div>
        )}
      </section>

      <section className="problem-section">
        <h3>Implementation Code</h3>
        <div className="code-box">
          <pre>{`
// DEBOUNCED SEARCH WITH useEffect & useRef
const [searchTerm, setSearchTerm] = useState('');
const [results, setResults] = useState([]);
const debounceTimer = useRef(null);

useEffect(() => {
  // Clear previous timer to reset debounce
  if (debounceTimer.current) {
    clearTimeout(debounceTimer.current);
  }

  // If empty, don't search
  if (!searchTerm.trim()) {
    setResults([]);
    return;
  }

  // Set new timer - wait 500ms after user stops typing
  debounceTimer.current = setTimeout(() => {
    performSearch(searchTerm);
  }, 500); // DEBOUNCE DELAY

  // Cleanup: clear timer if component unmounts or effect reruns
  return () => clearTimeout(debounceTimer.current);
}, [searchTerm]);

// Async search function
const performSearch = async (term) => {
  try {
    // In real app, call backend API
    const response = await fetch(\`/api/search?q=\${term}\`);
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error('Search failed:', error);
  }
};

// COMPARISON: WITHOUT DEBOUNCE
// Typing "john" = 4 separate API calls
// 1. "j" → API call #1
// 2. "jo" → API call #2
// 3. "joh" → API call #3
// 4. "john" → API call #4

// WITH DEBOUNCE (500ms)
// Typing "john" = 1 API call (after 500ms of no typing)
// User types "j", "o", "h", "n"
// Timer resets each time
// Finally executes only once for final "john"

// DEBOUNCE DELAY GUIDELINES:
// 300ms  → Fast-moving apps, feels responsive
// 500ms  → Standard choice, good balance
// 1000ms → Slow APIs, heavy computations
          `}</pre>
        </div>
      </section>

      <section className="problem-section">
        <h3>Debounce vs Throttle</h3>
        <div className="concepts">
          <div className="concept">
            <h4>Debounce</h4>
            <p>
              Execute function ONLY after user stops doing an action for X milliseconds.
              Great for: search, auto-save, form validation.
            </p>
            <code>300-500ms delay after last keystroke</code>
          </div>
          <div className="concept">
            <h4>Throttle</h4>
            <p>
              Execute function at most once every X milliseconds, even if action continues.
              Great for: scroll events, window resize, mouse movement.
            </p>
            <code>At most once per 300ms interval</code>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Key Concepts</h3>
        <div className="concepts">
          <div className="concept">
            <h4>useRef Hook</h4>
            <p>Store timeout ID without causing re-renders. Don't need to track in state.</p>
          </div>
          <div className="concept">
            <h4>setTimeout & clearTimeout</h4>
            <p>
              Set timer on each keystroke, clear previous timer. Only executes when user
              stops typing.
            </p>
          </div>
          <div className="concept">
            <h4>useEffect Cleanup</h4>
            <p>Return cleanup function to clear timer before component unmounts or effect reruns.</p>
          </div>
          <div className="concept">
            <h4>Performance Optimization</h4>
            <p>
              Reduces API calls by 80-90%. Saves bandwidth, reduces server load, improves UX.
            </p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Interview Tips</h3>
        <ul className="talking-points">
          <li>Explain debouncing and why it's important for search</li>
          <li>Show the difference in API call count (with vs without debounce)</li>
          <li>Discuss useRef for storing timer ID without re-renders</li>
          <li>Mention useEffect cleanup function importance</li>
          <li>Explain debounce delay selection (300-500ms is standard)</li>
          <li>Compare with throttling and when to use each</li>
          <li>Mention React Query hooks for async operations</li>
        </ul>
      </section>

      <section className="problem-section">
        <h3>Real-World Examples</h3>
        <ul>
          <li>🔍 Google Search - Auto-suggest with debounce</li>
          <li>🛒 Amazon - Product search suggestions</li>
          <li>💾 Auto-save - Debounced saving while typing</li>
          <li>📍 Maps - Location autocomplete</li>
          <li>👤 LinkedIn - Profile search</li>
        </ul>
      </section>
    </div>
  );
}

export default SearchFilter;
