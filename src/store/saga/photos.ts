import { call, put, takeEvery } from 'redux-saga/effects'
import { getPhotos } from '../../api/api';
import { IPhotosResponse } from '../../types';
import { isApiResponseOk } from '../../utils/apiUtils';
import { photosFailure, photosSuccess, PHOTOS_REQUEST } from '../redux/photos';



function* photosRequestSaga() {
    try {
        const data: IPhotosResponse = yield call(getPhotos)

        console.log('photosRequestSaga data: ', data);

        if (isApiResponseOk(data)) {
            console.log('photosRequestSaga RESPONSE', data.photos.photo);
            yield put(photosSuccess(data.photos.photo))
        } else {
            yield put(photosFailure(data.message))
        }

    } catch (err) {
        console.log(`photosRequestSaga ERROR: ` + err);
    }

}


export function* photosWatcher() {
    yield takeEvery(PHOTOS_REQUEST, photosRequestSaga)
}