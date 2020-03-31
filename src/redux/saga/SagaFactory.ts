import AppAction from '../action/AppAction';
import {takeEvery} from 'redux-saga/effects';
import getList from './GetMoviesSaga';
import getItemDetails from './GetMovieDetailsSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_MOVIES, getList);
  yield takeEvery(AppAction.SHOW_MOVIE_DETAIL, getItemDetails);
}

export default dataSaga;