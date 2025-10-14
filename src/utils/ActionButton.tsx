import React from 'react';

interface InterfaceActionButtonProps {
  href: string;
  type?: 'primary' | 'secondary';
  target?: string;
  children: React.ReactNode;
  buttonClassName?: string;
}

function ActionButton({
  href,
  type = 'primary',
  target,
  children,
  buttonClassName,
}: InterfaceActionButtonProps): React.JSX.Element {
  return (
    <a
      className={`ActionButton ${type} ${buttonClassName}`}
      rel="noopener"
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

export default ActionButton;
