import { JSONSchema6 } from 'json-schema';
import { UiSchema } from 'react-jsonschema-form';

export const schema: JSONSchema6 = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      title: 'Email',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
  },
};

export const uiSchema: UiSchema = {
  email: {},
  password: {},
};
