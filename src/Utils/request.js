const API_KEY = '50bd49490c949f378379634df53bce49';

const request = {
  fetchTrending: `3/trending/all/day?api_key=${API_KEY}`,
  fetchAction: `3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&with_genres=28`,
  fetchComedy: `3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&with_genres=35`,
  fetchDocumentary: `3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=2&with_genres=99`,
  fetchSciFi: `3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&with_genres=878`,
  fetchPopularPerson: `3/person/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchQuerySearch: `3/search/movie?api_key=${API_KEY}&page=1`,
};

export default request;
