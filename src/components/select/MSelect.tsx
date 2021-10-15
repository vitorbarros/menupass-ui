import React from 'react';
import { Text, View } from 'react-native';
import type { MSelectTypes, MSelectItems } from './MSelectTypes';
import { Picker } from '@react-native-picker/picker';
import { styles } from './MSelectStyles';

export const MSelect = (props: MSelectTypes) => {
  const { label, values, selectedValue, onValueChange, placeholder, enabled } =
    props;

  const valuesList = values;

  if (valuesList.length === 0) {
    valuesList.push({
      label: placeholder || '',
      value: '',
    });
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker
        {...props}
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        itemStyle={styles.itemFont}
        enabled={enabled}
      >
        {valuesList.map((item: MSelectItems) => (
          <Picker.Item label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default MSelect;