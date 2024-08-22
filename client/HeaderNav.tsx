import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import ProfileComponent from './ProfileComponent';
import NotificationComponent from './NotificationComponent';

interface HeaderNavProps {
  greeting: string;
  userName: string;
  userImage: ImageSourcePropType;
  onNotificationPress: () => void;
  notificationIcon: ImageSourcePropType;
  notificationCount: number;
  isButtonActive: boolean;
  onToggleButton: () => void;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  greeting,
  userName,
  userImage,
  onNotificationPress,
  notificationIcon,
  notificationCount,
  onToggleButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <View style={styles.rightContainer}>
        <NotificationComponent
          notificationIcon={notificationIcon}
          notificationCount={notificationCount}
          onNotificationPress={onNotificationPress}
        />
        <ProfileComponent userImage={userImage} onToggleButton={onToggleButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  textContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 14,
    color: '#757575',
  },
  userName: {
    fontSize: 18,
    color: '#173C89',
    margin: 5,
    right: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HeaderNav;
