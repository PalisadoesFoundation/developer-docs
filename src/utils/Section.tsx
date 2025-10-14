import React from 'react';

interface InterfaceSectionProps {
  element?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'tint';
}

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}: InterfaceSectionProps): React.JSX.Element {
  const El = element as React.ElementType;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }
    >
      {children}
    </El>
  );
}

export default Section;
