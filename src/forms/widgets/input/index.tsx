import * as React from 'react';
import { Field, Widget, WidgetProps } from 'react-jsonschema-form';
import Input from '../../../compositions/input';
import PasswordValidation, { passwordPolicy } from '../../../forms/validations/password';

export interface Props extends WidgetProps {
  id: string;
  placeholder: string;
  max: number | string;
  min: number | string;
  rawErrors: string[];
  registry: {
    fields: { [name: string]: Field };
    widgets: { [name: string]: Widget };
    definitions: { [name: string]: any };
    formContext: any;
  };
  required: boolean;
  step: number | string;
  type: string;
}

export function BaseInput(props: Props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    console.log('No id for', props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    autofocus,
    disabled,
    formContext,
    value,
    options,
    readonly,
    required,
    schema,
    rawErrors,
    onBlur,
    onFocus,
    ...inputProps
  } = props;

  // If options.inputType is set use that as the input type
  if (options.inputType) {
    inputProps.type = options.inputType.toString();
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === 'number') {
      inputProps.type = 'number';
      // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs
      inputProps.step = 'any';
    } else if (schema.type === 'integer') {
      inputProps.type = 'number';
      // Since this is integer, you always want to step up or down in multiples
      // of 1
      inputProps.step = '1';
    } else {
      inputProps.type = 'text';
    }
  }

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== 'undefined') {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== 'undefined') {
    inputProps.max = schema.maximum;
  }

  // Label
  inputProps.label = !required ? `${inputProps.label} (optional)` : inputProps.label;

  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    return props.onChange(value === '' ? options.emptyValue : value);
  };

  const Widget = inputProps.type === 'text' ? Input : Input.Password;

  return (
    <>
      <Widget
        autoFocus={autofocus}
        className="form-control"
        disabled={disabled}
        readOnly={readonly}
        value={value == null ? '' : value}
        {...inputProps}
        onChange={_onChange}
        onBlur={
          onBlur &&
          ((event: React.FocusEvent<HTMLInputElement>) => onBlur(inputProps.id, event.target.value))
        }
        onFocus={
          onFocus &&
          ((event: React.FocusEvent<HTMLInputElement>) =>
            onFocus(inputProps.id, event.target.value))
        }
      />
      {options.showValidation && (
        <PasswordValidation password={value} passwordPolicy={passwordPolicy} />
      )}
    </>
  );
}
