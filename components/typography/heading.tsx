interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    size: 'lg' | 'md' | 'sm';
}

export default function Heading({ children, className, size }: HeadingProps) {
  return (
    <div className={`${size === 'lg'? 'text-6xl' : size === 'md' ? 'text-4xl' : size === 'sm' ? 'text-2xl' : 'text-xl'}  font-bold ${className}`}>
        {children}
    </div>
    
  )
}
