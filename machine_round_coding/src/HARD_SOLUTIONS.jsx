import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================
// HARD PROBLEMS - COMPLETE SOLUTIONS
// ============================================

// ============================================
// HARD 1: INFINITE SCROLL / LAZY LOADING
// ============================================
export function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);

  // Simulate API call
  const fetchMoreItems = useCallback(() => {
    if (loadingRef.current || !hasMore) return;
    
    loadingRef.current = true;
    setLoading(true);

    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => ({
        id: items.length + i,
        text: `Item ${items.length + i + 1}`
      }));
      
      setItems(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
      setLoading(false);
      loadingRef.current = false;

      // Stop after 10 pages
      if (page >= 10) setHasMore(false);
    }, 800);
  }, [items.length, page, hasMore]);

  // Initial load
  useEffect(() => {
    fetchMoreItems();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
        if (!loading && hasMore) fetchMoreItems();
      }
    };

    const debounceScroll = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);

    return () => {
      clearTimeout(debounceScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore, fetchMoreItems]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Infinite Scroll Example</h2>
      <p>Scroll down to load more items...</p>
      
      <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {items.map(item => (
          <div key={item.id} style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            backgroundColor: '#f9f9f9'
          }}>
            {item.text}
          </div>
        ))}
        
        {loading && (
          <div style={{ padding: '20px', textAlign: 'center' }}>⏳ Loading...</div>
        )}
        
        {!hasMore && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            ✓ No more items
          </div>
        )}
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Loaded: {items.length} items
      </p>
    </div>
  );
}

