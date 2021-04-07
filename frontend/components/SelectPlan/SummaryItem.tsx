export type SummaryItemType = {
  label: string;
  value: string;
}
export type SummaryData = {
  [key:string]: SummaryItemType
}
export type SumaryProps = {
  summary: SummaryData
}

export type SummaryItemProps = {
  key: string;
  item: SummaryItemType
}

export const SummaryItem = ({key, item}: SummaryItemProps) => (
  <div key={key} className='block'>
    <span key={`${key}-key`}>{item.label}</span>
    <span key={`${key}:`}>{':   '}</span>
    <span key={`${key}-value`}>{item.value}</span>
  </div>
)
