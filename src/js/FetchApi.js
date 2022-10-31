import axios from 'axios';

const API_KEY = 'd9d1e4a74b16060862fb47c08a2dac20';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class FetchFilms {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  /////Тренди
  async getTrendFilms() {
   
    
      const { data } = await axios.get(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}&adult=false&page=${this.page}`
      );
      return data;
   
  }
  /////пошук фильма
  async getFilmsByName() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      query: this.searchQuery,
      language: 'en-US',
      page: this.page,
      include_adult: false, /// контент для дорослих и тд
    });
    const { data } = await axios.get(`${BASE_URL}search/movie?${searchParams}&page=${this.page}`);
    return data;
  }
  ////Посилання на документацію для запиту повної інформації про кінофільм для сторінки кінофільму:
  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }
  ////Посилання на документацію для запиту повної інформації про можливий трейлер на YouTube:
  async getFilmVideo(id) {
    try {
      const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }
}
