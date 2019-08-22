import { AjvError } from 'react-jsonschema-form';

export function transformErrors(errors: AjvError[]) {
  return errors.map((error) => {
    if (error.name === 'required') {
      error.message = 'Please provide a value';
    }
    return error;
  });
}
