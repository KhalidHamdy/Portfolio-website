'use client'
import React, { useState } from 'react'

interface SkeletonImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}   

function SkeletonImage({ src, alt, className, containerClassName }: SkeletonImageProps) {
    const [loading, setLoading] = useState(true);

    return (
      <div className={`relative ${containerClassName}`}>
        {loading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
  
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          className={`${loading ? "opacity-0" : "opacity-100"} transition ${className}`}
        />
      </div>
    );  
}

export default SkeletonImage