import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Skills = ({ skills }) => {
  return (
    <View style={styles.skillsContainer}>
      {skills.map((skill, index) => (
        <Text key={index} style={styles.skill}>
          {skill}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
    width: '100%',
  },
  skill: {
    backgroundColor: '#bd860fff',
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Skills;