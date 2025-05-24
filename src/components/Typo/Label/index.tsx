import cn from 'classnames';
import React from 'react';

import {
  TextPropsBase,
  TypoColor,
  TypoElement,
  TypoFontFamily,
  TypoTagLabel,
  TypoWeight,
} from '@/enums/typo';

import styles from './styles.module.scss';

interface LabelProps extends TextPropsBase {
  size?: 200 | 64 | 28 | 24 | 20 | 18 | 16 | 14;
  tag?: TypoTagLabel;
  ref?: React.Ref<TypoElement>;
}

const Label = ({ ...props }: LabelProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 18,
    tag: Tag = TypoTagLabel.span,
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Tag {...restProps} ref={ref} className={textClassNames}>
      {children}
    </Tag>
  );
};

export default Label;
