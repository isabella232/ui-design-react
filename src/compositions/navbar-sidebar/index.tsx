import * as React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import classNames from 'classnames';

export interface Props {
  hasToggle?: boolean;
  onToggleClick?: () => void;
  variant?: 'light' | 'dark';
}

function NavbarSidebar({
  children,
  className,
  hasToggle,
  onToggleClick,
  variant,
}: React.PropsWithChildren<Props & { className?: string }>) {
  const classes = classNames('navbar-sidebar', className);
  return (
    <Navbar expand="md" className={classes} role="navigation" variant={variant || 'dark'}>
      {hasToggle && <Navbar.Toggle arial-controls="sidebar" onClick={onToggleClick} />}
      <Nav>{children}</Nav>
    </Navbar>
  );
}

export default NavbarSidebar;
