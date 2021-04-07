export const Recipe = ({name, text, image}) => (
  <div
    className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col cursor-pointer"
  >
    <img className="hover:grow hover:shadow-lg" src={image} />
    <div className="pt-3 flex items-center justify-between">
      <p className="">{name}</p>
    </div>
    <p className="pt-1 text-gray-900">{text}</p>
  </div>
)
