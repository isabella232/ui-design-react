import classNames from 'classnames';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { flexColumn, w100 } from '~ui-css';
import NavLink from '../../compositions/nav-link';

export interface Props {
  defaultOpen?: boolean;
  icon?: string;
  isActive?: boolean;
  path: string;
  title: string;
  onClick?: () => void;
}

interface State {
  isOpen: boolean;
}

export default class NavGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: this.props.defaultOpen || false,
    };
  }

  public render() {
    const { children, icon, isActive, path, title } = this.props;
    const subnavClasses = classNames(flexColumn, w100);
    const navItemGroupClasses = classNames('nav-item-group', { active: isActive });

    return (
      <Nav.Item className={navItemGroupClasses} as="li">
        <NavLink
          icon={icon}
          isActive={isActive}
          path={path}
          title={title}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </NavLink>

        {/* Subnav */}
        <Nav className={subnavClasses} as="ul">
          {children}
        </Nav>
      </Nav.Item>
    );
  }
}
