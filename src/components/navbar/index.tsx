import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';

export interface Props {}

function NavbarComponent(props: Props) {
  return (
    <Navbar className="bg-dark navbar-dark" {...props}>
      navbar
    </Navbar>
  );
}

NavbarComponent.prototype.Brand = () => {
  return <NavbarBrand />;
};

NavbarComponent.prototype.Toggle = () => {
  return <NavbarToggle />;
};

NavbarComponent.prototype.Collapse = () => {
  return <NavbarCollapse />;
};

export default NavbarComponent;
