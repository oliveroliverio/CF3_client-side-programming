import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';
import BookList from './BookList';

function App() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="App">
      <h1>React Lifecycle Methods Exercise</h1>

      {/* Timer Components */}
      <div className="timer-section">
        <h2>Timer Examples</h2>
        <button onClick={() => setShowComponents(!showComponents)}>
          {showComponents ? 'Hide Components' : 'Show Components'}
        </button>

        {showComponents && (
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div>
              <h3>Class Component Example:</h3>
              <ClassComponent name="Student" />
            </div>
            <div>
              <h3>Hook Component Example:</h3>
              <HookComponent name="Student" />
            </div>
          </div>
        )}
      </div>

      {/* API Data Fetching Example */}
      <div className="api-section" style={{ marginTop: '40px' }}>
        <h2>API Data Fetching Example</h2>
        <BookList />
      </div>
    </div>
  );
}

export default App;
