import { post, get } from '../../utilities/http';
export const REVIEW_URL = '/reviews';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';

export function getAllReviews(restaurantId) {
    return new Promise((resolve, reject) => {
        const url = `${REVIEW_URL}/restaurant/${restaurantId}`;
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: GET_ALL_REVIEWS,
                payload: response.data,
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

