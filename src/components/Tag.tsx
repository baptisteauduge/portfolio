import React from 'react';
import 'styles/components/Tag.scss';

interface TagProps {
  children: string;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className="tag">
      <p>{children}</p>
    </div>
  );
};
