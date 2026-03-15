import React from 'react'

function Button({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }  ) {
  return (
    <button onClick={onClick} className={`bg-orange-300 text-white px-4 py-2 rounded-md ${className}`}>
        {children}
    </button>
  )
}

export default Button