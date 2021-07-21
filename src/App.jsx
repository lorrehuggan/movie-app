import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Auth Provider
import { AuthProvider } from './Context/AuthContext';

//Private Route Helper
import PrivateRoute from './Utils/PrivateRoute';
//Components
import Home from './Pages/Home';
import TvSeries from './Pages/TvSeries';
import Show from './Pages/Show';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

//Global Styles
import { GlobalStyle } from './GlobalStyles/globalStyles';

//ThemeProvider
import { ThemeProvider } from 'styled-components';

import { theme } from './GlobalStyles/theme';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div>
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
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
