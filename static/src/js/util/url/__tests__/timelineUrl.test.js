import { decodeUrlParams, encodeUrlQuery } from '../url'

import emptyDecodedResult from './url.test'

describe('url#decodeUrlParams', () => {
  test('decodes timelineQuery correctly without a focused date', () => {
    const expectedResult = {
      ...emptyDecodedResult,
      timeline: {
        center: 1534577879,
        end: undefined,
        interval: 'day',
        start: undefined
      }
    }
    expect(decodeUrlParams('?tl=1534577879!4!!')).toEqual(expectedResult)
  })

  test('decodes timelineQuery correctly with a focused date', () => {
    const expectedResult = {
      ...emptyDecodedResult,
      timeline: {
        center: 1546300800,
        end: 1548979199,
        interval: 'day',
        start: 1546300800
      }
    }
    expect(decodeUrlParams('?tl=1546300800!4!1546300800!1548979199')).toEqual(expectedResult)
  })
})

describe('url#encodeUrlQuery', () => {
  describe('timelineQuery', () => {
    test('encodes timelineQuery correctly when timeline is visible', () => {
      const props = {
        pathname: '/path/here',
        timelineQuery: {
          center: 1534577879,
          interval: 'day'
        }
      }
      expect(encodeUrlQuery(props)).toEqual('/path/here?tl=1534577879!4!!')
    })

    test('encodes timelineQuery correctly when the timeline has no center state', () => {
      const props = {
        pathname: '/path/here',
        timelineQuery: {
          interval: 'day'
        }
      }
      expect(encodeUrlQuery(props)).toEqual('/path/here')
    })

    test('does not encode timelineQuery when timeline is not visible', () => {
      const props = {
        pathname: '/search',
        timelineQuery: {
          center: 1534577879,
          interval: 'day'
        }
      }
      expect(encodeUrlQuery(props)).toEqual('/search')
    })
  })
})
