import { combineReducers } from 'redux'
import {
  SELECT_CATEGORY,
  REQUEST_CATEGORIES, RECEIVE_CATEGORIES
} from '../actions/actions'

function selectedCategory(state = '', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function categoriesByServer(state = {
  isFetching: false,
  categories: []
}, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categoriesByServer,
  selectedCategory
})

export default rootReducer
