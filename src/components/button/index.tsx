import * as React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';

interface IconButtonProps extends ButtonProps {
  icon: string;
  onClick: () => void;
}

function IconButton(props: React.PropsWithChildren<IconButtonProps>) {
  const iconClasses = classNames('material-icons-outlined', styles.mr3, styles.alignBottom);
  return (
    <Button {...props}>
      <i className={iconClasses}>{props.icon}</i>
      <span>{props.children}</span>
    </Button>
  );
}

interface ButtonComponentProps extends ButtonProps {
  onClick: () => void;
}

function ButtonComponent(props: React.PropsWithChildren<ButtonComponentProps>) {
  return <Button {...props}>{props.children}</Button>;
}

ButtonComponent.Icon = IconButton;

export default ButtonComponent;
