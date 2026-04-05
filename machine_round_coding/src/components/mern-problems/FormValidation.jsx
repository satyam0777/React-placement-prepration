import React, { useState, useReducer } from 'react';
import '../../styles/MERNProblemDetail.css';

/**
 * PROBLEM: FORM VALIDATION & ERROR HANDLING
 * =========================================
 * PROBLEM STATEMENT:
 * Build a comprehensive form with:
 * 1. Real-time validation
 * 2. Error messages per field
 * 3. Submit state management
 * 4. API submission simulation
 * 5. Success/error feedback
 * 
 * CONCEPTS COVERED:
 * - Form state management (useState or useReducer)
 * - Field validation (email, password, phone, etc.)
 * - Conditional error rendering
 * - Loading states during submission
 * - Form reset after submission
 * - Touch/blur states for better UX
 * 
 * VALIDATION RULES:
 * - Email: Valid email format
 * - Password: Min 8 chars, 1 uppercase, 1 number
 * - Phone: Valid format
 * - Age: 18-65
 * 
 * REAL-WORLD SCENARIOS:
 * - User registration forms
 * - Profile update forms
 * - Checkout forms
 * - Contact forms
 */

// Form reducer for complex state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        touched: {
          ...state.touched,
          [action.field]: true,
        },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload };
    case 'RESET':
      return {
        formData: { name: '', email: '', password: '', age: '', phone: '' },
        errors: {},
        touched: {},
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

function FormValidation() {
  const initialState = {
    formData: { name: '', email: '', password: '', age: '', phone: '' },
    errors: {},
    touched: {},
    loading: false,
    success: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // Validation function
  const validateForm = (data) => {
    const errors = {};

    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      errors.email = 'Enter a valid email address';
    }

    // Password validation
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(data.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[0-9]/.test(data.password)) {
      errors.password = 'Password must contain at least one number';
    }

    // Age validation
    const age = parseInt(data.age);
    if (!data.age) {
      errors.age = 'Age is required';
    } else if (isNaN(age) || age < 18 || age > 65) {
      errors.age = 'Age must be between 18 and 65';
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!data.phone) {
      errors.phone = 'Phone is required';
    } else if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm(state.formData);
    dispatch({ type: 'SET_ERRORS', payload: errors });

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Simulate API call
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In real app, send data to backend
      console.log('Form submitted:', state.formData);

      dispatch({ type: 'SET_SUCCESS', payload: true });
      dispatch({ type: 'RESET' });

      // Hide success message after 3 seconds
      setTimeout(() => {
        dispatch({ type: 'SET_SUCCESS', payload: false });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const isFieldTouched = (field) => state.touched[field];
  const hasError = (field) => state.errors[field];

  return (
    <div className="mern-problem">
      <section className="problem-section">
        <h3>Problem Statement</h3>
        <div className="problem-description">
          <p>
            Build a form with comprehensive validation, real-time error messages, and
            proper state management.
          </p>
          <div className="requirements-box">
            <strong>Requirements:</strong>
            <ul>
              <li>✓ Validate all fields in real-time</li>
              <li>✓ Show error messages only for touched fields</li>
              <li>✓ Prevent submission with errors</li>
              <li>✓ Show loading state during submission</li>
              <li>✓ Display success message after submission</li>
              <li>✓ Reset form on successful submission</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Live Demo - Try It</h3>

        {/* Success Message */}
        {state.success && (
          <div className="success-message">
            ✓ Form submitted successfully! Check console for data.
          </div>
        )}

        {/* Form */}
        <form className="validation-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={state.formData.name}
              onChange={handleChange}
              onBlur={() => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: state.formData.name })}
              className={`form-input ${hasError('name') && isFieldTouched('name') ? 'error' : ''}`}
              placeholder="John Doe"
            />
            {hasError('name') && isFieldTouched('name') && (
              <span className="error-message">⚠️ {state.errors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={state.formData.email}
              onChange={handleChange}
              className={`form-input ${hasError('email') && isFieldTouched('email') ? 'error' : ''}`}
              placeholder="john@example.com"
            />
            {hasError('email') && isFieldTouched('email') && (
              <span className="error-message">⚠️ {state.errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={state.formData.password}
              onChange={handleChange}
              className={`form-input ${hasError('password') && isFieldTouched('password') ? 'error' : ''}`}
              placeholder="Min 8 chars, 1 upper, 1 number"
            />
            {hasError('password') && isFieldTouched('password') && (
              <span className="error-message">⚠️ {state.errors.password}</span>
            )}
            <small>Must have: 8+ chars, 1 uppercase, 1 number</small>
          </div>

          {/* Age Field */}
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              value={state.formData.age}
              onChange={handleChange}
              className={`form-input ${hasError('age') && isFieldTouched('age') ? 'error' : ''}`}
              placeholder="18-65"
            />
            {hasError('age') && isFieldTouched('age') && (
              <span className="error-message">⚠️ {state.errors.age}</span>
            )}
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={state.formData.phone}
              onChange={handleChange}
              className={`form-input ${hasError('phone') && isFieldTouched('phone') ? 'error' : ''}`}
              placeholder="1234567890"
            />
            {hasError('phone') && isFieldTouched('phone') && (
              <span className="error-message">⚠️ {state.errors.phone}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={state.loading}
          >
            {state.loading ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
      </section>

      <section className="problem-section">
        <h3>Implementation Code</h3>
        <div className="code-box">
          <pre>{`
// USEreducer FOR COMPLEX FORM STATE
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
        touched: { ...state.touched, [action.field]: true },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'RESET':
      return initialState;
  }
};

// VALIDATION FUNCTION
const validateForm = (data) => {
  const errors = {};
  
  // Email regex
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  
  // Password strength
  if (data.password.length < 8) {
    errors.password = 'Must be 8+ characters';
  }
  if (!/[A-Z]/.test(data.password)) {
    errors.password = 'Must include uppercase letter';
  }
  
  return errors;
};

// FORM SUBMISSION
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const errors = validateForm(state.formData);
  if (Object.keys(errors).length > 0) {
    dispatch({ type: 'SET_ERRORS', payload: errors });
    return;
  }
  
  // Send to backend
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state.formData),
  });
  
  if (response.ok) {
    dispatch({ type: 'RESET' });
  }
};
          `}</pre>
        </div>
      </section>

      <section className="problem-section">
        <h3>Key Concepts Explained</h3>
        <div className="concepts">
          <div className="concept">
            <h4>useReducer Hook</h4>
            <p>Better than useState for complex forms with multiple related states.</p>
          </div>
          <div className="concept">
            <h4>Field Validation</h4>
            <p>Validate on submit AND on change for real-time feedback.</p>
          </div>
          <div className="concept">
            <h4>Touched State</h4>
            <p>Only show errors for fields user has interacted with (better UX).</p>
          </div>
          <div className="concept">
            <h4>Regex Patterns</h4>
            <p>Email, password strength, phone format validation with regex.</p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Interview Tips</h3>
        <ul className="talking-points">
          <li>Explain why useReducer is better for forms than useState</li>
          <li>Show validation regex patterns and explain them</li>
          <li>Discuss server-side validation importance</li>
          <li>Mention accessibility (form labels, error roles)</li>
          <li>Show how to handle async validation (email uniqueness check)</li>
        </ul>
      </section>
    </div>
  );
}

export default FormValidation;
