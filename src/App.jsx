import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Utils/PrivateRoute';
import Home from './Pages/Home';
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
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/tv" component={TvSeries} />
              {/* :id = variable path */}
              <PrivateRoute path="/show/:id" component={Show} />
            </Switch>
          </Router>
        </>
      </div>
    </AuthProvider>
  );
}

export default App;
