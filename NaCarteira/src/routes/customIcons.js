import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomPlusIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconCircle}>
        <AntDesign name="plus" size={28} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomPlusIcon;
