import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = '723c7d7f9c7f22bad45277eeff7de178';
// 502356 840326 1008005

async function getTrendingMovies() {
  try {
    // const response = await axios.get(
    //   `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    // );
    // return response.data;
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    // console.log(data);
    return data;  
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCasts(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovies(searchQuery) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieCasts,
  getMovieReviews,
  getSearchMovies,  
};