import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProjectHeader from '../ProjectHeader'

Enzyme.configure({ adapter: new Adapter() })

function setup(overrideProps) {
  const props = {
    collections: {
      allIds: ['collectionId1'],
      byId: {
        collectionId1: {
          granules: {
            hits: 1,
            totalSize: { size: '4.0', unit: 'MB' }
          },
          metadata: {
            mock: 'data 1'
          }
        }
      }
    },
    project: {
      collectionIds: ['collectionId1']
    },
    savedProject: {
      name: 'test project'
    },
    onUpdateProjectName: jest.fn(),
    ...overrideProps
  }

  const enzymeWrapper = mount(<ProjectHeader {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('ProjectHeader component', () => {
  test('renders its title correctly', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('header').length).toBe(1)
    expect(enzymeWrapper.find('.project-header__title').find('input').props().value).toEqual('test project')
  })

  describe('with one collection', () => {
    test('renders collection count correctly', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('.project-header__stats-item--collections').text()).toEqual('1 Collection')
    })

    test('renders collection size correctly', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('.project-header__stats-item--size').text().indexOf('4.0 MB') > -1).toEqual(true)
    })
  })

  describe('with multiple collections', () => {
    const { enzymeWrapper } = setup({
      collections: {
        allIds: ['collectionId1', 'collectionId2'],
        byId: {
          collectionId1: {
            granules: {
              hits: 1,
              totalSize: { size: '4.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 1'
            }
          },
          collectionId2: {
            granules: {
              hits: 5,
              totalSize: { size: '5.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 2'
            }
          }
        }
      },
      project: {
        collectionIds: ['collectionId1', 'collectionId2']
      }
    })

    test('renders collection count correctly', () => {
      expect(enzymeWrapper.find('.project-header__stats-item--collections').text()).toEqual('2 Collections')
    })

    test('renders collection size correctly', () => {
      expect(enzymeWrapper.find('.project-header__stats-item--size').text().indexOf('9.0 MB') > -1).toEqual(true)
    })
  })

  describe('with one granule', () => {
    test('renders granule count correctly', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('.project-header__stats-item--granules').text()).toEqual('1 Granule')
    })
  })

  describe('with multiple granules', () => {
    const { enzymeWrapper } = setup({
      collections: {
        allIds: ['collectionId1', 'collectionId2'],
        byId: {
          collectionId1: {
            granules: {
              hits: 1,
              totalSize: { size: '4.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 1'
            }
          },
          collectionId2: {
            granules: {
              hits: 5,
              totalSize: { size: '5.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 2'
            }
          }
        }
      },
      project: {
        collectionIds: ['collectionId1', 'collectionId2']
      }
    })

    test('renders granule count correctly', () => {
      expect(enzymeWrapper.find('.project-header__stats-item--granules').text()).toEqual('6 Granules')
    })
  })

  describe('with multiple granule, some of which being excluded', () => {
    const { enzymeWrapper } = setup({
      collections: {
        allIds: ['collectionId1', 'collectionId2'],
        byId: {
          collectionId1: {
            granules: {
              hits: 1,
              totalSize: { size: '4.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 1'
            }
          },
          collectionId2: {
            excludedGranuleIds: ['G10000001-EDSC', 'G10000002-EDSC'],
            granules: {
              hits: 5,
              totalSize: { size: '5.0', unit: 'MB' }
            },
            metadata: {
              mock: 'data 2'
            }
          }
        }
      },
      project: {
        collectionIds: ['collectionId1', 'collectionId2']
      }
    })

    test('renders granule count correctly', () => {
      expect(enzymeWrapper.find('.project-header__stats-item--granules').text()).toEqual('4 Granules')
    })
  })

  describe('editing project name', () => {
    test('when the state is editing the submit button is visible', () => {
      const { enzymeWrapper } = setup()

      enzymeWrapper.setState({ isEditingName: true })

      expect(enzymeWrapper.find('.project-name__submit-button').length).toBe(1)
      expect(enzymeWrapper.find('.project-name__edit-button').length).toBe(0)
    })

    test('when the state is not editing the edit button is visible', () => {
      const { enzymeWrapper } = setup()

      enzymeWrapper.setState({ isEditingName: false })

      expect(enzymeWrapper.find('.project-name__submit-button').length).toBe(0)
      expect(enzymeWrapper.find('.project-name__edit-button').length).toBe(1)
    })

    test('focusing the text field sets the state to editing', () => {
      const { enzymeWrapper } = setup()

      const input = enzymeWrapper.find('input')
      input.simulate('focus')

      expect(enzymeWrapper.state().isEditingName).toBeTruthy()
    })

    test('clicking the edit button sets the state to editing', () => {
      const { enzymeWrapper } = setup()

      const editButton = enzymeWrapper.find('.project-name__edit-button')
      editButton.simulate('click')

      expect(enzymeWrapper.state().isEditingName).toBeTruthy()
    })

    test('clicking the submit button calls onUpdateProjectName', () => {
      const { enzymeWrapper, props } = setup()

      const editButton = enzymeWrapper.find('.project-name__edit-button')
      editButton.simulate('click')

      const submitButton = enzymeWrapper.find('.project-name__submit-button')
      submitButton.simulate('click')

      expect(enzymeWrapper.state().isEditingName).toBeFalsy()
      expect(props.onUpdateProjectName).toBeCalledTimes(1)
      expect(props.onUpdateProjectName).toBeCalledWith('test project')
    })
  })
})
