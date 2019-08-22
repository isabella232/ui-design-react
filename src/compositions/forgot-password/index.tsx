import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import * as React from 'react';
import Form, { ISubmitEvent, IChangeEvent } from 'react-jsonschema-form';
import Alert from '../../components/alert';
import Card from '../../components/card';
import { schema, uiSchema } from '../../compositions/forgot-password/schema';
import Submit from '../../compositions/submit';
import { transformErrors } from '../../forms/errors';
import { BaseInput } from '../../forms/widgets/input';

export interface Props {
  buttonLabel?: string;
  className?: string;
  error?: string;
  formData?: ForgotPasswordModel;
  id?: string;
  logo?: JSX.Element;
  pending?: boolean;
  title?: string;
  onChange?: (formData: ForgotPasswordModel) => void;
  onSubmit: (formData: ForgotPasswordModel) => void;
}

export interface ForgotPasswordModel {
  email: string;
}

function ForgotPassword(props: Props) {
  const {
    buttonLabel = 'Reset My Password',
    className,
    error,
    formData,
    id,
    logo,
    pending,
    title = 'Forgot your password?',
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
  const footerClasses = classNames(styles.textCenter, styles.mt4);
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
          widgets={{ BaseInput }}
          onChange={(e: IChangeEvent<ForgotPasswordModel>) => onChange && onChange(e.formData)}
          onSubmit={(e: ISubmitEvent<ForgotPasswordModel>) => onSubmit(e.formData)}
        >
          <Submit
            className={styles.w100}
            label={buttonLabel}
            pendingLabel="Sending..."
            pending={pending}
          >
            {buttonLabel}
          </Submit>
          <div className={footerClasses}>
            <a href="/sign-in">Back to sign in</a>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ForgotPassword;
