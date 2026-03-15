import React from 'react'

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`mx-auto w-[90%] max-w-7xl ${className}`}>
        {children}
    </div>
        
  )
}

export default Section