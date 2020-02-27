import { SET_IS_LOADING } from '../actions/types'

const INITIAL_STATE = {
  isLoading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
