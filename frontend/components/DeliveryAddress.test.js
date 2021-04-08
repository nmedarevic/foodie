import React from 'react'
import renderer from 'react-test-renderer'
import {DeliveryAddress} from './DeliveryAddress'

it('Renders DeliveryAddress without props', () => {
  const tree = renderer.create(<DeliveryAddress />).toJSON()
  expect(tree).toMatchSnapshot()
})
