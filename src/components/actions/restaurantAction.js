import { post, get } from '../../utilities/http';
export const RESTAURANT_URL = '/restaurants';

export const GET_ALL_RESTAURANTS = 'GET_ALL_RESTAURANTS';
export const GET_SPECIFIC_RESTAURANT = 'GET_SPECIFIC_RESTAURANT';


export function addNewRestaurant(restaurantName, owner) {
    const url = `${RESTAURANT_URL}/${restaurantName}/${owner}`;
    return new Promise((resolve, reject) => {
        const promise = post(url);
        promise.then((response) => {
            resolve({
                type: GET_ALL_RESTAURANTS,
                payload: response,
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export function getAllRestaurants() {
    return new Promise((resolve, reject) => {
        const promise = get(RESTAURANT_URL);
        promise.then((response) => {
            resolve({
                type: GET_ALL_RESTAURANTS,
                payload: response.data,
            });
        }).catch((error) => {
            reject(error);
        });
    });
}


export function getRestaurantById(restaurantId) {
    return new Promise(((resolve) => {
        const url = `${PH_USER_URL}/${restaurantId}`;
        const promise = get(url);

        promise.then((response) => {
            resolve({
                type: GET_SPECIFIC_RESTAURANT,
                payload: response,
            });
        });
    }));
}

