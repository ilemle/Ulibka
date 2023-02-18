import { call, put, takeEvery } from 'redux-saga/effects'
import { getPhotos } from '../../api/api';
import { photosFailure, photosSuccess, PHOTOS_REQUEST } from '../redux/photos';

function* photosRequestSaga() {
    try {
        const data = yield call(getPhotos)

        console.log('photosRequestSaga data: ', data);

        if (!data.error) {
            console.log('photosRequestSaga RESPONSE', data);
            yield put(photosSuccess(data))
        } else {
            alert(data.error)
            yield put(photosFailure(data.error))
        }

    } catch (err) {
        console.log(`photosRequestSaga ERROR: ` + err);
    }

}


export function* photosWatcher() {
    yield takeEvery(PHOTOS_REQUEST, photosRequestSaga)
}