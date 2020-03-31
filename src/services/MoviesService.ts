import CommonService from './CommonService';
import { Movie } from '../model/MoviesModel/Movie';
import { movieListApi, movieDetailApi } from '../utils'

class MoviesService extends CommonService<Movie> {
  constructor() {
    super();
    this.rootURL = movieListApi;
    this.detailsURL = movieDetailApi;
  }
}

export const moviesService = new MoviesService();