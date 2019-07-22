import * as styles from '@forgerock/ui-design';
import * as React from 'react';
import { Table, TableProps } from 'react-bootstrap';

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
    <div>
      {toolbar}
      <Table className={styles.mb0} hover={hover} responsive={responsive}>
        {children}
      </Table>
    </div>
  );
}

export default ListTableComponent;
