import * as React from 'react';

import { Media } from 'react-bootstrap';

export interface Props {
  media?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function MediaComposition({ children, media, onClick }: React.PropsWithChildren<Props>) {
  return (
    <Media onClick={onClick}>
      {media}
      <Media.Body className="ml-3 dropdown-toggle">{children}</Media.Body>
    </Media>
  );
}

export default MediaComposition;
