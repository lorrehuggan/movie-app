import React from 'react';
import Row from './Components/Row';
import request from './Utils/request';
import Banner from './Components/Banner';

function Body() {
  return (
    <>
      <Banner />
      <Row
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      <Row
        isLargeRow={true}
        title="Trending Now"
        fetchUrl={request.fetchTrending}
      />
      {/* <Row title="Action" fetchUrl={request.fetchAction} />
      <Row title="Comedy" fetchUrl={request.fetchComedy} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentary} />
      <Row title="Science Fiction" fetchUrl={request.fetchSciFi} /> */}
    </>
  );
}

export default Body;
