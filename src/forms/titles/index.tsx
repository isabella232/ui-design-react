import * as React from 'react';
import { FieldProps } from 'react-jsonschema-form';

const REQUIRED_FIELD_SYMBOL = '*';

export interface Props extends FieldProps {}

function TitleField(props: FieldProps) {
  const { id, title, required } = props;
  return (
    <legend id={id}>
      {title}
      {required && <span className="required">{REQUIRED_FIELD_SYMBOL}</span>}
    </legend>
  );
}

export default TitleField;