// ============================================
// HARD 2: MULTI-SELECT WITH TAGS
// ============================================
export function MultiSelect() {
  const allItems = [
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js',
    'Gatsby', 'Nuxt', 'Remix', 'Astro', 'SolidJS'
  ];

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');

  const filtered = allItems.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (item) => {
    setSelected(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const removeTag = (item) => {
    setSelected(prev => prev.filter(i => i !== item));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Multi-Select with Tags</h2>

      {/* Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '20px',
        minHeight: '32px',
        paddingBottom: '10px',
        borderBottom: '2px solid #ddd'
      }}>
        {selected.map(item => (
          <span key={item} style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            {item}
            <button
              onClick={() => removeTag(item)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                marginLeft: '8px',
                fontSize: '16px'
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}
      />

      {/* Items List */}
      <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
        {filtered.map(item => (
          <label key={item} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            borderBottom: '1px solid #eee',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => toggleSelect(item)}
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            {item}
          </label>
        ))}
      </div>

      {/* Stats */}
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        Selected: {selected.length} / {allItems.length}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setSelected(filtered)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Select All
        </button>
        <button
          onClick={() => setSelected([])}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

// ============================================
// HARD 3: ACCORDION WITH NESTED ITEMS
// ============================================
export function AccordionComponent() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'React Basics',
      expanded: false,
      items: ['JSX', 'Components', 'Props', 'State']
    },
    {
      id: 2,
      title: 'React Hooks',
      expanded: false,
      items: ['useState', 'useEffect', 'useContext', 'useRef']
    },
    {
      id: 3,
      title: 'Advanced Patterns',
      expanded: false,
      items: ['Custom Hooks', 'Render Props', 'Higher Order Components']
    }
  ]);

  const toggleSection = (id) => {
    setSections(prev =>
      prev.map(section =>
        section.id === id
          ? { ...section, expanded: !section.expanded }
          : { ...section, expanded: false } // Only one open
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Accordion Component</h2>

      {sections.map(section => (
        <div key={section.id} style={{ marginBottom: '10px' }}>
          {/* Header */}
          <button
            onClick={() => toggleSection(section.id)}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {section.title}
            <span>{section.expanded ? '▼' : '▶'}</span>
          </button>

          {/* Content */}
          {section.expanded && (
            <div style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderTop: 'none',
              borderRadius: '0 0 4px 4px',
              padding: '0'
            }}>
              {section.items.map((item, idx) => (
                <div key={idx} style={{
                  padding: '12px 15px',
                  borderBottom: idx < section.items.length - 1 ? '1px solid #eee' : 'none',
                  color: '#666'
                }}>
                  • {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// HARD 4: MODAL / DIALOG COMPONENT
// ============================================
export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Modal Dialog Example</h2>

      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Open Modal
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '90%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: 'slideIn 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Modal Title</h3>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>

            <p>This is modal content. Click outside or the X button to close.</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

// ============================================
// HARD 5: COUNTDOWN TIMER
// ============================================
export function CountdownTimer() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev === 0) {
          if (minutes === 0) {
            setIsRunning(false);
            return 0;
          }
          setMinutes(m => m - 1);
          return 59;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, minutes]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setMinutes(5);
    setSeconds(0);
  };

  const isWarning = minutes === 0 && seconds < 60;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Countdown Timer</h2>

      <div style={{
        fontSize: '72px',
        fontWeight: 'bold',
        margin: '30px 0',
        color: isWarning ? '#dc3545' : '#333',
        fontFamily: 'monospace',
        transition: 'color 0.3s'
      }}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        {!isRunning && !isPaused && (
          <button
            onClick={handleStart}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Start
          </button>
        )}

        {isRunning && (
          <button
            onClick={handlePause}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ffc107',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Pause
          </button>
        )}

        {isPaused && (
          <button
            onClick={handleResume}
            style={{
              padding: '10px 20px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Resume
          </button>
        )}

        <button
          onClick={handleStop}
          disabled={!isRunning && !isPaused}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: (!isRunning && !isPaused) ? 0.5 : 1
          }}
        >
          Stop
        </button>
      </div>

      {isWarning && (
        <div style={{ color: '#dc3545', fontSize: '14px', fontWeight: 'bold' }}>
          ⚠️ Less than 1 minute remaining!
        </div>
      )}
    </div>
  );
}

// ============================================
// HARD 6: IMAGE CAROUSEL
// ============================================
export function ImageCarousel() {
  const images = [
    'https://via.placeholder.com/400x300?text=Image+1',
    'https://via.placeholder.com/400x300?text=Image+2',
    'https://via.placeholder.com/400x300?text=Image+3',
    'https://via.placeholder.com/400x300?text=Image+4',
    'https://via.placeholder.com/400x300?text=Image+5'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Image Carousel</h2>

      {/* Image Container */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '20px'
          }}
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '20px'
          }}
        >
          ❯
        </button>
      </div>

      {/* Dots Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentIndex === index ? '#007bff' : '#ddd',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>

      <div style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// ============================================
// HARD 7: NESTED COMMENTS
// ============================================
export function NestedComments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John',
      text: 'Great article!',
      likes: 5,
      replies: [
        { id: 11, author: 'Jane', text: 'Thanks!', likes: 2, replies: [] }
      ]
    },
    {
      id: 2,
      author: 'Bob',
      text: 'How do you implement this?',
      likes: 3,
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Math.random(),
        author: 'You',
        text: newComment,
        likes: 0,
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const CommentItem = ({ comment, depth = 0 }) => (
    <div style={{
      marginLeft: depth * 20,
      padding: '10px',
      borderLeft: depth > 0 ? '2px solid #ddd' : 'none',
      marginBottom: '10px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{comment.author}</div>
      <div style={{ color: '#666', fontSize: '13px' }}>{comment.text}</div>
      <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
        👍 {comment.likes}
      </div>
      {comment.replies?.map(reply => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Nested Comments</h2>

      {/* Add Comment */}
      <div style={{ marginBottom: '20px' }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            minHeight: '80px',
            marginBottom: '10px',
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={handleAddComment}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '15px' }}>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// HARD 8: SORTABLE TABLE WITH FILTERS
// ============================================
export function SortableTable() {
  const initialData = [
    { id: 1, name: 'React', author: 'Facebook', year: 2013, rating: 9 },
    { id: 2, name: 'Vue', author: 'Evan You', year: 2014, rating: 8 },
    { id: 3, name: 'Angular', author: 'Google', year: 2010, rating: 7 },
    { id: 4, name: 'Svelte', author: 'Rich Harris', year: 2019, rating: 9 },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sorted);
    setSortConfig({ key, direction });
  };

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredData = data.filter(item =>
    Object.keys(filters).every(key =>
      !filters[key] || String(item[key]).toLowerCase().includes(String(filters[key]).toLowerCase())
    )
  );

  const SortIndicator = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return ' ↕️';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Sortable Table with Filters</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{
              padding: '12px',
              textAlign: 'left',
              borderBottom: '2px solid #ddd',
              cursor: 'pointer'
            }} onClick={() => handleSort('name')}>
              Name <SortIndicator columnKey="name" />
            </th>
            <th style={{
              padding: '12px',
              textAlign: 'left',
              borderBottom: '2px solid #ddd',
              cursor: 'pointer'
            }} onClick={() => handleSort('author')}>
              Author <SortIndicator columnKey="author" />
            </th>
            <th style={{
              padding: '12px',
              textAlign: 'left',
              borderBottom: '2px solid #ddd',
              cursor: 'pointer'
            }} onClick={() => handleSort('year')}>
              Year <SortIndicator columnKey="year" />
            </th>
            <th style={{
              padding: '12px',
              textAlign: 'left',
              borderBottom: '2px solid #ddd',
              cursor: 'pointer'
            }} onClick={() => handleSort('rating')}>
              Rating <SortIndicator columnKey="rating" />
            </th>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <input
                type="text"
                placeholder="Filter..."
                value={filters.name || ''}
                onChange={(e) => handleFilter('name', e.target.value)}
                style={{ width: '100%', padding: '5px', fontSize: '12px' }}
              />
            </th>
            <th style={{ padding: '10px' }}>
              <input
                type="text"
                placeholder="Filter..."
                value={filters.author || ''}
                onChange={(e) => handleFilter('author', e.target.value)}
                style={{ width: '100%', padding: '5px', fontSize: '12px' }}
              />
            </th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{row.name}</td>
              <td style={{ padding: '12px' }}>{row.author}</td>
              <td style={{ padding: '12px' }}>{row.year}</td>
              <td style={{ padding: '12px' }}>⭐ {row.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        Showing {filteredData.length} of {data.length} items
      </p>
    </div>
  );
}

// ============================================
// HARD 9: AUTOCOMPLETE / SEARCH DROPDOWN
// ============================================
export function Autocomplete() {
  const allSuggestions = [
    'React', 'React Native', 'React Router',
    'Redux', 'Redux Thunk',
    'JavaScript', 'TypeScript',
    'Node.js', 'Next.js', 'Nest.js'
  ];

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  const handleInput = (value) => {
    setInput(value);
    setActiveIndex(-1);

    // Debounce search
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        setLoading(true);
        setTimeout(() => {
          const filtered = allSuggestions.filter(s =>
            s.toLowerCase().includes(value.toLowerCase())
          );
          setSuggestions(filtered);
          setLoading(false);
        }, 300);
      } else {
        setSuggestions([]);
        setLoading(false);
      }
    }, 300);
  };

  const handleSelect = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      handleSelect(suggestions[activeIndex]);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Autocomplete Search</h2>

      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search (e.g., React)..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />

        {/* Dropdown */}
        {(suggestions.length > 0 || loading) && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
            zIndex: 10,
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {loading && (
              <div style={{ padding: '10px', color: '#666' }}>⏳ Loading...</div>
            )}

            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                onClick={() => handleSelect(suggestion)}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer',
                  backgroundColor: activeIndex === index ? '#f0f0f0' : 'white'
                }}
              >
                {suggestion}
              </div>
            ))}

            {suggestions.length === 0 && !loading && (
              <div style={{ padding: '10px', color: '#999' }}>No results</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// HARD 10: MULTI-STEP WIZARD
// ============================================
export function MultiStepWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: ''
  });

  const steps = [
    { title: 'Personal Info', fields: ['firstName', 'lastName'] },
    { title: 'Contact', fields: ['email'] },
    { title: 'Address', fields: ['address', 'city'] },
    { title: 'Confirmation', fields: [] }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    alert('Form submitted! ' + JSON.stringify(formData));
  };

  const canProceed = steps[currentStep].fields.every(field => formData[field]);

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Multi-Step Wizard</h2>

      {/* Progress Dots */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        {steps.map((step, index) => (
          <div key={index} style {{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: index <= currentStep ? '#007bff' : '#ddd',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              {index + 1}
            </div>
            <div style={{ fontSize: '12px', marginLeft: '5px' }}>{step.title}</div>
            {index < steps.length - 1 && (
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: index < currentStep ? '#007bff' : '#ddd',
                marginLeft: '10px'
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '20px',
        minHeight: '200px'
      }}>
        <h3>{steps[currentStep].title}</h3>

        {currentStep === 0 && (
          <>
            <input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </>
        )}

        {currentStep === 1 && (
          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        )}

        {currentStep === 2 && (
          <>
            <input
              placeholder="Address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <input
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </>
        )}

        {currentStep === 3 && (
          <div>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          style={{
            padding: '10px 20px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            opacity: currentStep === 0 ? 0.5 : 1
          }}
        >
          Previous
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!canProceed}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: canProceed ? 'pointer' : 'not-allowed',
              opacity: canProceed ? 1 : 0.5
            }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

// KEY TAKEAWAYS:
/**
 * HARD 1 - Infinite Scroll:
 * - useCallback for stable function reference
 * - useRef to prevent duplicate requests
 * - Scroll detection at bottom
 * - Loading state management
 * 
 * HARD 2 - Multi-Select:
 * - Array of selected items
 * - includes() to check if selected
 * - filter() to remove item
 * - Search filtering
 * 
 * HARD 3 - Accordion:
 * - Toggle expanded state
 * - Only one open at a time
 * - Conditional rendering
 * - Smooth animations (CSS)
 * 
 * HARD 4 - Modal:
 * - Overlay click to close
 * - Body overflow management
 * - Event bubbling prevention
 * - Focus management
 * 
 * HARD 5 - Timer:
 * - setInterval with useEffect
 * - useRef for interval ID
 * - Cleanup in dependency
 * - Time formatting
 * 
 * HARD 6 - Carousel:
 * - Index state management
 * - Modulo for wrapping
 * - Navigation dots
 * - Smooth transitions
 * 
 * HARD 7 - Comments:
 * - Recursive component
 * - Nested array structure
 * - Reusable component
 * 
 * HARD 8 - Sortable Table:
 * - Complex state (sort, filter)
 * - Array sort method
 * - Multiple filters combined
 * - Column headers clickable
 * 
 * HARD 9 - Autocomplete:
 * - Debouncing input
 * - Keyboard navigation
 * - Loading state
 * - Highlighting matches
 * 
 * HARD 10 - Wizard:
 * - Step-by-step form
 * - Form validation
 * - Progress tracking
 * - Summary view
 * 
 * INTERVIEW TIPS:
 * - Start simple, add complexity
 * - Ask clarifying questions
 * - Show your thinking
 * - Discuss performance
 * - Handle edge cases
 * - Test your code
 */
