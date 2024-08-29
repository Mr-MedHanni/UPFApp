import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, ImageSourcePropType } from 'react-native';
import TitleComponent from './TitleComponent';
import IconRetour from './IconRetour';
import HeaderNav from './HeaderNav';
import SearchBar from './SearchBar';
import ProfileComponentNotif from './ProfileComponentNotif';
import SubtitleComponent from './SubtitleComponent';

const NotificationScreen: React.FC = ({ navigation }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const localImage: ImageSourcePropType = require('./assets/profile.jpg');
  const localImage2: ImageSourcePropType = require('./assets/hanni.jpg');
  const handleSearchChange = (text: string) => {
    // Implement search functionality here
  };

  // Sample notifications data
  const notifications = [
    { id: '1', name: 'Milha Mohammed Amine', subtitle: 'test', image: localImage },
    { id: '2', name: 'HANNI MOHAMED', subtitle: 'test', image: localImage2 },
    { id: '3', name: 'Alami Anas', subtitle: 'test', image: localImage },
  ];
  const handleToggleButton = () => {
    setIsButtonActive(!isButtonActive);
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconRetour onPress={() => navigation.goBack()} />
        <HeaderNav 
          userImage={localImage} 
          greeting={''} 
          userName={''}
          showNotificationIcon={false}
          isButtonActive={isButtonActive}
          onToggleButton={handleToggleButton}
        />
      </View>

      <TitleComponent title="Notification Liste" />

      <SearchBar onSearchChange={handleSearchChange} />

      <ScrollView style={styles.scrollView}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <ProfileComponentNotif userImage={notification.image} userName={notification.name} />
            <SubtitleComponent subtitle={notification.subtitle} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  notificationItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 13,
    marginBottom: 12,
  },
});

export default NotificationScreen;
