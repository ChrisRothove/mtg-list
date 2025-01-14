

type UpdateFn = (e: React.ChangeEvent<HTMLSelectElement>) => void
interface SettingBlockProps {
  blockLabel: string,
  defaultValue?: string,
  options: string[],
  updateFn: UpdateFn
}

export default function SettingBlock(
  { blockLabel, options, updateFn, defaultValue }: SettingBlockProps
) {
  console.log(defaultValue)
  return (
    <div className='setting-block'>
      <h2>{blockLabel}</h2>
      <select className='setting-select' onChange={updateFn} defaultValue={defaultValue}>
        {options.map(option => {
          return (
            <option key={option} value={option}>{ option }</option>
          )
        })}
      </select>
    </div>
  )
}