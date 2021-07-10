import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import request from './Utils/request';

import Home from './Pages/Home';
import Nav from './Components/Nav';
import TvSeries from './Pages/TvSeries';
import Show from './Pages/Show';
import Login from './Compounds/Login';
import SignUp from './Compounds/SignUp';

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
        <SignUp login={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
