import ProjectRequest from '../projectRequest'
import Request from '../request'

beforeEach(() => {
  jest.restoreAllMocks()
  jest.clearAllMocks()
})

describe('ProjectRequest#constructor', () => {
  test('sets the default values when authenticated', () => {
    const request = new ProjectRequest()

    expect(request.authenticated).toBeFalsy()
    expect(request.lambda).toBeTruthy()
  })
})

describe('ProjectRequest#permittedCmrKeys', () => {
  test('returns an array of timeline CMR keys', () => {
    const request = new ProjectRequest()

    expect(request.permittedCmrKeys()).toEqual([
      'auth_token',
      'name',
      'path',
      'project_id'
    ])
  })
})

describe('ProjectRequest#all', () => {
  test('calls Request#get', () => {
    const token = '123'
    const request = new ProjectRequest(token)

    const getMock = jest.spyOn(Request.prototype, 'get').mockImplementation()

    request.all()

    expect(getMock).toBeCalledTimes(1)
    expect(getMock).toBeCalledWith('projects')
  })
})

describe('ProjectRequest#save', () => {
  test('calls Request#post', () => {
    const request = new ProjectRequest()

    const postMock = jest.spyOn(Request.prototype, 'post').mockImplementation()

    const params = { path: '/search', name: 'test project' }
    request.save(params)

    expect(postMock).toBeCalledTimes(1)
    expect(postMock).toBeCalledWith('projects', params)
  })
})

describe('ProjectRequest#fetch', () => {
  test('calls Request#get', () => {
    const request = new ProjectRequest()

    const getMock = jest.spyOn(Request.prototype, 'get').mockImplementation()

    const projectId = '12345'
    request.fetch(projectId)

    expect(getMock).toBeCalledTimes(1)
    expect(getMock).toBeCalledWith('projects/12345')
  })
})

describe('ProjectRequest#remove', () => {
  test('calls Request#delete', () => {
    const token = '123'
    const request = new ProjectRequest(token)

    const deleteMock = jest.spyOn(Request.prototype, 'delete').mockImplementation()

    const projectId = '12345'
    request.remove(projectId)

    expect(deleteMock).toBeCalledTimes(1)
    expect(deleteMock).toBeCalledWith('projects/12345')
  })
})
