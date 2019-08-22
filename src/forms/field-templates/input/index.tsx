import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import { FieldTemplateProps } from 'react-jsonschema-form';

export interface Props extends FieldTemplateProps {}

function CustomInputFieldTemplate(props: Props) {
  const { classNames: classes, rawErrors, rawHelp, description, children } = props;
  return (
    <div className={classes}>
      {description}
      {children}
      <div className={classNames(styles.invalidFeedback, styles.dBlock)}>
        {rawErrors && rawErrors[0]}
      </div>
      <small className="form-text text-muted">{rawHelp}</small>
    </div>
  );
}

export default CustomInputFieldTemplate;
