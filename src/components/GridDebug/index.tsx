'use client';
import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

import s from './styles.module.scss';
import { Container } from '@Components/Container';

const GridColumn = (): React.ReactElement => (
  <div className="col-span-1">
    <div className={s.grid_col} />
  </div>
);

export default function GridDebug(): React.ReactElement {
  const [isGrid, setIsGrid] = useState(false);

  const handleKeyDown: (ev: KeyboardEvent) => void = useCallback(
    (ev: KeyboardEvent) => {
      const key = ev.which || ev.keyCode;
      const isShift = !!ev.shiftKey;
      if (isShift && key === 71) {
        localStorage.setItem('isGrid', String(!isGrid));
        setIsGrid(!isGrid);
      }
    },
    [isGrid]
  );

  useEffect(() => {
    const localIsGrid = localStorage.getItem('isGrid');
    if (localIsGrid === 'true') {
      setIsGrid(true);
    }
    window.addEventListener('keydown', handleKeyDown);
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isGrid]);

  return (
    <div className={cn(s.gridDebug, !isGrid && 'hidden')}>
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-24">
          {Array.from({ length: 12 }).map((_, index) => (
            <GridColumn key={`grid-column-${index.toString()}`} />
          ))}
        </div>
      </Container>
    </div>
  );
}
