import { DeliveryForm } from "./DeliveryForm";
import { Section } from "./Common/Section";

export const DeliveryAddress = ({onChange}: {onChange: Function}) => (
  <Section>
    <div className='flex flex-col'>
      <h2 className='text-2xl'>Add delivery address</h2>
      <DeliveryForm onChange={onChange} />
    </div>
  </Section>
)
