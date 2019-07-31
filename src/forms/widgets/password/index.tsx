import * as React from 'react';
import { Props as InputProps } from '../../widgets/input';

function PasswordWidget(props: InputProps) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput type="password" {...props} />;
}

export default PasswordWidget;
