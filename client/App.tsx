import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderNav from './HeaderNav';
import ActualitesComponent from './ActualitesComponent';
import HorizontalMenu from './HorizontalMenu';
import TitleComponent from './TitleComponent';
import { ImageSourcePropType } from 'react-native';
import UPFemploiPage from './UPFemploiPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

// Navigation setup
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
          options={{ headerShown: false }} // Disable the header for Home screen
        />
        <Stack.Screen
          name="UPFLaureat"
          component={UPFemploiPage}
          options={{ headerShown: false }} // Disable the header for UPFLaureat screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Main App Component
const App: React.FC = ({ navigation }: any) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const localImage: ImageSourcePropType = require('./assets/profile.jpg');
  const localImage1: ImageSourcePropType = require('./assets/notif.jpg');

  const handleNotificationPress = () => {
    console.log('Notification icon pressed');
  };

  const handleToggleButton = () => {
    setIsButtonActive(!isButtonActive);
  };

  const events = [
    { id: '1', imageSource: require('./assets/event1.jpg') },
    { id: '2', imageSource: require('./assets/event2.jpg') },
    { id: '3', imageSource: require('./assets/event3.jpg') },
    { id: '4', imageSource: require('./assets/event3.jpg') },
  ];

  const menuItems = [
    { id: '1', title: 'Actualités &\névénements', icon:<Ionicons name="sparkles-outline" size={24} color="white" />, selected: true },
    { id: '2', title: 'Complexe\nsportif', icon: <Ionicons name="football" size={24} color="#173C89" />, selected: false },
    { id: '3', title: 'Bibliothèque', icon: <FontAwesome5 name="book-reader" size={24} color="#173C89" />, selected: false },
    { id: '4', title: 'UPF Laureat', icon: <MaterialIcons name="groups" size={24} color="#173C89" />, selected: false },
    { id: '5', title: 'La pause', icon: <MaterialCommunityIcons name="food-fork-drink" size={24} color="#173C89" />, selected: false },
    { id: '6', title: 'BDE / clubs', icon: <MaterialIcons name="groups" size={24} color="#173C89" />, selected: false },  
  ];

  const handleMenuItemPress = (id: string) => {
    if (id === '4') {
      navigation.navigate('UPFLaureat');
    }
    console.log(`Menu item ${id} pressed`);
  };

  const handleEventPress = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <View style={styles.container}>
      <HeaderNav
        greeting="Bonjour 😊"
        userName="Mohammed Hanni"
        userImage={localImage}
        onNotificationPress={handleNotificationPress}
        notificationIcon={localImage1}
        notificationCount={1}
        isButtonActive={isButtonActive}
        onToggleButton={handleToggleButton}
      />

      <HorizontalMenu menuItems={menuItems} onMenuItemPress={handleMenuItemPress} />

      <TitleComponent title="Actualités & Événements" />

      <ScrollView style={styles.scrollView}>
        <ActualitesComponent events={events} onEventPress={handleEventPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    flex: 1,
  },
  scrollView: {
    borderRadius: 10,
    maxHeight: 555, // Limit the height of the ScrollView
  },
});

export default MainNavigator;
