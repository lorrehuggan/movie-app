import './App.css';
import { useState } from 'react';
import request from './Utils/request';

import Body from './Compounds/Body';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLog = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Body userLogin={setIsLoggedIn} />
      ) : (
        <div>
          <h1
            style={{
              color: '#ffffff',
              marginTop: '2rem',
              marginBottom: '1rem',
            }}
          >
            Test Log In
          </h1>
          <button onClick={setLog}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default App;
