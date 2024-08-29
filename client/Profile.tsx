import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileImage from './ProfileImage';

interface SettingsItemProps {
  iconComponent: React.ReactNode;
  title: string;
  onPress: () => void;
}

interface ProfileProps {
  name: string;
  email: string;
  navigation: any;
  settingsItems: SettingsItemProps[];
}

const Profile: React.FC<ProfileProps> = ({ name, email, navigation, settingsItems }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileInfo}>
        <ProfileImage imageSource={require('./assets/profile.jpg')} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        {settingsItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.settingsItem}
            onPress={item.onPress}
          >
            <View style={styles.itemLeft}>
              {item.iconComponent}
              <Text style={styles.settingsText}>{item.title}</Text>
            </View>
            <AntDesign name="right" size={20} color="#B11072" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileName: {
    color: "#173C89",
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },
  settingsContainer: {
    marginTop: 24,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    color: "#173C89",
    marginLeft: 16,
    fontSize: 16,
  },
});

export default Profile;
