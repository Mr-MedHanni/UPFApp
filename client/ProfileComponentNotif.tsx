import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ProfileComponentProps {
  userImage: ImageSourcePropType;
  userName: string;
}

const ProfileComponentNotif: React.FC<ProfileComponentProps> = ({ userImage, userName }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={userImage} style={styles.Image} />
      <Text style={styles.Name}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#173C89'
  },
});

export default ProfileComponentNotif;
