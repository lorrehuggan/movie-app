import React, { useState } from 'react';
import Row from '../Components/Row';
import request from '../Utils/request';
import Banner from '../Components/Banner';
import './Body.scss';
import SideBarRight from '../Components/SideBarRight';
import SideBarLeft from '../Components/SideBarLeft';
import Nav from '../Components/Nav';

function Body({ userLogin }) {
  const userLoginHandler = () => {
    userLogin(false);
  };
  return (
    <section className="body">
      <Nav log={userLogin} />
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
      <button onClick={userLoginHandler}>log out </button>
    </section>
  );
}

export default Body;
