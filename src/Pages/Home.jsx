import React, { useState } from 'react';
import Row from '../Components/Row';
import request from '../Utils/request';
import Banner from '../Components/Banner/Banner';
import './Home.scss';
import SideBarRight from '../Compounds/SideBarRight';
import SideBarLeft from '../Compounds/SideBarLeft';
import Nav from '../Components/Nav/Nav';

function Home() {
  return (
    <section className="body">
      <Nav />
      <SideBarRight
        fetchUrl={request.fetchTrending}
        fetchQuery={request.fetchQuerySearch}
      />

      {/* <SideBarLeft /> */}

      <Banner />

      {/* <Row
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
      /> */}
    </section>
  );
}

export default Home;
