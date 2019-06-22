import * as React from 'react';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';
import SidebarBackdrop from './backdrop';
import SidebarDropdown from '../../compositions/dropdown/media';

interface Props {
  heading: string;
  subHeading: string;
}

function Sidebar({
  children,
  className,
  heading,
  subHeading,
}: React.PropsWithChildren<Props & {className?: string}>) {
  const sidebarClasses = classNames(className, styles.sidebar, styles.sidebarDark);
  return (
    <>
      <div className={sidebarClasses}>
        <SidebarDropdown heading={heading} subHeading={subHeading} />
        {children}
      </div>
    </>
  );
}

Sidebar.Backdrop = SidebarBackdrop;

export default Sidebar;
