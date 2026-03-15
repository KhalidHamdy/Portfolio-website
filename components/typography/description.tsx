interface DescriptionProps {
    children: React.ReactNode;
    className?: string;
    size: 'lg' | 'md' | 'sm' | 'xs';
}

export default function Description({ children, className, size }: DescriptionProps) {
  return (
    <p className={`text-2xl ${size === 'lg'? 'text-2xl' : size === 'md' ? 'text-xl' : size === 'sm' ? 'text-lg' : size === 'xs' ? 'text-sm' : 'text-md'}  font-normal ${className}`}>
        {children}
    </p>
    
  )
}
