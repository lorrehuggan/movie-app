import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import request from './Utils/request';

import Home from './Pages/Home';
import Nav from './Components/Nav';
import TVSeries from './Pages/TvSeries';
import TvSeries from './Pages/TvSeries';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLog = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Router>
            <Nav log={setIsLoggedIn} />
            <Home userLogin={setIsLoggedIn} />
            <Switch>
              <Route path="/" component={Home}></Route>
              <Route path="/tv" component={TvSeries}></Route>
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
