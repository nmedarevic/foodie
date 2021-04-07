import { Section } from "../Common/Section";

export const Continue = ({ onContinue }) => (
  <Section>
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={onContinue}
    >
      Continue
      </button>
  </Section>

)
