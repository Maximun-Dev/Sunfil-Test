import cn from 'classnames';
import React from 'react';

import {
  TextPropsBase,
  TypoColor,
  TypoFontFamily,
  TypoTagParagraph,
  TypoWeight,
} from '@/enums/typo';

import styles from './styles.module.scss';

interface BodyProps extends TextPropsBase {
  size?: 48 | 36 | 30 | 24 | 16 | 18;
  tag?: TypoTagParagraph;
  ref?: React.Ref<HTMLDivElement | HTMLParagraphElement>;
}

const Paragraph = ({ ...props }: BodyProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 18,
    tag: Tag = TypoTagParagraph.div,
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

export default Paragraph;
