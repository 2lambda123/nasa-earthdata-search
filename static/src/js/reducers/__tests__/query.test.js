import queryReducer from '../query'
import { UPDATE_COLLECTION_QUERY, UPDATE_GRANULE_QUERY } from '../../constants/actionTypes'

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' }
    const initialState = {
      collection: {
        gridName: '',
        pageNum: 1,
        spatial: {},
        temporal: {},
        hasGranulesOrCwic: true
      },
      granule: {
        gridCoords: '',
        pageNum: 1
      }
    }

    expect(queryReducer(undefined, action)).toEqual(initialState)
  })
})

describe('UPDATE_COLLECTION_QUERY', () => {
  test('returns the correct state', () => {
    const payload = {
      keyword: 'new keyword',
      pageNum: 1,
      spatial: {
        point: '0,0'
      },
      gridName: '',
      temporal: {}
    }
    const action = {
      type: UPDATE_COLLECTION_QUERY,
      payload
    }

    const expectedState = {
      collection: {
        ...payload,
        hasGranulesOrCwic: true
      },
      granule: {
        gridCoords: '',
        pageNum: 1
      }
    }

    expect(queryReducer(undefined, action)).toEqual(expectedState)
  })

  test('does not overwrite existing values', () => {
    const initialState = {
      collection: { keyword: 'old keyword' },
      granule: { pageNum: 1 }
    }
    const payload = {
      spatial: {
        point: '0,0'
      }
    }
    const action = {
      type: UPDATE_COLLECTION_QUERY,
      payload
    }
    const expectedState = {
      collection: {
        keyword: 'old keyword',
        spatial: {
          point: '0,0'
        }
      },
      granule: { pageNum: 1 }
    }

    expect(queryReducer(initialState, action)).toEqual(expectedState)
  })
})


describe('UPDATE_GRANULE_QUERY', () => {
  test('returns the correct state', () => {
    const payload = {
      gridCoords: '',
      pageNum: 1
    }
    const action = {
      type: UPDATE_GRANULE_QUERY,
      payload
    }

    const expectedState = {
      collection: {
        gridName: '',
        pageNum: 1,
        spatial: {},
        temporal: {},
        hasGranulesOrCwic: true
      },
      granule: payload
    }

    expect(queryReducer(undefined, action)).toEqual(expectedState)
  })

  test('does not overwrite existing values', () => {
    const initialState = {
      collection: { keyword: 'old keyword' },
      granule: { pageNum: 1 }
    }
    const payload = {
      pageNum: 2
    }
    const action = {
      type: UPDATE_GRANULE_QUERY,
      payload
    }
    const expectedState = {
      collection: {
        keyword: 'old keyword'
      },
      granule: { pageNum: 2 }
    }

    expect(queryReducer(initialState, action)).toEqual(expectedState)
  })
})
