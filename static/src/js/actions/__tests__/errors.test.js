import { ADD_ERROR, REMOVE_ERROR } from '../../constants/actionTypes'
import { addError, removeError } from '../errors'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('addError', () => {
  test('should create an action to update the authToken', () => {
    const payload = {
      id: 1,
      title: 'title',
      message: 'message'
    }

    const expectedAction = {
      type: ADD_ERROR,
      payload
    }

    expect(addError(payload)).toEqual(expectedAction)
  })
})


describe('removeError', () => {
  test('should create an action to update the authToken', () => {
    const payload = 1

    const expectedAction = {
      type: REMOVE_ERROR,
      payload
    }

    expect(removeError(payload)).toEqual(expectedAction)
  })
})
