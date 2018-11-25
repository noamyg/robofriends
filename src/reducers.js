import * as CONSTANTS from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CONSTANTS.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case CONSTANTS.REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case CONSTANTS.REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload , isPending: false})
        case CONSTANTS.REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload , isPending: false})
        default:
            return state;
    }
}