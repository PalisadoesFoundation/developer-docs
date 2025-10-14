import React, { FC } from 'react';

interface InterfaceTwoColumnsProps {
  columnOne: React.ReactNode;
  columnTwo: React.ReactNode;
  reverse?: boolean;
}

const TwoColumns: FC<InterfaceTwoColumnsProps> = ({
  columnOne,
  columnTwo,
  reverse = false,
}) => {
  const firstColumnClasses = `column first ${reverse ? 'right' : 'left'}`;
  const lastColumnClasses = `column last ${reverse ? 'left' : 'right'}`;
  const containerClasses = `TwoColumns ${reverse ? 'reverse' : ''}`;

  return (
    <div className={containerClasses}>
      <div className={firstColumnClasses}>{columnOne}</div>
      <div className={lastColumnClasses}>{columnTwo}</div>
    </div>
  );
};

export default TwoColumns;
