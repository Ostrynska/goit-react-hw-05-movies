import axios from 'axios';

const API_KEY = 'd20de05767e33e4f2fb018551512ab87';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  api_key: `${API_KEY}`,
};

// Получение полной информации о трендах
export const getTrending = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day`);
    console.log('DATA: ', data);
    return data;
  } catch (error) {
    console.error('Smth went wrong');
  }
};
