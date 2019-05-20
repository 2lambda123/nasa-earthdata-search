import { UPDATE_AUTH } from '../constants/actionTypes'

export const updateAuthToken = payload => ({
  type: UPDATE_AUTH,
  payload
})

export const updateAuthTokenFromHeaders = headers => (dispatch) => {
  const { 'jwt-token': jwtToken = '' } = headers || {}

  dispatch(updateAuthToken(jwtToken))
}
