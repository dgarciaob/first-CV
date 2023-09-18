import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
  const buttonClasses = active ? 'text-white border-b border-[#5AA6EC]' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white hover:cursor-pointer ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton