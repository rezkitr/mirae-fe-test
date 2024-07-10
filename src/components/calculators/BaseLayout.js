import classNames from 'classnames'
import React from 'react'

const BaseLayout = ({ menus = [], children }) => {
  return (
    <div className="rounded-3xl bg-white border border-gray-secondary shadow-sm overflow-hidden">
      <div className="flex items-center h-14 border-b border-gray-secondary w-full overflow-x-auto">
        {menus.map((menu) => (
          <div
            key={menu.key}
            className={classNames(
              'h-full flex-1 flex items-center justify-center text-sm md:text-base lg:text-lg cursor-pointer min-w-36',
              menu.isActive && 'bg-accent-orange text-white font-medium'
            )}
          >
            {menu.title}
          </div>
        ))}
      </div>
      <div className="py-10 px-6 md:px-12">{children}</div>
    </div>
  )
}

export default BaseLayout
