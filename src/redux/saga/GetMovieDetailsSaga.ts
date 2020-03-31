import IAction from '../action/IAction';
import { moviesService } from '../../services/MoviesService';
import UtilAction from '../action/UtilAction';
import { put } from 'redux-saga/effects';
import AppAction from '../action/AppAction';

function* getItemDetails(action: IAction<string, any>) {
  try {
    const data = yield moviesService.getMovieDetail(action.payload!);
    yield put({type: AppAction.SHOW_MOVIE_DETAIL, data: data});
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot process data'});
  }
}

export default getItemDetails;