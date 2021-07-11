import React from 'react';
import Row from '../Components/Row';
import request from '../Utils/request';
import Banner from '../Components/Banner';
import SideBarRight from '../Compounds/SideBarRight';
import SideBarLeft from '../Compounds/SideBarLeft';
import Nav from '../Components/Nav';
import './TvSeries.scss';

function TvSeries() {
  return (
    <section className="body">
      <Nav />
      <SideBarRight
        fetchUrl={request.fetchTrending}
        fetchQuery={request.fetchQuerySearch}
      />

      <SideBarLeft />
      <div className="body__container"></div>
      <Row
        isMovieRow={true}
        isLargeRow={true}
        title="Tv Popular"
        fetchUrl={request.fetchTvPopular}
      />
      <Row
        isMovieRow={true}
        isLargeRow={true}
        title="Tv Popular"
        fetchUrl={request.fetchTvPopular2}
      />
    </section>
  );
}

export default TvSeries;
