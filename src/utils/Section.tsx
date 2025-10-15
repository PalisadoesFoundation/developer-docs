import React from 'react';

type ElementType =
  | 'section'
  | 'div'
  | 'article'
  | 'aside'
  | 'header'
  | 'footer'
  | 'main'
  | 'nav';

interface InterfaceSectionProps {
  element?: ElementType;
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'tint';
}

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}: InterfaceSectionProps): React.ReactElement {
  const El = element as ElementType;
  return React.createElement(
    El,
    {
      className: className
        ? `Section ${className} ${background}`
        : `Section ${background}`,
    },
    children,
  );
}

export default Section;
