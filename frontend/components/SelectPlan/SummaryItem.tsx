export type SummaryItemType = {
  label: string;
  value: string;
}
export type SummaryData = {
  [key:string]: SummaryItemType
}
export type SumaryProps = {
  summary: SummaryData,
  data: any
}

export type SummaryItemProps = {
  itemKey: string;
  item: SummaryItemType
}

export const SummaryItem = ({itemKey, item}: SummaryItemProps) => (
  <div key={itemKey} className='block'>
    <span key={`${itemKey}-key`}>{item.label}</span>
    <span key={`${itemKey}:`}>{':   '}</span>
    <span key={`${itemKey}-value`}>{item.value}</span>
  </div>
)
