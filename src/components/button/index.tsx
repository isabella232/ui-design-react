import * as React from 'react';
import { Button, ButtonProps, Spinner, ButtonGroup } from 'react-bootstrap';
import classNames from 'classnames';
import * as styles from '@forgerock/ui-design';

interface Props extends React.PropsWithChildren<ButtonProps & React.HTMLAttributes<HTMLElement>> {
  onClick?: () => void;
}

function ButtonComponent(props: Props) {
  return <Button {...props}>{props.children}</Button>;
}

function IconButton(props: Props & { icon: string }) {
  const iconClasses = classNames(
    'material-icons-outlined',
    styles.mr3,
    styles.alignBottom,
    props.className,
  );
  return (
    <Button {...props}>
      <i className={iconClasses}>{props.icon}</i>
      <span>{props.children}</span>
    </Button>
  );
}

function CancelButton({ children, className, onClick }: Props) {
  return (
    <Button className={className} variant="link" onClick={onClick}>
      {children}
    </Button>
  );
}

function SpinnerButton({
  children,
  className,
  variant = 'primary',
}: React.PropsWithChildren<ButtonProps & { className?: string }>) {
  return (
    <Button className={className} variant={variant} disabled={true}>
      <Spinner
        className={styles.mr2}
        aria-hidden="true"
        as="span"
        animation="border"
        role="status"
        size="sm"
      />
      {children}
    </Button>
  );
}

interface CheckboxButtonProps {
  checked?: boolean;
  className?: string;
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

function CheckboxButton({
  children,
  checked,
  className,
  onChange,
}: React.PropsWithChildren<CheckboxButtonProps>) {
  const [isChecked, setIsChecked] = React.useState(checked);
  React.useEffect(() => setIsChecked(checked), [checked]);

  const labelClasses = classNames(styles.btn, styles.btnOutlineSecondary, {
    [styles.active]: isChecked,
  });

  const checkboxOnChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    onChange(e);
  };

  return (
    <ButtonGroup className={className} toggle={true}>
      <label className={labelClasses}>
        <input type="checkbox" checked={isChecked} onChange={checkboxOnChange} />
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
