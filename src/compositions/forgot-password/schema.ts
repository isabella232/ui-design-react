import { JSONSchema6 } from 'json-schema';
import { UiSchema } from 'react-jsonschema-form';
import CustomInputFieldTemplate from '../../forms/field-templates/input';
import { CustomObjectFieldTemplate } from '../../forms/field-templates/objects';

export const schema: JSONSchema6 = {
  type: 'object',
  required: ['email'],
  properties: {
    email: {
      type: 'string',
      title: 'Email',
    },
  },
};

export const uiSchema: UiSchema = {
  'ui:ObjectFieldTemplate': CustomObjectFieldTemplate,
  email: {
    'ui:FieldTemplate': CustomInputFieldTemplate,
  },
};
