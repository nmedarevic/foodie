import React from 'react'
import renderer from 'react-test-renderer'
import {DeliveryDay} from './DeliveryDay'
const availableDays = ['one', 'two']

it('Renders Delivery day without props', () => {
  const tree = renderer.create(<DeliveryDay />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Renders Delivery day with basic props', () => {
  const tree = renderer.create(<DeliveryDay availableDays={availableDays}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Renders Delivery day with a selected day', () => {
  const tree = renderer.create(<DeliveryDay availableDays={availableDays} selectedIndex={1}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
