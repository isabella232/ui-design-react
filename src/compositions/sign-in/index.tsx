import Card from '@components/card';
import * as React from 'react';
import Form from 'react-jsonschema-form';
import { schema, uiSchema } from 'compositions/sign-in/schema';
import { Button } from 'react-bootstrap';

export interface Props extends React.HTMLAttributes<{}> {}

function SignIn(props: Props) {
  return (
    <Card {...props}>
      <Card.Header>
        <h2>Sign In</h2>
      </Card.Header>
      <Card.Body>
        <Form schema={schema} uiSchema={uiSchema}>
          <Button />
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignIn;
