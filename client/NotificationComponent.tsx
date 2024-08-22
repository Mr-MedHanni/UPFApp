import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

interface NotificationComponentProps {
  notificationIcon: ImageSourcePropType;
  notificationCount: number;
  onNotificationPress: () => void;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  notificationIcon,
  notificationCount,
  onNotificationPress,
}) => {
  return (
    <TouchableOpacity onPress={onNotificationPress} style={styles.notificationContainer}>
      <Image source={notificationIcon} style={styles.notificationIcon} />
      {notificationCount > 0 && (
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>{notificationCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    position: 'relative',
    marginRight: 16,
  },
  notificationIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#ccc',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#f00',
    borderRadius: 8,
    padding: 2,
    minWidth: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
});

export default NotificationComponent;
