import {
    submitRegistration,
    submitSearch,
    submitLogin,
    setDeleteImg,
    setAvatarImg,
    setUploadImg,
    viewProfile,
    viewProfileImages,
    editProfile,
    getAlbumByUserId,
    changeFavoriteDb,
    submitSearchAll,
    getRandomImages,
} from './functionsForSagas'
import {put, takeEvery, call, all} from 'redux-saga/effects'

export function* workerSubmitRegistration(d) {

    try {
        const response = yield call(submitRegistration, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        // yield put({type: 'SET_PROFILE_USER', payload: data.user})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSubmitSearch(d) {

    try {
        const response = yield call(submitSearch, d);
        const data = response.data;
        yield put({type: 'SET_FILTERED_FROM_DB', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSubmitSearchAll(d) {

    try {
        const response = yield call(submitSearchAll, d);
        const data = response.data;
        yield put({type: 'SET_FILTERED_FROM_DB', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSubmitLogin(d) {

    try {
        const response = yield call(submitLogin, d);
        const data = response.data;
        localStorage.setItem('token', data.token);
        yield put({type: 'SET_PROFILE_USER', payload: data.user});
        yield put({type: 'STATUS_REGISTRATION', payload: true});
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: false});
    }
}

export function* workerViewProfile() {

    try {
        const response = yield call(viewProfile,);
        const data = response.data;
        yield put({type: 'SET_PROFILE_USER', payload: data})
    } catch (error) {
        // yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerViewProfileImages() {

    try {
        const response = yield call(viewProfileImages,);
        const data = response.data;
        yield put({type: 'SET_PROFILE_IMAGES', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSetDeleteImg(d) {

    try {
        const response = yield call(setDeleteImg, d);
        const DbData = response.data;
        yield put({type: 'SET_DELETE_IMG_FROM_DB', payload: DbData})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSetAvatarImg(d) {

    try {
        const response = yield call(setAvatarImg, d);
        const data = response.data;
        yield put({type: 'SET_AVATAR_FROM_DB', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerSetUploadImg(data) {

    try {
        const response = yield call(setUploadImg, data);
        const DbData = response.data;
        yield put({type: 'SET_UPLOAD_IMG_FROM_DB', payload: DbData})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerEditProfile(d) {

    try {
        yield call(editProfile, d);
        yield put({type: 'CHANGE_STATUS_UPDATE_USER', payload: true})

    } catch (error) {
        yield put({type: 'CHANGE_STATUS_UPDATE_USER', payload: false});
    }
}

export function* workerGetAlbumByUserId(id) {

    try {
        const response = yield call(getAlbumByUserId, id);
        const data = response.data;
        yield put({type: 'SET_ALBUM_BY_USER_ID', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerChangeFavoriteDb(d) {

    try {
        const response = yield call(changeFavoriteDb, d);
        const data = response.data;
        // yield put({type: 'SET_ALBUM_BY_USER_ID', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* workerGetRandomImages() {

    try {
        const response = yield call(getRandomImages);
        const data = response.data;
        yield put({type: 'SET_RANDOM_IMAGES', payload: data})
    } catch (error) {
        yield put({type: 'STATUS_REGISTRATION', payload: error.response.status});
    }
}

export function* watchSubmitRegistration() {

    yield takeEvery('SUBMIT_REGISTRATION', workerSubmitRegistration)
}

export function* watchSubmitSearch() {

    yield takeEvery('SUBMIT_SEARCH', workerSubmitSearch)
}

export function* watchSubmitLogin() {

    yield takeEvery('SUBMIT_LOGIN', workerSubmitLogin)
}

export function* watchEditProfile() {

    yield takeEvery('EDIT_PROFILE', workerEditProfile)
}

export function* watchViewProfile() {

    yield takeEvery('VIEW_PROFILE', workerViewProfile)
}

export function* watchViewProfileImages() {

    yield takeEvery('VIEW_PROFILE_IMAGES', workerViewProfileImages)
}

export function* watchSetDeleteImg() {

    yield takeEvery('SET_DELETE_IMG', workerSetDeleteImg)
}

export function* watchSetAvatarImg() {

    yield takeEvery('SET_AVATAR_IMG', workerSetAvatarImg)
}

export function* watchSetUploadImg() {

    yield takeEvery('SET_UPLOAD_IMG', workerSetUploadImg)
}

export function* watchGetAlbumByUserId() {

    yield takeEvery('GET_ALBUM_BY_USER_ID', workerGetAlbumByUserId)
}

export function* watchChangeFavoriteDb() {

    yield takeEvery('CHANGE_FAVORITE_DB', workerChangeFavoriteDb)
}

export function* watchSubmitSearchAll() {

    yield takeEvery('SUBMIT_SEARCH_ALL', workerSubmitSearchAll)
}

export function* watchGetRandomImages() {

    yield takeEvery('GET_RANDOM_IMAGES', workerGetRandomImages)
}

export default function* rootSaga() {
    yield all([
        watchSubmitRegistration(),
        watchViewProfile(),
        watchEditProfile(),
        watchSubmitLogin(),
        watchSubmitSearch(),
        watchViewProfileImages(),
        watchSetDeleteImg(),
        watchSetAvatarImg(),
        watchSetUploadImg(),
        watchGetAlbumByUserId(),
        watchChangeFavoriteDb(),
        watchSubmitSearchAll(),
        watchGetRandomImages(),
    ])
}