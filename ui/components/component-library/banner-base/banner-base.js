import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ButtonIcon } from '../button-icon';
import { ICON_NAMES } from '../icon';
import { Text } from '../text';
import Box from '../../ui/box';

import {
  COLORS,
  DISPLAY,
  SIZES,
  TEXT,
} from '../../../helpers/constants/design-system';

export const BannerBase = ({
  className,
  title,
  titleProps,
  children,
  action,
  leftAccessory,
  onClose,
  closeButtonProps,
  ...props
}) => {
  return (
    <Box
      className={classnames('mm-banner-base', className)}
      display={DISPLAY.INLINE_FLEX}
      gap={2}
      backgroundColor={COLORS.BACKGROUND_DEFAULT}
      borderRadius={SIZES.SM}
      padding={3}
      {...props}
    >
      {leftAccessory && (
        <div className="mm-banner-base__left-accessory">{leftAccessory}</div>
      )}

      <div>
        {title && (
          <Text
            className="mm-banner-base__title"
            variant={TEXT.BODY_LG_MEDIUM}
            {...titleProps}
          >
            {title}
          </Text>
        )}
        {children && (
          <Text className="mm-banner-base__description">{children}</Text>
        )}
        {action && <Text className="mm-banner-base__action">{action}</Text>}
      </div>
      {onClose && (
        <ButtonIcon
          className="mm-banner-base__close-button"
          iconName={ICON_NAMES.CLOSE_OUTLINE}
          size={SIZES.SM}
          ariaLabel="Close" // TODO: i18n
          onClick={onClose}
          {...closeButtonProps}
        />
      )}
    </Box>
  );
};

BannerBase.propTypes = {
  /**
   * The title of the BannerBase
   */
  title: PropTypes.string,
  /**
   * The title of the BannerBase
   */
  titleProps: PropTypes.shape(Text.PropTypes),
  /**
   * The children is the description area of the BannerBase below the title
   */
  children: PropTypes.node,
  /**
   * The action of the BannerBase below the children
   */
  action: PropTypes.node,
  /**
   * The left content area of BannerBase
   */
  leftAccessory: PropTypes.node,
  /**
   * The onClick handler for the close button
   * When passed this will allow for the close button to show
   */
  onClose: PropTypes.func,
  /**
   * The props to pass to the close button
   */
  closeButtonProps: PropTypes.shape(ButtonIcon.PropTypes),
  /**
   * An additional className to apply to the BannerBase
   */
  className: PropTypes.string,
  /**
   * BannerBase accepts all the props from Box
   */
  ...Box.propTypes,
};
