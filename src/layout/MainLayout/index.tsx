'use client';

import GridDebug from '@Components/GridDebug';
import LenisScroll from '@Components/ReactLenis';
import React, { PropsWithChildren } from 'react';
import Header from '@Layout/Header';
import Animation from '@/animation';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <Animation>
      <Header />
      <LenisScroll>{children}</LenisScroll>
      <GridDebug />
    </Animation>
  );
}
