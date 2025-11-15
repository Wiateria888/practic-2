import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ onBackPress }) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.backBtn} onPress={onBackPress}>
        <Ionicons size={24} name='arrow-back' color="#333" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 10,
    left: 0,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 215, 170, 0.8)',
    zIndex: 1,
  },
});

export default Header;