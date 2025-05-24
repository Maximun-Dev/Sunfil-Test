'use client';

import React, { useEffect } from 'react';
import s from './styles.module.scss';
import Paragraph from '@Components/Typo/Paragraph';
import { TypoColor, TypoFontFamily, TypoTransform, TypoWeight } from '@/enums/typo';
import Image from 'next/image';
import { Container } from '@Components/Container';

function HomePage(): React.ReactElement {
  const refParagraph = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(refParagraph.current);
  }, []);

  return (
    <div className={s.wrapper}>
      <Container>
        <Image
          src={
            'https://images.unsplash.com/photo-1726064855757-ac8720008fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={'unsplash'}
          width={800}
          height={800}
        />
        <Paragraph
          ref={refParagraph}
          weight={TypoWeight.normal}
          transform={TypoTransform.uppercase}
          color={TypoColor.blue}
          font={TypoFontFamily.genist_sans}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolores exercitation tincidunt
          qui minim liber congue illum augue quod diam anim commodo. Proident ad aliquam sed ea odio
          eirmod. Consectetuer sanctus magna tation est soluta eum placerat vulputate nisi sed
          consectetuer. Hendrerit voluptate adipisici, ut est elitr anim ullamco elit nibh id fugiat
          cillum eum commodo aliquip assum erat officia. Non id labore rebum dolor, ex consequat
          sadipscing exerci duo possim anim possim velit soluta tempor nisl incidunt. Diam tempor
          praesent facilisi wisi facilisi duo eros eleifend fugiat nisi takimata facilisi quis autem
          aliquip. Adipisici nonummy cillum.
        </Paragraph>
      </Container>
    </div>
  );
}

export default HomePage;
