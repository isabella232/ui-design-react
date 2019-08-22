import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

export interface Props extends React.HTMLAttributes<{}> {}

const CustomDropdown = React.forwardRef(
  (
    { children, onClick }: React.PropsWithChildren<{ onClick: () => void }>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    return (
      <div className={styles.dInline} style={{ cursor: 'pointer' }} ref={ref} onClick={onClick}>
        {children}
      </div>
    );
  },
);

function DropdownEllipsis({ children }: Props) {
  const classes = classNames(styles.materialIcons, 'material-icons-outlined');
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomDropdown as any} id="ellipsis-dropdown">
        <span className={classes}>more_horiz</span>
      </Dropdown.Toggle>
      {children}
    </Dropdown>
  );
}

export default DropdownEllipsis;
