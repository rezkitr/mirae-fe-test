'use client'

import { formatCurrency } from '@/util/util'
import InputRange from 'react-input-range'

const ValueItem = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  labelFormater,
  onChange,
}) => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-x-4">
        <label className="font-medium flex-1 text-sm md:text-base">
          {label}
        </label>
        <div className="flex-1">
          <input
            type="text"
            className="w-full"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        </div>
      </div>
      <InputRange
        maxValue={max}
        minValue={min}
        step={step}
        value={value}
        onChange={onChange}
        formatLabel={labelFormater}
      />
    </div>
  )
}

export default ValueItem
