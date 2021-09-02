import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { MFullWidthButtonTypes } from './MFullWidthButtonTypes';
import { MFullWidthButtonStyles } from './MFullWidthButtonStyles';
import { MFullWidthButtonColor } from './MFullWidthButtonColor';

export const MFullWidthButton = (props: MFullWidthButtonTypes) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[
        MFullWidthButtonStyles.container,
        {
          backgroundColor: props.disabled
            ? MFullWidthButtonColor.containerBgDisabled
            : MFullWidthButtonColor.containerBg,
        },
      ]}
    >
      <Text
        style={[
          MFullWidthButtonStyles.text,
          {
            color: props.disabled
              ? MFullWidthButtonColor.labelDisabled
              : MFullWidthButtonColor.label,
          },
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default MFullWidthButton;
