import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';

interface Props {
  show: boolean;
  onClick: () => void;
}

function SidebarBackdrop({ className, show, onClick }: Props & HTMLDivElement) {
  const classes = classNames(className, styles.navbarBackdrop, styles.fade);
  return <div className={classes} onClick={onClick} />;
}

export default SidebarBackdrop;
