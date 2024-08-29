// ProfileComponent.tsx

import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ProfileComponentProps {
  userImage: ImageSourcePropType;
  onToggleButton: () => void;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ userImage, onToggleButton }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profile'); // Navigate to the Profile screen
    onToggleButton();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleProfilePress}>
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
