import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';

interface Props {
  onClick: () => void;
}

function SidebarBackdrop({ className, onClick }: Props & { className?: string }) {
  const classes = classNames(className, styles.navbarBackdrop);
  return <div className={classes} onClick={onClick} />;
}

export default SidebarBackdrop;
