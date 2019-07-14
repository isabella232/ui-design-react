import * as React from 'react';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';
import SidebarBackdrop from './backdrop';

function Sidebar({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  const sidebarClasses = classNames(className, styles.sidebar, styles.sidebarDark);
  return (
    <>
      <div className={sidebarClasses}>{children}</div>
    </>
  );
}

Sidebar.Backdrop = SidebarBackdrop;

export default Sidebar;
