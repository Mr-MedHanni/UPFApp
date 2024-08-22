import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface JobButtonsComponentProps {
  onReadMore: () => void;
  onApplyNow: () => void;
}

const JobButtonsComponent: React.FC<JobButtonsComponentProps> = ({ onReadMore, onApplyNow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.readMoreButton} onPress={onReadMore}>
        <Text style={styles.readMoreText}>Read more</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyNowButton} onPress={onApplyNow}>
        <Text style={styles.applyNowText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  readMoreButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  readMoreText: {
    color: '#173C89',
    
  },
  applyNowButton: {
    backgroundColor: '#B11072',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
    left:40
  },
  applyNowText: {
    color: '#fff',
  },
});

export default JobButtonsComponent;
