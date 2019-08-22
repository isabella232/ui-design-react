import Button from '@components/button';
import * as React from 'react';
import { ButtonProps } from 'react-bootstrap';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  pending?: boolean;
  submittingButtonText: string;
}

function SubmitButton(props: Props & ButtonProps) {
  const { label, id, pending, submittingButtonText } = props;
  return (
    <>
      {pending ? (
        <Button.Spinner>{submittingButtonText}</Button.Spinner>
      ) : (
        <Button {...props} id={id} type="submit">
          {label}
        </Button>
      )}
    </>
  );
}

export default SubmitButton;
