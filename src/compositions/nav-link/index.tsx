import classNames from 'classnames';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { dFlex, mr3, positionRelative } from '~ui-css';

export interface Props {
  children?: React.ReactNode;
  icon?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  path: string;
  title: string;
  onClick?: () => any;
}

const NavLinkComponent = (props: Props) => {
  const { icon, isActive, isDisabled = false, path, title } = props;

  const iconClasses = classNames('material-icons', mr3);
  const iconElement = icon ? <i className={iconClasses}>{icon}</i> : null;
  const navLinkClasses = classNames(dFlex, positionRelative);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <Nav.Link
      className={navLinkClasses}
      active={isActive}
      disabled={isDisabled}
      href={path}
      onClick={onClick}
    >
      {iconElement}
      <span>{title}</span>
    </Nav.Link>
  );
};

export default NavLinkComponent;
