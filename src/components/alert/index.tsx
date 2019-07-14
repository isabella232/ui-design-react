import * as React from 'react';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';
import { Alert, AlertProps } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

function AlertComponent(props: AlertProps) {
  return <Alert {...props}>{props.children}</Alert>;
}

export interface ShowProps {
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  timeout: number;
}
function Show({ children, timeout }: React.PropsWithChildren<ShowProps>) {
  const classes = classNames(styles.fixedBottomLeft);
  const [transitionIn, setTransitionIn] = React.useState(false);

  React.useEffect(() => {
    setTransitionIn(true);
    const id = setTimeout(() => setTransitionIn(false), timeout || 5000);
    return () => {
      clearTimeout(id);
    };
  }, [children]);

  return (
    <CSSTransition
      in={transitionIn}
      classNames="alert-transition"
      mountOnEnter={true}
      timeout={500}
    >
      <div className={classes}>{children}</div>
    </CSSTransition>
  );
}

AlertComponent.Show = Show;

export default AlertComponent;
