import fetch from 'isomorphic-fetch'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category: category
  }
}

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES,
  }
}

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json.categories,
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`/options`)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}

