export const WRITING_LOGIN_TEXT = "WRITING_LOGIN_TEXT";
export const WRITING_TEXT_REGISTRATION = "WRITING_TEXT_REGISTRATION";
export const SELECT_DROP_DOWN = "SELECT_DROP_DOWN";
export const SWITCH_TOGGLE_REGISTRATION_FORMS = "SWITCH_TOGGLE_REGISTRATION_FORMS";
export const CHECK_BOX_REGISTRATION = "CHECK_BOX_REGISTRATION";
export const STATUS_REGISTRATION = "STATUS_REGISTRATION";
export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const VIEW_PROFILE = "VIEW_PROFILE";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const SET_PROFILE_USER = "SET_PROFILE_USER";
export const CHANGE_SEARCH_IN_AGE = "CHANGE_SEARCH_IN_AGE";
export const WRITING_SEARCH_TEXT = "WRITING_SEARCH_TEXT";
export const WRITING_EDIT_PROFILE_TEXT = "WRITING_EDIT_PROFILE_TEXT";
export const CHANGE_SEARCH_IN_WEIGHT = "CHANGE_SEARCH_IN_WEIGHT";
export const CHANGE_SEARCH_IN_HEIGHT = "CHANGE_SEARCH_IN_HEIGHT";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const SET_UPLOAD_IMG = "SET_UPLOAD_IMG";
export const SET_UPLOAD_IMG_FROM_DB = "SET_UPLOAD_IMG_FROM_DB";
export const SET_PROFILE_IMAGES = "SET_PROFILE_IMAGES";
export const VIEW_PROFILE_IMAGES = "VIEW_PROFILE_IMAGES";
export const SET_DELETE_IMG = "SET_DELETE_IMG";
export const SET_DELETE_IMG_FROM_DB = "SET_DELETE_IMG_FROM_DB";
export const SET_AVATAR_IMG = "SET_AVATAR_IMG";
export const SET_FILTERED_FROM_DB = "SET_FILTERED_FROM_DB";
export const TOGGLE_CLEAR_SEARCH = "TOGGLE_CLEAR_SEARCH";
export const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE";
export const GET_ALBUM_BY_USER_ID = "GET_ALBUM_BY_USER_ID";
export const LEAVE_PROFILE = "LEAVE_PROFILE";
export const SET_AVATAR_FROM_DB = "SET_AVATAR_FROM_DB";
export const SET_ALBUM_BY_USER_ID = "SET_ALBUM_BY_USER_ID";
export const CHANGE_OFFSET = "CHANGE_OFFSET";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";
export const CHANGE_FAVORITE_DB = "CHANGE_FAVORITE_DB";
export const SET_FILTER_TO_ALL = "SET_FILTER_TO_ALL";
export const CHANGE_PAGE_PAGINATION = "CHANGE_PAGE_PAGINATION";
export const SUBMIT_SEARCH_ALL = "SUBMIT_SEARCH_ALL";
export const CHANGE_STATUS_DOWNLOAD_IMG = "CHANGE_STATUS_DOWNLOAD_IMG";
export const GET_RANDOM_IMAGES = "GET_RANDOM_IMAGES";
export const SET_RANDOM_IMAGES = "SET_RANDOM_IMAGES";
export const CHANGE_STATUS_UPDATE_USER = "CHANGE_STATUS_UPDATE_USER";


export const writingLoginText = (text, field) => ({

    type: WRITING_LOGIN_TEXT, payload: text, field
});
export const writingEditProfileText = (text, field) => ({

    type: WRITING_EDIT_PROFILE_TEXT, payload: text, field
});

export const writingSearchText = (text, field) => ({

    type: WRITING_SEARCH_TEXT, payload: text, field
});

export const changeSearchInAge = (data) => ({

    type: CHANGE_SEARCH_IN_AGE, payload: data
});
export const changeSearchInWeight = (data) => ({

    type: CHANGE_SEARCH_IN_WEIGHT, payload: data
});
export const changeSearchInHeight = (data) => ({

    type: CHANGE_SEARCH_IN_HEIGHT, payload: data
});

