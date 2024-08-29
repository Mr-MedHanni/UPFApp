import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SubtitleComponentProps {
  subtitle: string;
}

const SubtitleComponent: React.FC<SubtitleComponentProps> = ({ subtitle }) => {
  return <Text style={styles.subtitle}>{subtitle}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 12,
    color: '#757575',
    marginTop: -35,
    left:60
  },
});

export default SubtitleComponent;
