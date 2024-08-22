import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface ProfileComponentProps {
  userImage: ImageSourcePropType;
  onToggleButton: () => void;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ userImage, onToggleButton }) => {
  return (
    <View>
      <TouchableOpacity onPress={onToggleButton}>
        <Image source={userImage} style={styles.userImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: '#B11072',
  },
});

export default ProfileComponent;
