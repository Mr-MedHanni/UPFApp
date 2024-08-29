// ProfileImage.tsx

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ProfileImageProps {
  imageSource: any;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageSource }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default ProfileImage;
