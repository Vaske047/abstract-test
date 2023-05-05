export interface ComponentProps {
  label: string
  options: string[] | number[]
  preselected: number | string
  dataType?: string
  handleValueChange: (value: any) => void
}
