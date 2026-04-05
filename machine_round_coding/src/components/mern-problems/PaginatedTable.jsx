import React, { useState, useEffect } from 'react';
import '../../styles/MERNProblemDetail.css';

/**
 * PROBLEM: PAGINATED TABLE WITH API
 * ==================================
 * PROBLEM STATEMENT:
 * Build a table component that:
 * 1. Fetches data from an API
 * 2. Displays data in paginated format
 * 3. Has sorting capability
 * 4. Shows loading/error states
 * 5. Handles API errors gracefully
 * 
 * CONCEPTS COVERED:
 * - Fetch API / Axios for HTTP requests
 * - useEffect for data fetching
 * - Loading and error states
 * - Pagination logic
 * - Sorting data
 * - Conditional rendering
 * 
 * BACKEND REQUIREMENT:
 * API endpoint: GET /api/users?page=1&limit=10
 * Response: { data: [], total: 100, page: 1, limit: 10 }
 * 
 * MERN STACK INTEGRATION:
 * - Express route handlers
 * - MongoDB queries with pagination
 * - Response formatting
 * 
 * INTERVIEW TIPS:
 * - Discuss pagination strategies
 * - Explain API call optimization
 * - Handle network failures
 * - Show UX improvements (loading skeletons, error messages)
 */

function PaginatedTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('name'); // sort field
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc

  const itemsPerPage = 10;

  // Simulated data (in real app, comes from API)
  const mockUsers = Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    department: ['Engineering', 'Sales', 'Marketing', 'HR'][Math.floor(Math.random() * 4)],
    salary: Math.floor(Math.random() * 100000) + 30000,
    joinDate: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
  }));

  // Fetch data from API (simulated)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Sort data
        const sortedData = [...mockUsers].sort((a, b) => {
          const aVal = a[sortBy];
          const bVal = b[sortBy];
          
          if (sortOrder === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
          } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
          }
        });

        // Calculate pagination
        const total = sortedData.length;
        const pages = Math.ceil(total / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

        setData(paginatedData);
        setTotalPages(pages);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    setCurrentPage(1); // Reset to first page when sorting
  };

  return (
    <div className="mern-problem">
      <section className="problem-section">
        <h3>Problem Statement</h3>
        <div className="problem-description">
          <p>
            Build a paginated table that fetches user data from an API, with sorting
            and loading states.
          </p>
          <div className="requirements-box">
            <strong>Requirements:</strong>
            <ul>
              <li>✓ Fetch data from API on component mount</li>
              <li>✓ Display data in table format</li>
              <li>✓ Implement pagination (previous/next/page numbers)</li>
              <li>✓ Add sorting by column (ASC/DESC)</li>
              <li>✓ Show loading state while fetching</li>
              <li>✓ Handle and display errors</li>
              <li>✓ Show total records and current page info</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Live Demo - Try It</h3>

        {/* Info Bar */}
        <div className="info-bar">
          <p>
            Page {currentPage} of {totalPages} | Total Records: {mockUsers.length}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <p>⚠️ {error}</p>
            <button className="btn btn-primary" onClick={() => setCurrentPage(1)}>
              Retry
            </button>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('name')} className="sortable">
                      Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('email')} className="sortable">
                      Email {sortBy === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('department')} className="sortable">
                      Department {sortBy === 'department' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('salary')} className="sortable">
                      Salary {sortBy === 'salary' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th onClick={() => handleSort('joinDate')} className="sortable">
                      Join Date {sortBy === 'joinDate' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.department}</td>
                      <td>${user.salary.toLocaleString()}</td>
                      <td>{user.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="page-numbers">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                  if (page <= totalPages) {
                    return (
                      <button
                        key={page}
                        className={`page-btn ${page === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                className="btn btn-secondary"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </section>

      <section className="problem-section">
        <h3>Backend API Implementation (Express + MongoDB)</h3>
        <div className="code-box">
          <pre>{`
// EXPRESS ROUTE
app.get('/api/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sort = req.query.sort || 'name';
    const order = req.query.order === 'desc' ? -1 : 1;

    // Calculate skip
    const skip = (page - 1) * limit;

    // Build sort object
    const sortObj = { [sort]: order };

    // Query with pagination & sorting
    const users = await User.find()
      .sort(sortObj)
      .skip(skip)
      .limit(limit);

    // Get total count
    const total = await User.countDocuments();

    res.json({
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// FRONTEND FETCH
const fetchUsers = async () => {
  setLoading(true);
  try {
    const response = await fetch(
      \`/api/users?page=\${currentPage}&limit=10&sort=\${sortBy}&order=\${sortOrder}\`
    );
    
    if (!response.ok) throw new Error('API Error');
    
    const result = await response.json();
    setData(result.data);
    setTotalPages(result.pagination.pages);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
          `}</pre>
        </div>
      </section>

      <section className="problem-section">
        <h3>Key Concepts</h3>
        <div className="concepts">
          <div className="concept">
            <h4>Pagination Logic</h4>
            <p>
              Skip = (currentPage - 1) * itemsPerPage | Limit = itemsPerPage
            </p>
          </div>
          <div className="concept">
            <h4>Async/Await Pattern</h4>
            <p>Handle API calls with proper error handling and loading states.</p>
          </div>
          <div className="concept">
            <h4>State Management</h4>
            <p>Manage data, loading, error states, and pagination separately.</p>
          </div>
          <div className="concept">
            <h4>Dynamic Sorting</h4>
            <p>Track sort field and order, rebuild query when they change.</p>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <h3>Interview Tips</h3>
        <ul className="talking-points">
          <li>Explain pagination vs infinite scroll trade-offs</li>
          <li>Discuss database indexing for better performance</li>
          <li>Show error boundary patterns</li>
          <li>Mention caching strategies (Redux, React Query)</li>
          <li>Discuss lazy loading vs eager loading</li>
        </ul>
      </section>
    </div>
  );
}

export default PaginatedTable;
