import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import * as React from 'react';
import { Table, TableProps } from 'react-bootstrap';

export interface Props extends TableProps, React.HTMLAttributes<HTMLElement> {
  toolbar?: React.ReactElement;
}

function ListTableComponent({
  children,
  className,
  hover,
  id,
  responsive,
  toolbar,
}: React.PropsWithChildren<Props>) {
  const classes = classNames(styles.mb0, className);
  return (
    <div>
      {toolbar}
      <Table className={classes} id={id} hover={hover} responsive={responsive}>
        {children}
      </Table>
    </div>
  );
}

export default ListTableComponent;
