import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// What to do when an action is called
// Posts will be an array
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payloa)
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}