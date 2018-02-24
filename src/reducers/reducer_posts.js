import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {

        case FETCH_POSTS:
            // console.log(action.payload.data); // [post 1, post 2]
            // { 1: post }
            // using lodash's mapKeys method
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
