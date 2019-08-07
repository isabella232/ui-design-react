import * as styles from '@forgerock/ui-design';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import * as React from 'react';

export interface Props {
  name?: Name;
  password: string;
  passwordPolicy: PasswordPolicy;
}

function PasswordValidation({ password, passwordPolicy }: Props) {
  const passwordCriteria = evaluatePassword(password, passwordPolicy);

  const criteriaColumns = [
    passwordCriteria.splice(0, Math.round(passwordCriteria.length / 2)),
    passwordCriteria,
  ];

  const policies = criteriaColumns.map((criteriaColumn, i) => {
    const col = criteriaColumn.map(({ met, rule, text }) => {
      return (
        <small key={rule}>
          <li className={classNames({ [styles.opacity30]: !met })}>{text}</li>
        </small>
      );
    });
    return (
      <Col key={i}>
        <ul className={classNames(styles.pl3, styles.pt2)}>{col}</ul>
      </Col>
    );
  });

  return <Row noGutters={true}>{policies}</Row>;
}

export const passwordPolicy: PasswordPolicy = {
  lockoutPasswordAttempts: 0,
  maxPasswordAge: 0,
  minPasswordLength: 8,
  requireEmailVerification: false,
  requireLowerCaseLetter: true,
  requireNumber: true,
  requireSymbol: true,
  requireUpperCaseLetter: true,
  selfServeUnlockDuration: 15,
};

export interface PasswordPolicy {
  lockoutPasswordAttempts: number;
  selfServeUnlockDuration: number;
  disallowFirstNamePart?: boolean;
  disallowLastNamePart?: boolean;
  maxPasswordAge: number;
  requireLowerCaseLetter: boolean;
  requireNumber: boolean;
  requireSymbol: boolean;
  requireUpperCaseLetter: boolean;
  minPasswordLength: number;
  requireEmailVerification: boolean;
}

export type Rule =
  | 'disallowFirstNamePart'
  | 'disallowLastNamePart'
  | 'minPasswordLength'
  | 'requireLowerCaseLetter'
  | 'requireUpperCaseLetter'
  | 'requireNumber'
  | 'requireSymbol';

export interface PasswordCriteria {
  met: boolean;
  rule: Rule;
  text: string;
}

interface Name {
  givenName: string;
  familyName: string;
}

export function evaluatePassword(password: string, policy: PasswordPolicy): PasswordCriteria[] {
  const criteria: PasswordCriteria[] = [];
  const pwd = password || '';

  if (policy.requireLowerCaseLetter) {
    criteria.push({
      met: /[a-z]+/.test(pwd),
      rule: 'requireLowerCaseLetter',
      text: 'One lowercase letter',
    });
  }

  if (policy.requireUpperCaseLetter) {
    criteria.push({
      met: /[A-Z]+/.test(pwd),
      rule: 'requireUpperCaseLetter',
      text: 'One uppercase letter',
    });
  }

  if (policy.requireNumber) {
    criteria.push({
      met: /[0-9]+/.test(pwd),
      rule: 'requireNumber',
      text: 'One number',
    });
  }

  if (policy.minPasswordLength > 0) {
    criteria.push({
      met: pwd.length >= policy.minPasswordLength,
      rule: 'minPasswordLength',
      text: `${policy.minPasswordLength} character${
        policy.minPasswordLength === 1 ? '' : 's'
      } minimum`,
    });
  }

  if (policy.requireSymbol) {
    criteria.push({
      met: /[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\|\;\:\,\.\<\>\/\?]+/.test(pwd),
      rule: 'requireSymbol',
      text: 'One symbol',
    });
  }

  return criteria;
}

export function validate(password: string, passwordPolicy: PasswordPolicy) {
  const crit = evaluatePassword(password, passwordPolicy);
  const invalidRules = crit.filter((criteria) => {
    return !criteria.met;
  });
  return invalidRules.length === 0;
}
export default PasswordValidation;
