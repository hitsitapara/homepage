import React from 'react'

function Container({children, classes}) {
  return (
    <div className={`2xl:px-[220px] md:px-8 px-4 ${classes}`}>
      {children}
    </div>
  )
}

export default Container
