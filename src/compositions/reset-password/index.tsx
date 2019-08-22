import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import * as React from 'react';
import Form, { ISubmitEvent, IChangeEvent } from 'react-jsonschema-form';
import Alert from '../../components/alert';
import Card from '../../components/card';
import { schema, uiSchema } from '../../compositions/reset-password/schema';
import Submit from '../../compositions/submit';
import { transformErrors } from '../../forms/errors';
import { BaseInput } from '../../forms/widgets/input';
import { validate, passwordPolicy } from '../../forms/validations/password';

export interface Props {
  buttonLabel?: string;
  className?: string;
  error?: string;
  formData?: ResetPasswordModel;
  id?: string;
  logo?: JSX.Element;
  pending?: boolean;
  title?: string;
  onChange?: (formData: ResetPasswordModel) => void;
  onSubmit: (formData: ResetPasswordModel) => void;
}

export interface ResetPasswordModel {
  password: string;
  token: string;
}

function ResetPassword(props: Props) {
  const {
    buttonLabel = 'Reset Password',
    className,
    error,
    formData,
    id,
    logo,
    pending,
    title = 'Reset Your Password',
    onChange,
    onSubmit,
  } = props;
  const headerClasses = classNames(
    styles.textCenter,
    styles.pt5,
    styles.pr5,
    styles.pb0,
    styles.pl5,
  );
  const bodyClasses = classNames(styles.pr5, styles.pb5, styles.pl5);
  return (
    <Card className={className} id={id} style={{ width: 420 }}>
      <Card.Header className={headerClasses}>
        {logo}
        <h2>{title}</h2>
      </Card.Header>
      <Card.Body className={bodyClasses}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form
          formData={formData}
          noHtml5Validate={true}
          schema={schema}
          showErrorList={false}
          transformErrors={transformErrors}
          uiSchema={uiSchema}
          validate={(formData, errors) => {
            const isValid = validate(formData.password, passwordPolicy);
            !isValid && errors.password.addError('Password does not meet criteria');
            return errors;
          }}
          widgets={{ BaseInput }}
          onChange={(e: IChangeEvent<ResetPasswordModel>) => onChange && onChange(e.formData)}
          onSubmit={(e: ISubmitEvent<ResetPasswordModel>) => onSubmit(e.formData)}
        >
          <Submit
            className={styles.w100}
            label={buttonLabel}
            pendingLabel="Sending..."
            pending={pending}
          >
            {buttonLabel}
          </Submit>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ResetPassword;
