import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import { Media } from 'react-bootstrap';

export interface Props {
  media?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  mediaRef?: React.RefObject<any>;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function MediaComposition({ children, media, onClick }: React.PropsWithChildren<Props>) {
  const classes = classNames(styles.ml3, styles.dropdownToggle);
  return (
    <Media onClick={onClick}>
      {media}
      <Media.Body className={classes}>{children}</Media.Body>
    </Media>
  );
}

export default MediaComposition;
