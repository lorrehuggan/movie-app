import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import request from './Utils/request';

import Home from './Pages/Home';
import Nav from './Components/Nav';
import TvSeries from './Pages/TvSeries';
import Show from './Pages/Show';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLog = () => {
    setIsLoggedIn(true);
  };
  //:id = variable path
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Router>
            <Nav log={setIsLoggedIn} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/tv" component={TvSeries} />

              <Route path="/show/:id" component={Show} />
            </Switch>
          </Router>
        </>
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
