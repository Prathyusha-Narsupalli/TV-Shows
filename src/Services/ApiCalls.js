import axios from 'axios'

export function getAllShows() {
    return axios.get("http://api.tvmaze.com/shows");
}

export function getShowDetails(id) {
    return axios.get("http://api.tvmaze.com/shows/"+id);
}

export function searchForShows(showName) {
    return axios.get("http://api.tvmaze.com/search/shows?q="+showName);
}