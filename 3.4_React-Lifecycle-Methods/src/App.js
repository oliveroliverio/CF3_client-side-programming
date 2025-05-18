import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';

function App() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="App">
      <h1>React Lifecycle Methods Exercise</h1>
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
  );
}

export default App;
