import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Providers
import { AuthProvider } from './Context/AuthContext';
import { SideBarContext } from './Context/SideBarContext';

//Private Route Helper
import PrivateRoute from './Utils/PrivateRoute';
//Components
import Home from './Pages/Home/Home';
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
  const [openSideBar, setOpenSideBar] = useState(true);
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div>
          <>
            <Router>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <SideBarContext.Provider
                  value={{ openSideBar, setOpenSideBar }}
                >
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute path="/tv" component={TvSeries} />
                  {/* :id = variable path */}
                  <PrivateRoute path="/show/:id" component={Show} />
                </SideBarContext.Provider>
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
