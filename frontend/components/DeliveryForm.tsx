export const DELIVERY_FORM = [
  { id: 'fistName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'address', label: 'Address' },
  { id: 'postal', label: 'Postal code', type: 'number' }
]

export const DeliveryForm = ({onChange}: {onChange: Function}) => (
  DELIVERY_FORM.map(({id, label, type}) => (
    <div className='flex flex-col mt-2 mb-2'>
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => onChange({field: id, value: e.target.value})}
        className='shadow-sm'
        type={type || 'text'}
        id={id}
        name={label}
      />
    </div>
  ))
)