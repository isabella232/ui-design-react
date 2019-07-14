import * as React from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import * as styles from '@forgerock/ui-design';
import { FormControl, FormLabel, FormGroup, FormCheck, FormProps } from 'react-bootstrap';

function FormComponent(props: React.PropsWithChildren<FormProps>) {
  return <Form>{props.children}</Form>;
}

FormComponent.LabelGroup = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={classNames(className, styles.formLabelGroup)}>{children}</div>
);
FormComponent.LabelGroupInput = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={classNames(className, styles.formLabelGroupInput)}>{children}</div>
);

FormComponent.Check = FormCheck;
FormComponent.Control = FormControl;
FormComponent.Group = FormGroup;
FormComponent.Label = FormLabel;

export default FormComponent;
