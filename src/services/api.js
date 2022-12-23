import axios from 'axios';

export const API_KEY = 'd20de05767e33e4f2fb018551512ab87';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  api_key: `${API_KEY}`,
};

// Trending
export const getTrending = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day`);
    // console.log('DATA trending: ', data);
    return data;
  } catch (error) {
    console.error('Smth went wrong');
  }
};

// Search
export const getSearch = async query => {
  try {
    const { data } = await axios.get(`search/company?query=${query}`);
    console.log('DATA search: ', data);
    return data;
  } catch (error) {
    console.error('Smth went wrong');
  }
};

// Details
export const getDetails = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Smth went wrong');
  }
};

// Cast
export const getCast = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.error('Smth went wrong');
  }
};

// Reviews
export const getReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    console.error('Smth went wrong');
  }
};
