import React from 'react';

export const useSetCursorPosition = (
  setCursorPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >,
) => {
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientX === undefined || event.screenY === undefined) return;
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setCursorPosition]);
};
