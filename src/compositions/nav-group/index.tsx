import classNames from 'classnames';
import * as React from 'react';
import { flexColumn, w100 } from '~ui-css';
import { Nav } from '../../main';

export interface Props {
  children: React.ReactNode;
  icon?: string;
  isActive?: boolean;
  path: string;
  title: string;
  onClick?: () => void;
}

const NavGroup = (props: Props) => {
  const { children, icon, isActive, onClick, path, title } = props;
  const subnavClasses = classNames(flexColumn, w100);
  const navItemGroupClasses = classNames('nav-item-group', { active: isActive });

  return (
    <Nav.Item className={navItemGroupClasses} as="li">
      <Nav.Link icon={icon} isActive={isActive} path={path} title={title} onClick={onClick}>
        {children}
      </Nav.Link>

      <Nav className={subnavClasses} as="ul">
        {children}
      </Nav>
    </Nav.Item>
  );
};

export default NavGroup;
