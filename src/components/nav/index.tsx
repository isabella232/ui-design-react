import * as React from 'react';
import { Nav } from 'react-bootstrap';
import NavItemDropdown from './nav-item-dropdown';
import NavItemLink from './nav-item-link';

export class NavComponent extends React.Component<any> {
  public static Item = Nav.Item;
  public static ItemDropdown = NavItemDropdown;
  public static ItemLink = NavItemLink;
  public static Link = Nav.Link;

  public render() {
    return <Nav {...this.props}>{this.props.children}</Nav>;
  }
}

export default NavComponent;
