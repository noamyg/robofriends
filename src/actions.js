import * as CONSTANTS from './constants.js'

export const setSearchField = (text) => ({
    type: CONSTANTS.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type : CONSTANTS.REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type : CONSTANTS.REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type : CONSTANTS.REQUEST_ROBOTS_FAILED, payload: error}))
}