import classNames from 'classnames';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/helpers';
import * as styles from '@forgerock/ui-design'

export interface Props extends BsPrefixProps<React.ReactType> {
  active?: boolean;
  hide?: boolean;
  icon?: string;
  label: string;
  onClick?: (path: string) => void;
}

const NavItemLink = ({ active, as, hide, label, icon, onClick }: Props) => {
  const classes = classNames(hide ? 'none' : 'd-flex', { active }, styles.alignItemsCenter);
  return (
    <Nav.Item as={as}>
      <Nav.Link className={classes} onClick={onClick}>
        {icon && <i className="material-icons material-icons-outlined mr-3">{icon}</i>}
        <span>{label}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItemLink;
