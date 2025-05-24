'use client';
import React from 'react';

import s from './styles.module.scss';

function Header(): React.JSX.Element {
  return (
    <header className={s.header}>
      <div className={s.header_inner}></div>
    </header>
  );
}

export default Header;
