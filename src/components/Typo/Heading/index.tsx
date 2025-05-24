import cn from 'classnames';
import React from 'react';

import { TextPropsBase, TypoColor, TypoFontFamily, TypoTagHeading, TypoWeight } from '@/enums/typo';

import styles from './styles.module.scss';

interface HeadingProps extends TextPropsBase {
  size?: 60 | 64 | 72 | 85 | 88 | 250;
  tag?: TypoTagHeading;
  ref?: React.Ref<HTMLHeadingElement>;
}

const Heading = ({ ...props }: HeadingProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 72,
    tag: Tag = TypoTagHeading.h1,
    weight = TypoWeight.normal,
    font = TypoFontFamily.genist_sans,
    transform,
    className,
    children,
    ...restProps
  } = props;

  const textClassNames = cn(
    styles.text,
    styles[`text__${size}`],
    `font__${font}`,
    `text__${color}`,
    weight && `text__${weight}`,
    transform && `text__${transform}`,
    className
  );

  return (
    <Tag {...restProps} ref={ref} className={textClassNames}>
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';

export default Heading;
