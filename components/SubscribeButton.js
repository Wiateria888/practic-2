import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubscribeButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Подписаться</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c44e00ff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SubscribeButton;