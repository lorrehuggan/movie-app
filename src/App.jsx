import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider } from './Context/AuthContext';
import request from './Utils/request';

import Home from './Pages/Home';
import Nav from './Components/Nav';
import TvSeries from './Pages/TvSeries';
import Show from './Pages/Show';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/home" component={Home} />
              <Route path="/tv" component={TvSeries} />
              {/* :id = variable path */}
              <Route path="/show/:id" component={Show} />
            </Switch>
          </Router>
        </>
      </div>
    </AuthProvider>
  );
}

export default App;
