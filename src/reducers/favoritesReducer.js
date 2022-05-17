import * as types from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case types.ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case types.REMOVE_FAVORITE:
            const id = action.payload
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== id)
            }         
        default:
            return state;
    }
}

export default reducer