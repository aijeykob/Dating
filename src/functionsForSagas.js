import axios from "axios";

const apiUrl = "http://localhost:8080";
const setHeadersWithToken = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
};
export const submitRegistration = (d) => {
    return axios.post(
        `${apiUrl}/registration`,
        d.payload,
    )
};
export const submitSearch = (d) => {
    return axios.post(
        `${apiUrl}/search`,
        d.payload, {
            headers: setHeadersWithToken()
        }
    )
};
export const submitSearchAll = (d) => {
    return axios.post(
        `${apiUrl}/searchAll`,
        d.payload,
        {
            headers: setHeadersWithToken()
        }
    )
};
export const submitLogin = (d) => {
    return axios.post(
        `${apiUrl}/login`,
        d.payload,
    )
};
export const setDeleteImg = (d) => {
    return axios.post(
        `${apiUrl}/image-remove`,
        {data: d.payload}, {
            headers: setHeadersWithToken()
        }
    )
};
export const setAvatarImg = (d) => {
    return axios.post(
        `${apiUrl}/image-avatar`,
        {data: d.payload}, {
            headers: setHeadersWithToken()
        }
    )
};
export const setUploadImg = (data) => {
    return axios.post(
        `${apiUrl}/upload`,
        data.payload, {
            headers: setHeadersWithToken()
        }
    )
};
export const changeFavoriteDb = (d) => {
    return axios.post(
        `${apiUrl}/favorite`,
        {data: d}, {
            headers: setHeadersWithToken()
        }
    )
};
export const viewProfile = () => {
    return axios.get(
        `${apiUrl}/view-profile`,
        {
            headers: setHeadersWithToken()
        }
    )
};
export const viewProfileImages = () => {
    return axios.get(
        `${apiUrl}/view-images`,
        {
            headers: setHeadersWithToken()
        }
    )
};
export const editProfile = (d) => {
    return axios.put(
        `${apiUrl}/edit-profile`,
        d.payload, {
            headers: setHeadersWithToken()
        }
    )
};
export const getAlbumByUserId = (id) => {
    return axios.get(
        `${apiUrl}/get-album?id=${id.payload}`,
        {
            headers: setHeadersWithToken()
        }
    )
};
export const getRandomImages = () => {
    return axios.get(
        `${apiUrl}/random-images`
    )
};