'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react';

import s from './styles.module.scss';
import { pageEnter } from '@Animation/useLifeCycle';
import { Container } from '@Components/Container';

function PageLoader() {
  const refLine = useRef<HTMLDivElement>(null);
  const refLineWrap = useRef<HTMLDivElement>(null);
  const pageLoadRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(refLine.current, {
      width: '100%',
      ease: 'power3.in',
      duration: 4,
    })
      .to(refLineWrap.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
      })
      .to(pageLoadRef.current, {
        yPercent: -100,
        duration: 0.5,
        delay: 0.5,
        ease: 'power3.out',
      })
      .to(pageLoadRef.current, {
        display: 'none',
        onComplete: pageEnter,
      });
  });

  return (
    <div className={s.pageLoader} ref={pageLoadRef}>
      <div className={s.pageLoader_process}>
        <Container>
          <div className={s.pageLoader_spinner}>
            <div className={s.spinner}>
              <div className={s.pageLoader_process_wrap} ref={refLineWrap}>
                <div className={s.pageLoader_process_wrap_line}></div>
                <div className={s.pageLoader_process_wrap_line_after} ref={refLine}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PageLoader;
