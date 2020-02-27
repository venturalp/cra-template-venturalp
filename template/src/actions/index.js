import 'es6-promise/auto'
import 'isomorphic-fetch'
import { SET_IS_LOADING } from './types'

export const setIsLoading = value => dispatch => {
  dispatch({
    type: SET_IS_LOADING,
    payload: value,
  })
}
