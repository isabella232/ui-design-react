import * as React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavGroup from '../../compositions/nav-group';
import NavLink from '../../compositions/nav-link';

export class NavComponent extends React.Component<any> {
  public static Item: typeof NavItem = Nav.Item;
  public static Link: typeof NavLink = NavLink;
  public static Group: typeof NavGroup = NavGroup;

  public render() {
    return <Nav {...this.props}>{this.props.children}</Nav>;
  }
}

export default NavComponent;
