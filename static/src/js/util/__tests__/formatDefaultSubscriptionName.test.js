import { formatDefaultSubscriptionName } from '../formatDefaultSubscriptionName'

describe('formatDefaultSubscriptionName', () => {
  describe('when no query parameters are used', () => {
    test('returns the correct value', () => {
      const result = formatDefaultSubscriptionName({}, 'granule')
      expect(result).toEqual('Granule Search Subscription (0 filters)')
    })
  })

  describe('when one query parameter is used', () => {
    test('returns the correct value', () => {
      const result = formatDefaultSubscriptionName({ boundingBox: '1,1,-1,-1' }, 'granule')
      expect(result).toEqual('Granule Search Subscription (Bounding Box)')
    })
  })

  describe('when two query parameters are used', () => {
    test('returns the correct value', () => {
      const result = formatDefaultSubscriptionName({
        boundingBox: '1,1,-1,-1',
        cloudHosted: true
      }, 'granule')
      expect(result).toEqual('Granule Search Subscription (Bounding Box & 1 more filter)')
    })
  })

  describe('when three query parameters are used', () => {
    test('returns the correct value', () => {
      const result = formatDefaultSubscriptionName({
        boundingBox: '1,1,-1,-1',
        cloudHosted: true,
        onlineOnly: true
      }, 'granule')
      expect(result).toEqual('Granule Search Subscription (Bounding Box & 2 more filters)')
    })
  })

  describe('when a collection is passed', () => {
    test('returns the correct value', () => {
      const result = formatDefaultSubscriptionName({ boundingBox: '1,1,-1,-1', hasGranulesOrCwic: true }, 'collection')
      expect(result).toEqual('Dataset Search Subscription (Bounding Box)')
    })

    describe('when hasGranulesOrCwic is not set', () => {
      test('returns the correct value', () => {
        const result = formatDefaultSubscriptionName({}, 'collection')
        expect(result).toEqual('Dataset Search Subscription (Include datasets without granules)')
      })
    })
  })
})
