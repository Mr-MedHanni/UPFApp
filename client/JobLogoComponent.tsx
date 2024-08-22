import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface JobLogoComponentProps {
  logoSource: any;
}

const JobLogoComponent: React.FC<JobLogoComponentProps> = ({ logoSource }) => {
  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginTop: -40, // Move the logo upwards by half its height
  },
  logo: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    borderWidth: 2,
    borderColor: '#B11072',
  },
});

export default JobLogoComponent;
