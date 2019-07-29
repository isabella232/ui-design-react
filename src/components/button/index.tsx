import * as React from 'react';
import { Button, ButtonProps, Spinner, ButtonGroup } from 'react-bootstrap';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';

interface Props
  extends React.PropsWithChildren<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function ButtonComponent(props: Props) {
  return <Button {...props}>{props.children}</Button>;
}

function IconButton(props: Props & { icon: string }) {
  const { children, icon } = props;
  const iconClasses = classNames(
    'material-icons-outlined',
    styles.mr3,
    styles.alignBottom,
    props.className,
  );

  return (
    <Button {...props}>
      <i className={iconClasses}>{icon}</i>
      <span>{children}</span>
    </Button>
  );
}

function CancelButton(props: Props) {
  const { children, variant = 'link', onClick } = props;
  return (
    <Button {...props} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
}

function SpinnerButton(props: Props) {
  const { children, variant = 'primary' } = props;
  return (
    <Button {...props} variant={variant} disabled={true}>
      <Spinner className={styles.mr2} as="span" animation="border" role="status" size="sm" />
      {children}
    </Button>
  );
}

interface CheckboxButtonProps extends Props {
  defaultChecked?: boolean;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

function CheckboxButton({ children, defaultChecked, className, onChange }: CheckboxButtonProps) {
  const [checked, setChecked] = React.useState(defaultChecked);
  React.useEffect(() => setChecked(defaultChecked), []);

  const labelClasses = classNames(styles.btn, styles.btnOutlineSecondary, {
    [styles.active]: checked,
  });

  const checkboxOnChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange(e);
  };

  return (
    <ButtonGroup className={className} toggle={true}>
      <label className={labelClasses}>
        <input type="checkbox" checked={checked} onChange={checkboxOnChange} />
        {children}
      </label>
    </ButtonGroup>
  );
}

ButtonComponent.Cancel = CancelButton;
ButtonComponent.Checkbox = CheckboxButton;
ButtonComponent.Icon = IconButton;
ButtonComponent.Spinner = SpinnerButton;

export default ButtonComponent;
