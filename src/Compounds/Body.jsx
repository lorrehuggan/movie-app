import React from 'react';
import Row from '../Components/Row';
import request from '../Utils/request';
import Banner from '../Components/Banner';
import './Body.scss';

function Body() {
  return (
    <section className="body">
      <Banner />
      <Row
        isMovieRow={true}
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      <Row
        isMovieRow={true}
        isLargeRow={true}
        title="Action"
        fetchUrl={request.fetchAction}
      />
      <Row
        isMovieRow={false}
        isLargeRow={true}
        title="Comedy"
        fetchUrl={request.fetchComedy}
      />
      <Row
        isMovieRow={false}
        isLargeRow={true}
        title="Sci-Fi"
        fetchUrl={request.fetchSciFi}
      />
      <Row
        isMovieRow={false}
        isLargeRow={true}
        title="Documentary"
        fetchUrl={request.fetchDocumentary}
      />

      {/* <Row title="Action" fetchUrl={request.fetchAction} />
      <Row title="Comedy" fetchUrl={request.fetchComedy} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentary} />
      <Row title="Science Fiction" fetchUrl={request.fetchSciFi} /> */}
    </section>
  );
}

export default Body;
