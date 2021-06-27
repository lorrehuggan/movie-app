import { useState } from 'react';
import './App.css';
import Row from './Components/Row';
import request from './Utils/request';
import Banner from './Components/Banner';
import SideBar from './Components/SideBar';
import Nav from './Components/Nav';

function App() {
  const [leftMenu, setLeftMenu] = useState(true);

  const setMenuRight = () => {
    setLeftMenu(false);
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* <SideBar leftMenu={leftMenu} />
      <SideBar leftMenu={!leftMenu} /> */}

      <Row
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      {/*
      <Row title="Action" fetchUrl={request.fetchAction} />
      <Row title="Comedy" fetchUrl={request.fetchComedy} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentary} />
      <Row title="Science Fiction" fetchUrl={request.fetchSciFi} /> */}
    </div>
  );
}

export default App;
