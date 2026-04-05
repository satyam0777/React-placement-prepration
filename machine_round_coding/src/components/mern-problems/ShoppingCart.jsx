import React, { useState, useContext, createContext, useReducer } from 'react';
import '../../styles/MERNProblemDetail.css';

/**
 * PROBLEM: SHOPPING CART WITH CONTEXT API
 * =======================================
 * PROBLEM STATEMENT:
 * Build a shopping cart system using Context API that:
 * 1. Add/remove items from cart
 * 2. Update item quantities
 * 3. Calculate totals (subtotal, tax, shipping)
 * 4. Persist cart data to localStorage
 * 5. Share cart state across multiple components
 * 
 * CONCEPTS COVERED:
 * - Context API: createContext, useContext
 * - useReducer: For managing complex cart state
 * - localStorage: Persistence
 * - Custom hooks: useCart hook
 * - State lifting and sharing
 * 
 * MERN STACK INTEGRATION:
 * - Backend: Cart endpoint, inventory management
 * - Database: Product inventory, cart sessions
 * - Frontend: Global state management
 * 
 * ALTERNATIVES:
 * - Redux (more complex, larger apps)
 * - Zustand (lightweight alternative)
 * - Recoil (atomic state management)
 * 
 * WHY CONTEXT API:
 * - No extra library needed
 * - Solves prop drilling
 * - Good for small to medium projects
 * - Easier to understand than Redux
 */

// Create Cart Context
const CartContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if item already in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };

    case 'CLEAR_CART':
      return { items: [] };

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
};

// Cart Provider Component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from localStorage on mount
  React.useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

// Main Component
function ShoppingCart() {
  const { state, dispatch } = useCart();
  const [showCart, setShowCart] = useState(true);

  // Mock products
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
    { id: 2, name: 'Phone', price: 599.99, image: '📱' },
    { id: 3, name: 'Headphones', price: 199.99, image: '🎧' },
    { id: 4, name: 'Tablet', price: 399.99, image: '📱' },
  ];

  // Calculate totals
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handleAddItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const handleRemoveItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity },
    });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="mern-problem">
      <section className="problem-section">
        <h3>Problem Statement</h3>
        <div className="problem-description">
          <p>
            Build a shopping cart using Context API with add/remove items, quantity updates,
            and automatic persistence to localStorage.
          </p>
          <div className="requirements-box">
            <strong>Requirements:</strong>
            <ul>
              <li>✓ Add items to cart</li>
              <li>✓ Remove items from cart</li>
              <li>✓ Update item quantities</li>
              <li>✓ Calculate subtotal, tax, shipping</li>
              <li>✓ Persist cart to localStorage</li>
              <li>✓ Share cart state globally using Context API</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Live Demo - Try It</h3>

        <div className="shopping-demo">
          {/* Products List */}
          <div className="products-section">
            <h4>Available Products</h4>
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <h5>{product.name}</h5>
                  <p className="price">${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddItem(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="cart-section">
            <h4>
              Shopping Cart ({state.items.length} items)
              <button
                className="toggle-btn"
                onClick={() => setShowCart(!showCart)}
              >
                {showCart ? '▼' : '▶'}
              </button>
            </h4>

            {showCart && (
              <>
                {state.items.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : (
                  <>
                    <div className="cart-items">
                      {state.items.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div className="item-info">
                            <span className="item-image">{item.image}</span>
                            <div>
                              <p className="item-name">{item.name}</p>
                              <p className="item-price">${item.price}</p>
                            </div>
                          </div>

                          <div className="item-controls">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleUpdateQuantity(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="quantity-input"
                            />
                            <p className="item-subtotal">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              className="btn btn-delete"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="cart-totals">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Tax (10%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Shipping:</span>
                        <span>{shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                      </div>
                      <div className="total-row grand-total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="cart-actions">
                      <button className="btn btn-primary">Checkout</button>
                      <button className="btn btn-secondary" onClick={handleClearCart}>
                        Clear Cart
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Implementation Code</h3>
        <div className="code-box">
          <pre>{`
// CREATE CONTEXT
const CartContext = createContext();

// REDUCER
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };

    default:
      return state;
  }
};

// PROVIDER
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// CUSTOM HOOK
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be in CartProvider');
  return context;
}

// USAGE IN COMPONENT
function MyComponent() {
  const { state, dispatch } = useCart();
  
  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
}
          `}</pre>
        </div>
      </section>

      <section className="problem-section">
        <h3>Key Concepts</h3>
        <div className="concepts">
          <div className="concept">
            <h4>Context API</h4>
            <p>Create global state without Redux. Composed of Provider and useContext hook.</p>
          </div>
          <div className="concept">
            <h4>useReducer Hook</h4>
            <p>Complex state logic with multiple action types. Better than useState for forms/carts.</p>
          </div>
          <div className="concept">
            <h4>Custom Hooks</h4>
            <p>Create useCart hook to encapsulate context logic. Reusable across components.</p>
          </div>
          <div className="concept">
            <h4>localStorage Persistence</h4>
            <p>Save cart state automatically whenever it changes. Load on mount.</p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Interview Tips</h3>
        <ul className="talking-points">
          <li>Explain Context API advantages over prop drilling</li>
          <li>Discuss when to use Context vs Redux vs other state managers</li>
          <li>Show how custom hooks encapsulate context usage</li>
          <li>Mention performance optimization with useMemo if needed</li>
          <li>Discuss persistence strategies (localStorage, IndexedDB, server)</li>
        </ul>
      </section>
    </div>
  );
}

// Wrap component in provider for demo
export default function ShoppingCartWithProvider() {
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  );
}
