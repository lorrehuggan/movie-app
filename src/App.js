import './App.css';
import Row from './Components/Row';
import request from './Utils/request';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      <Row title="Action" fetchUrl={request.fetchAction} />
      <Row title="Comedy" fetchUrl={request.fetchComedy} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentary} />
      <Row title="Science Fiction" fetchUrl={request.fetchSciFi} />
    </div>
  );
}

export default App;
