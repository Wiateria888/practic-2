import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Можно добавить дополнительный контент в футер */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 20, // Минимальная высота для отступов
  },
});

export default Footer;