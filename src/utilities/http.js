import axios from 'axios';
import { store } from '../index';

function getInstance(url) {
    return axios.create({
        baseURL: url,
        timeout: 120000,
    });
}

// post method for rest api request, just pass the url, access token and body data
export function post(url, body) {
    return new Promise(((resolve, reject) => {
        const axiosInstance = getInstance(url);
        axiosInstance({
            method: 'post',
            data: body,
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            console.log('caught an error :', err.response);
            reject(err);
        });
    }));
}

// get method for rest api request, just pass the url and access token
export function get(url) {
    return axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            Pragma: 'no-cache',
            proxy:{
                host: "localhost",
                port: "8080"
            }
        },
    });
}

// put method for rest api request, just pass the url, access token and body data
export function put(url, body) {
    return new Promise(((resolve, reject) => {
        const axiosInstance = getInstance(url);
        axiosInstance({
            method: 'put',
            data: body,
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            console.log('caught an error :', err);
            reject(err);
        });
    }));
}

// put method for rest api request, just pass the url, access token and body data
export function deleteMethod(url, body) {
    return new Promise(((resolve, reject) => {
        const axiosInstance = getInstance(url);
        axiosInstance({
            method: 'delete',
            data: body,
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            console.log('caught an error :', err);
            reject(err);
        });
    }));
}
