import { JSONSchema6 } from 'json-schema';
import { UiSchema } from 'react-jsonschema-form';
import CustomInputFieldTemplate from '../../forms/field-templates/input';
import { CustomObjectFieldTemplate } from '../../forms/field-templates/objects';
import PasswordWidget from '../../forms/widgets/password';

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
  'ui:ObjectFieldTemplate': CustomObjectFieldTemplate,
  email: {
    'ui:FieldTemplate': CustomInputFieldTemplate,
  },
  password: {
    'ui:FieldTemplate': CustomInputFieldTemplate,
    'ui:widget': PasswordWidget,
  },
};
