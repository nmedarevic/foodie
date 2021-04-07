type SectionProps = {
  className?: string;
  children?: React.ReactNode;
}

export const Section = (props:SectionProps): JSX.Element => (
  <section className="bg-white py-8 flex">
    <div className="container mx-auto flex items-center flex-wrap flex-col pt-4 pb-12 self-center">
      {props.children}
    </div>
  </section>
)
