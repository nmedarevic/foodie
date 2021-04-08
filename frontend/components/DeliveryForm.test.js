import React from 'react'
import { render } from '@testing-library/react'
import {DeliveryForm, DELIVERY_FORM} from './DeliveryForm'

test('should render all inputs from the config', () => {
  const { getByLabelText } = render(<DeliveryForm />)
  DELIVERY_FORM
    .map((formInputMeta) => getByLabelText(formInputMeta.label))
    .forEach((element) => (
      expect(element).toBeInTheDocument()
    ))
})
