import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../Resources/Colors';
import Spacing from '../Resources/Spacing';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: buttonColor || Color.confirmButtonBackground }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.buttonText,
        { color: Color.white }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.small,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;