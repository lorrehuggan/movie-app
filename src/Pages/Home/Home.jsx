import React, { useState } from 'react';

//Components
import Row from '../../Components/MovieRow/Row';
import request from '../../Utils/request';
import Banner from '../../Components/Banner/Banner';
import SideBarRight from '../../Components/SideBarRight/SideBarRight';
import SideBarLeft from '../../Components/SideBarLeft/SideBarLeft';
import Nav from '../../Components/Nav/Nav';

//Styles
import { Break } from './Home.styles';

function Home() {
  return (
    <section className="body">
      <Nav />
      <Break />
      <SideBarRight
        fetchUrl={request.fetchTrending}
        fetchQuery={request.fetchQuerySearch}
      />

      <SideBarLeft />

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
    </section>
  );
}

export default Home;
