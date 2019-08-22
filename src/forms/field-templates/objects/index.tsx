import { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import * as React from 'react';

export function CustomObjectFieldTemplate({
  description,
  properties,
  title,
}: ObjectFieldTemplateProps) {
  return (
    <>
      {title}
      {description}
      {properties.map((element) => element.content)}
    </>
  );
}
