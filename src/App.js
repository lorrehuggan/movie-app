import './App.css';
import request from './Utils/request';
import SideBarRight from './Components/SideBarRight';
import SideBarLeft from './Components/SideBarLeft';
import Nav from './Components/Nav';
import Body from './Compounds/Body';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBarRight fetchUrl={request.fetchTrending} />
      <SideBarLeft />
      <div className="app__container">
        <Body />
      </div>
    </div>
  );
}

export default App;
