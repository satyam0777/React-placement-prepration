import React, { useState } from 'react';
import '../styles/MERNProblems.css';
import TodoApp from './mern-problems/TodoApp';
import PaginatedTable from './mern-problems/PaginatedTable';
import FormValidation from './mern-problems/FormValidation';
import ShoppingCart from './mern-problems/ShoppingCart';
import SearchFilter from './mern-problems/SearchFilter';

/**
 * MERN STACK MACHINE ROUND PROBLEMS
 * ==================================
 * Real-world full-stack coding problems asked in 4-15 LPA interviews
 * 
 * FOCUS AREAS:
 * 1. React State Management & Hooks
 * 2. Form Handling & Validation
 * 3. API Integration (Fetch/Axios)
 * 4. Performance Optimization
 * 5. Component Architecture
 * 6. Data Pagination & Filtering
 * 7. Real-time Updates
 * 8. Error Handling
 * 
 * MERN STACK COVERAGE:
 * - Frontend: React, Hooks, Context/Redux
 * - Backend: Express, Node.js
 * - Database: MongoDB
 * - Real scenarios: Authentication, CRUD, RESTful APIs
 */

function MERNProblems() {
  const [selectedProblem, setSelectedProblem] = useState('todoApp');

  const problems = [
    {
      id: 'todoApp',
      name: 'Todo App with Local Storage',
      difficulty: 'Easy',
      category: 'React Fundamentals',
      concepts: ['useState', 'useEffect', 'localStorage', 'CRUD'],
      component: TodoApp,
    },
    {
      id: 'pagination',
      name: 'Paginated Table with API',
      difficulty: 'Medium',
      category: 'Data Handling',
      concepts: ['API calls', 'State Management', 'Pagination', 'Sorting'],
      component: PaginatedTable,
    },
    {
      id: 'formValidation',
      name: 'Form Validation & Error Handling',
      difficulty: 'Medium',
      category: 'Forms & Validation',
      concepts: ['Form handling', 'Validation', 'Error states', 'useReducer'],
      component: FormValidation,
    },
    {
      id: 'shoppingCart',
      name: 'Shopping Cart (Context API)',
      difficulty: 'Medium',
      category: 'State Management',
      concepts: ['Context API', 'useContext', 'useReducer', 'Persistence'],
      component: ShoppingCart,
    },
    {
      id: 'searchFilter',
      name: 'Search & Filter with Debounce',
      difficulty: 'Medium',
      category: 'Performance',
      concepts: ['Debouncing', 'Search', 'Filtering', 'Performance'],
      component: SearchFilter,
    },
  ];

  const CurrentProblem = problems.find(
    (p) => p.id === selectedProblem
  )?.component;

  const currentProblemData = problems.find(
    (p) => p.id === selectedProblem
  );

  return (
    <div className="mern-problems-container">
      <div className="mern-header">
        <h1>🚀 MERN Stack Machine Round Problems</h1>
        <p className="subtitle">
          Practical full-stack problems commonly asked in 4-15 LPA interviews
        </p>
      </div>

      <div className="mern-layout">
        {/* Sidebar */}
        <aside className="mern-sidebar">
          <h3>Practice Problems</h3>
          <div className="mern-problem-list">
            {problems.map((problem) => (
              <button
                key={problem.id}
                className={`mern-problem-item ${
                  selectedProblem === problem.id ? 'active' : ''
                }`}
                onClick={() => setSelectedProblem(problem.id)}
              >
                <div className="mern-problem-name">{problem.name}</div>
                <div className="mern-problem-meta">
                  <span className={`mern-difficulty ${problem.difficulty.toLowerCase()}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <div className="mern-concepts">
                  {problem.concepts.map((c) => (
                    <span key={c} className="mern-concept-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="mern-content">
          <div className="mern-problem-info">
            {currentProblemData && (
              <>
                <h2>{currentProblemData.name}</h2>
                <div className="mern-info-tags">
                  <span className={`mern-difficulty-large ${currentProblemData.difficulty.toLowerCase()}`}>
                    {currentProblemData.difficulty}
                  </span>
                  <span className="mern-category">{currentProblemData.category}</span>
                </div>
              </>
            )}
          </div>

          {CurrentProblem && <CurrentProblem />}
        </main>
      </div>
    </div>
  );
}

export default MERNProblems;
