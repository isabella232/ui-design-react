import classNames from 'classnames';
import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { dFlex, mr3, positionRelative } from '~ui-css';

export interface Props {
  icon?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  path: string;
  title: string;
  onClick?: () => any;
}

export default class NavLinkComponent extends React.Component<Props> {
  public render() {
    const { isActive, isDisabled = false, icon, path, title } = this.props;

    const iconClasses = classNames('material-icons', mr3);
    const iconElement = icon ? <i className={iconClasses}>{this.props.icon}</i> : null;
    const navLinkClasses = classNames(dFlex, positionRelative);

    return (
      <Nav.Link
        className={navLinkClasses}
        active={isActive}
        disabled={isDisabled}
        href={path}
        onClick={this.onClick}
      >
        {iconElement}
        <span>{title}</span>
      </Nav.Link>
    );
  }

  private onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.onClick();
  };
}
