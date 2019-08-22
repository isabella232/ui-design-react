import * as React from 'react';
import { Nav } from 'react-bootstrap';

export interface Props {
  icon?: string;
  label: string;
  open?: boolean;
}

function NavItemDropdown({ children, icon, label, open }: React.PropsWithChildren<Props>) {
  const [isOpen, setOpen] = React.useState(null);

  React.useEffect(() => {
    setOpen(open);
  }, []);

  return (
    <Nav.Item className="dropdown" as="li">
      <Nav.Link className="dropdown-toggle" onClick={() => setOpen(!isOpen)}>
        <i className="material-icons material-icons-outlined mr-3">{icon}</i>
        <span>{label}</span>
      </Nav.Link>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { className: { show: isOpen } }),
      )}
    </Nav.Item>
  );
}

export default NavItemDropdown;
