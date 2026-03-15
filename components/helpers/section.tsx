import React from 'react'

function Section({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <div id={id} className={`mx-auto w-[90%] max-w-7xl scroll-mt-24 ${className}`}>
        {children}
    </div>
        
  )
}

export default Section