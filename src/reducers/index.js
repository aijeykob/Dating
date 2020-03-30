import {
    WRITING_LOGIN_TEXT,
    SELECT_DROP_DOWN,
    SWITCH_TOGGLE_REGISTRATION_FORMS,
    WRITING_TEXT_REGISTRATION,
    CHECK_BOX_REGISTRATION,
    STATUS_REGISTRATION,
    SET_PROFILE_USER,
    CHANGE_SEARCH_IN_AGE,
    WRITING_SEARCH_TEXT,
    CHANGE_SEARCH_IN_WEIGHT,
    CHANGE_SEARCH_IN_HEIGHT,
    SET_PROFILE_IMAGES,
    SET_UPLOAD_IMG_FROM_DB,
    SET_DELETE_IMG_FROM_DB,
    SET_FILTERED_FROM_DB,
    TOGGLE_CLEAR_SEARCH,
    SET_SELECTED_PROFILE,
    LEAVE_PROFILE,
    SET_AVATAR_FROM_DB,
    SET_ALBUM_BY_USER_ID,
    CHANGE_OFFSET,
    WRITING_EDIT_PROFILE_TEXT,
    CHANGE_FAVORITE,
    SET_FILTER_TO_ALL,
    CHANGE_PAGE_PAGINATION,
    SUBMIT_SEARCH_ALL,
    CHANGE_STATUS_DOWNLOAD_IMG,
    SUBMIT_LOGIN,
    SET_RANDOM_IMAGES,
    CHANGE_STATUS_UPDATE_USER,

} from '../actions/index';

const initState = {
    username: '',
    password: '',
    toggleSearch: false,
    filtered: [],
    randomImages: [],
    statusDownloadImg: false,
    statusRegistration: false,
    statusUpdateUser: false,
    toggleRegistrationForms: false,
    paginationProfiles: {
        total: null,
        offset: null,
        activePage: 1
    },
    registration: {
        gender: '',
        month: '',
        year: '',
        day: '',
        lookingFor: '',
        inAge: '',
        region: '',
        email: '',
        password: '',
        username: '',
        education: '',
        children: '',
        commune: '',
        checkbox: false
    },
    profileUser: {},
    profileUserForViewProfileComponent: {},
    selectedProfile: {},
    login: {
        username: '',
        password: ''
    },
    searchParams: {
        findAll: false,
        inAge: {
            min: 25,
            max: 40
        },
        weight: {
            min: 40,
            max: 80
        },
        height: {
            min: 160,
            max: 180
        },
        username: '',
        commune: '',
        education: '',
        offset: 0

    },
    profileImages: {
        items: [],
        username: ''
    },
};

const reducer = (state = initState, {type, payload, field, stateProperty}) => {

    switch (type) {
        case WRITING_LOGIN_TEXT:
            return {
                ...state,
                login: {
                    ...state.login,
                    [field]: payload
                }
            };
        case SET_RANDOM_IMAGES:
            return {
                ...state,
                randomImages: payload.PhotosFromDb
            };
        case CHANGE_STATUS_UPDATE_USER:
            return {
                ...state,
                statusUpdateUser: payload
            };
        case CHANGE_STATUS_DOWNLOAD_IMG:
            return {
                ...state,
                statusDownloadImg: payload
            };
        case SUBMIT_LOGIN:
            return {
                ...state,
                // statusRegistration: 'pending'
            };
        case CHANGE_PAGE_PAGINATION:
            return {
                ...state,
                paginationProfiles: {
                    ...state.paginationProfiles,
                    activePage: payload
                }
            };
        case SET_FILTER_TO_ALL:
            return {
                ...state,
                searchParams: {
                    offset: 0
                }
            };
        case CHANGE_FAVORITE:
            return {
                ...state,
                profileUser: {
                    ...state.profileUser,
                    favorites: payload
                }
            };
        case WRITING_EDIT_PROFILE_TEXT:
            return {
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    [field]: payload
                }
            };
        case SET_PROFILE_IMAGES:
            return {
                ...state,
                profileImages: {
                    ...state.profileImages,
                    items: payload.PhotosFromDb
                }

            };
        case SET_ALBUM_BY_USER_ID:
            return {
                ...state,
                selectedProfile: {
                    ...state.selectedProfile,
                    album: payload.PhotosFromDb
                }

            };
        case SET_SELECTED_PROFILE:
            return {
                ...state,
                selectedProfile: payload,
            };
        case TOGGLE_CLEAR_SEARCH:
            return {
                ...state,
                toggleSearch: payload,
                searchParams: {
                    ...state.searchParams,
                    findAll: false,
                },
                paginationProfiles: {
                    ...state.paginationProfiles,
                    total: null,
                    offset: null,
                    activePage: 1
                }
            };
        case SUBMIT_SEARCH_ALL:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    findAll: true
                }
            };
        case LEAVE_PROFILE:
            return {
                ...state,
                profileUser: {}
            };
        case SET_UPLOAD_IMG_FROM_DB:

            return {
                ...state,
                profileImages: {
                    ...state.profileImages,
                    items: [...state.profileImages.items, payload]
                }
            };
        case SET_AVATAR_FROM_DB:
            return {
                ...state,
                profileUser: {
                    ...state.profileUser,
                    avatar: payload.avatar
                }
            };
        case SET_FILTERED_FROM_DB:

            return {
                ...state,
                paginationProfiles: {
                    ...state.paginationProfiles,
                    total: payload.usersFromDb.count
                },
                filtered: payload.usersFromDb.rows,
                toggleSearch: true

            };
        case CHANGE_OFFSET:

            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    offset: payload
                }
            };
        case SET_DELETE_IMG_FROM_DB:
            return {
                ...state,
                profileImages: {
                    ...state.profileImages,
                    items: [...state.profileImages.items.filter(item => item.url !== payload.url)]

                }

            };
        case SET_PROFILE_USER:
            return {
                ...state,
                profileUser: payload,
                selectedProfile: payload
            };
        case STATUS_REGISTRATION:
            return {
                ...state,
                statusRegistration: payload
            };
        case WRITING_TEXT_REGISTRATION:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    [field]: payload
                }
            };
        case WRITING_SEARCH_TEXT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    [field]: payload
                }
            };
        case CHANGE_SEARCH_IN_AGE:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    inAge: {
                        min: payload[0],
                        max: payload[1]
                    }

                }
            };
        case CHANGE_SEARCH_IN_WEIGHT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    weight: {
                        min: payload[0],
                        max: payload[1]
                    }

                }
            };
        case CHANGE_SEARCH_IN_HEIGHT:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    height: {
                        min: payload[0],
                        max: payload[1]
                    }

                }
            };
        case CHECK_BOX_REGISTRATION:
            return {
                ...state,
                registration: {
                    ...state.registration,
                    checkbox: payload
                }
            };
        case SELECT_DROP_DOWN:
            return {
                ...state,
                [stateProperty]: {
                    ...(state[stateProperty]),
                    [field]: payload
                }
            };
        case SWITCH_TOGGLE_REGISTRATION_FORMS:
            return {
                ...state,
                toggleRegistrationForms: payload
            };
        default:
            return state
    }
};
export default reducer