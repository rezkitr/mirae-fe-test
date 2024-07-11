import { calulcatorTypeMenus } from '@/util/config'
import classNames from 'classnames'
import Image from 'next/image'

const CalculatorTypeSelector = () => {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-4 justify-center">
      {calulcatorTypeMenus.map((type) => (
        <div
          key={type.key}
          className={classNames(
            'flex items-center justify-center rounded-lg text-white p-2 w-80 gap-x-2 cursor-pointer',
            type.isActive ? 'bg-accent-orange' : 'bg-gray-secondary'
          )}
        >
          <div className="relative h-4 w-4">
            <Image
              src={type.iconPath}
              alt={type.key}
              fill
              className="object-contain"
            />
          </div>
          <div className="font-medium text-sm md:text-lg">{type.title}</div>
        </div>
      ))}
    </div>
  )
}

export default CalculatorTypeSelector
