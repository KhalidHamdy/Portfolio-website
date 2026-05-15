import React from "react";

function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`mx-auto w-[95%] max-w-7xl scroll-mt-24 py-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
