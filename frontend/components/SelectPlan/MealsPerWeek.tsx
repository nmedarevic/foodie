export const possibleTimesPerWeek = [1, 2, 3, 4, 5]

export const MealsPerWeek = ({onClick, timesPerWeek}) => {
  return (
    <section className="bg-white py-8 flex">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 self-center">
      <h3>Meals per week</h3>
      {possibleTimesPerWeek.map((times) => (
        <div className='px-2'>
          <input
            type="radio"
            id={times.toString()}
            name={times.toString()}
            value={times}
            checked={times === timesPerWeek}
            onClick={() => onClick(times)}
          />
          <label className='px-2' htmlFor={times.toString()}>{times}</label>
        </div>
      ))}
    </div>
    </section>
  )
}
