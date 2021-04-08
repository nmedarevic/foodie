export const Plan = ({name, price, onClick, planId, itemImage}) => (
  <div
    data-test={`plan-item-${name.replace(' ', '')}`}
    className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col cursor-pointer"
    onClick={() => onClick(planId)}
  >
    <img className="hover:grow hover:shadow-lg" src={itemImage} />
    <div className="pt-3 flex items-center justify-between">
      <p className="">{name}</p>
    </div>
    <p className="pt-1 text-gray-900">{price}€</p>
  </div>
)
