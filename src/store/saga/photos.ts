import { call, put, takeEvery } from 'redux-saga/effects'

import { photosFailure, photosSuccess, PHOTOS_REQUEST } from '../redux/photos';

import { getPhotos } from '../../api/api';
import { IPhotosResponse } from '../../types';
import { isApiResponseOk } from '../../utils/apiUtils';



function* photosRequestSaga() {
    try {
        const data: IPhotosResponse = yield call(getPhotos)

        if (isApiResponseOk(data)) {
            yield put(photosSuccess(data.photos.photo))
        } else {
            yield put(photosFailure(data.message))
        }
    } catch (err) {
        yield put(photosFailure(err))
    }

}


export function* photosWatcher() {
    yield takeEvery(PHOTOS_REQUEST, photosRequestSaga)
}