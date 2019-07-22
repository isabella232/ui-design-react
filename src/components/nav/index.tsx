import * as React from 'react';
import { Nav, NavProps, NavItem } from 'react-bootstrap';
import NavItemDropdown from './nav-item-dropdown';
import NavItemLink from './nav-item-link';
import { NavLinkProps } from 'react-bootstrap/NavLink';

function NavComponent(props: React.PropsWithChildren<NavProps> & NavProps) {
  return <Nav {...props}>{props.children}</Nav>;
}

NavComponent.Item = NavItem;
NavComponent.ItemDropdown = NavItemDropdown;
NavComponent.ItemLink = NavItemLink;
NavComponent.Link = (props: React.PropsWithChildren<NavLinkProps>) => (
  <Nav.Link {...props}>{props.children}</Nav.Link>
);

export default NavComponent;
