/**
 * Created by Shrimp on 16/7/31.
 */
import qs from 'query-string';
import config from '../config';
const {baseUrl} = config;

export function get(url = "", params = {}) {
    url = baseUrl + url
    if (params) {
        url += `?${qs.stringify(params)}`;
    }
    return fetch(url)
        .then(filterStatus)
        .then(filterText)
        .then(filterToJSON)
}



function filterStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    else {
        let error = new Error(res.statusText);
        error.res = res;
        error.type = 'http';
        throw error;
    }
}
function filterText(res) {
    return res.text();
}

function filterToJSON(text){
    return JSON.parse(text);
}