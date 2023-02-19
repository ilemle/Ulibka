import { call, put, takeEvery } from 'redux-saga/effects'
import axios, { AxiosError } from 'axios';

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
            console.log('data er',data);
            
            yield put(photosFailure(data.message))
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            yield put(photosFailure(error.message))
          } else {
            console.log('unexpected error: ', error);
            yield put(photosFailure('unexpected error'))
          }
       
    }

}


export function* photosWatcher() {
    yield takeEvery(PHOTOS_REQUEST, photosRequestSaga)
}