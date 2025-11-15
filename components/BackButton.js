import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({ onPress }) => {
  return (
    <Pressable style={styles.backBtn} onPress={onPress}>
      <Ionicons size={24} name='arrow-back' color="#333" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 215, 170, 0.8)',
  },
});

export default BackButton;