import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.userCard}>
      <Image 
        style={styles.avatar}
        source={{ uri: user.avatar }}
        resizeMode="cover"
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.title}>{user.title}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCard: {
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    color: '#3a0000ff',
  },
  title: {
    fontSize: 17,
    color: '#4e4e4eff',
    marginBottom: 8,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default UserCard;