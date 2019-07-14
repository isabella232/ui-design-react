import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import classNames from 'classnames';
import { Dropdown, Media } from '../../../';
import MediaComposition, { Props as MediaCompositionProps } from '../../../compositions/media';

interface Props {
  heading: string;
  subHeading: string;
}

const CustomMediaDropdown = React.forwardRef(
  (
    { children, onClick }: React.PropsWithChildren<MediaCompositionProps>,
    ref: React.RefObject<{}>,
  ) => (
    <MediaComposition
      mediaRef={ref}
      media={<img src="/img/avatar.svg" alt="Avatar" />}
      onClick={onClick}
    >
      {children}
    </MediaComposition>
  ),
);

function DropdownComponent({ heading, subHeading }: Props) {
  const dropdownClasses = classNames(
    styles.dropdown,
    styles.dropdownMedia,
    styles.dropdownDark,
    styles.bgDark,
  );
  const dropdownItemClasses = classNames(styles.dFlex, styles.dropdownItemIcontext);
  const mediaHeaderClasses = classNames(styles.mb0, styles.textTruncate);
  const mediaSubHeaderClasses = classNames(styles.dBlock, styles.mb0, styles.textTruncate);
  const menuMediaClasses = classNames(styles.px4, styles.py3);
  const materialIconClasses = classNames(
    styles.materialIcons,
    'material-icons-outlined',
    styles.mr2,
  );

  return (
    <Dropdown className={dropdownClasses}>
      <Dropdown.Toggle id="media-dropdown" as={CustomMediaDropdown}>
        <h5 className={mediaHeaderClasses}>{heading}</h5>
        <span className={mediaSubHeaderClasses}>{subHeading}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Media className={menuMediaClasses}>
          <Media.Body>
            <h5>{heading}</h5>
            <span>Developer Edition</span>
          </Media.Body>
        </Media>
        <Dropdown.Item className={dropdownItemClasses}>
          <i className={materialIconClasses}>settings</i>
          <span>Environment Settings</span>
        </Dropdown.Item>
        <Dropdown.Item className={dropdownItemClasses}>
          <i className={materialIconClasses}>360</i>
          <span>Switch Environment</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <Media>
            <img src="img/avatar.svg" />
            <Media.Body className={styles.ml3}>
              <h5>{heading}</h5>
              <span>{subHeading}</span>
            </Media.Body>
          </Media>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className={dropdownItemClasses}>
          <i className={materialIconClasses}>exit_to_app</i>
          <span>Sign Out</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
