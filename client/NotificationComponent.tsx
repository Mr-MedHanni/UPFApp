import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NotificationComponentProps {
  notificationCount: number;
  onNotificationPress: () => void;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  notificationCount,
  onNotificationPress,
}) => {
  return (
    <TouchableOpacity onPress={onNotificationPress} style={styles.notificationContainer}>
      <Ionicons name="notifications-outline" size={30} color="#C10074" style={styles.notificationIcon} />
      {/* Show a dot instead of number */}
      {notificationCount > 0 && (
        <View style={styles.notificationDot} />
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
  },
  notificationDot: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f00',
  },
});

export default NotificationComponent;