import React from 'react';
import Row from '../Components/Row';
import request from '../Utils/request';
import Banner from '../Components/Banner';
import SideBarRight from '../Compounds/SideBarRight';
import SideBarLeft from '../Compounds/SideBarLeft';

function TvSeries() {
  return (
    <section className="body">
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
    </section>
  );
}

export default TvSeries;
