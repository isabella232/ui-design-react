import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

interface Props {
  show: boolean;
  onClick: () => void;
}

function SidebarBackdrop({ className, show, onClick }: Props & HTMLDivElement) {
  const [showState, setShowState] = React.useState(false);
  React.useEffect(() => setShowState(show), [show]);

  const classes = classNames(className, styles.navbarBackdrop, styles.fade);
  return (
    <CSSTransition classNames="navbar-backdrop" in={showState} timeout={3000}>
      <div className={classes} onClick={onClick} />
    </CSSTransition>
  );
}

export default SidebarBackdrop;
