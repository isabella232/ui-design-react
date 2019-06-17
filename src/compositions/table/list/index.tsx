import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import { Button, ButtonGroup, ButtonToolbar, Card, Table, TableProps } from 'react-bootstrap';

export interface Props extends TableProps {
  toolbar?: React.ReactElement;
}

function ListTableComponent({
  children,
  hover,
  responsive,
  toolbar,
}: React.PropsWithChildren<Props>) {
  return (
    <Card>
      {toolbar}
      <Table className={styles.mb0} hover={hover} responsive={responsive}>
        {children}
      </Table>
    </Card>
  );
}

export default ListTableComponent;