export const writingTextRegistration = (text, field) => ({

    type: WRITING_TEXT_REGISTRATION, payload: text, field
});

export const checkBoxRegistration = (status) => ({

    type: CHECK_BOX_REGISTRATION, payload: status
});
export const selectDropDown = (select, field, stateProperty) => ({

    type: SELECT_DROP_DOWN, payload: select, field, stateProperty
});


export const switchToggleRegistrationForms = (status) => ({

    type: SWITCH_TOGGLE_REGISTRATION_FORMS, payload: status
});

export const toggleClearSearch = (status) => ({

    type: TOGGLE_CLEAR_SEARCH, payload: status
});


export const submitRegistration = (data) => ({

    type: SUBMIT_REGISTRATION, payload: data
});
export const submitSearch = (data) => ({

    type: SUBMIT_SEARCH, payload: data
});
export const setFilteredFromDb = (data) => ({

    type: SET_FILTERED_FROM_DB, payload: data
});


export const submitLogin = (data) => ({

    type: SUBMIT_LOGIN, payload: data
});

export const editProfile = (data) => ({

    type: EDIT_PROFILE, payload: data
});

export const statusRegistration = (data) => ({

    type: STATUS_REGISTRATION, payload: data
});

export const setProfileUser = (data) => ({

    type: SET_PROFILE_USER, payload: data
});

export const viewProfile = () => ({

    type: VIEW_PROFILE
});
export const setUploadImg = (data) => ({
    type: SET_UPLOAD_IMG, payload: (data)
});

export const setUploadImgFromDb = (data) => ({
    type: SET_UPLOAD_IMG_FROM_DB, payload: (data)
});
export const setAvatarFromDb = (data) => ({
    type: SET_AVATAR_FROM_DB, payload: (data)
});


export const setDeleteImg = (data) => ({
    type: SET_DELETE_IMG, payload: data
});
export const setDeleteImgFromDb = (data) => ({
    type: SET_DELETE_IMG_FROM_DB, payload: data
});


export const setAvatarImg = (data) => ({
    type: SET_AVATAR_IMG, payload: data
});

export const viewProfileImages = () => ({
    type: VIEW_PROFILE_IMAGES
});
export const setProfileImages = (file) => ({
    type: SET_PROFILE_IMAGES, payload: file
});
export const setRandomImages = (file) => ({
    type: SET_RANDOM_IMAGES, payload: file
});

export const setSelectedProfile = (data) => ({
    type: SET_SELECTED_PROFILE, payload: data
});

export const getAlbumByUserId = (data) => ({
    type: GET_ALBUM_BY_USER_ID, payload: data
});

export const serAlbumByUserId = (data) => ({
    type: SET_ALBUM_BY_USER_ID, payload: data
});

export const leaveProfile = () => ({
    type: LEAVE_PROFILE,
});

export const setFilterToAll = () => ({
    type: SET_FILTER_TO_ALL,
});

export const changeOffset = (offset) => ({
    type: CHANGE_OFFSET, payload: offset
});
export const changePagePagination = (page) => ({
    type: CHANGE_PAGE_PAGINATION, payload: page
});
export const changeFavorite = (filteredFavorite) => ({
    type: CHANGE_FAVORITE, payload: filteredFavorite
});
export const changeFavoriteDb = (data) => ({
    type: CHANGE_FAVORITE_DB, payload: data
});
export const submitSearchAll = (d) => ({
    type: SUBMIT_SEARCH_ALL, payload: d
});
export const changeStatusDownloadImg = (status) => ({
    type: CHANGE_STATUS_DOWNLOAD_IMG, payload: status
});
export const getRandomImages = () => ({
    type: GET_RANDOM_IMAGES,
});
export const changeStatusUpdateUser = (status) => ({
    type: CHANGE_STATUS_UPDATE_USER, payload: status
});

