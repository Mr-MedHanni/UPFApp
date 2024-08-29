// ProfileScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconRetour from './IconRetour';
import HeaderNav from './HeaderNav';
import TitleComponent from './TitleComponent';
import Profile from './Profile';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen: React.FC = ({ navigation }) => {
  const settingsItems = [
    {
      iconComponent: <Ionicons name="person-circle-outline" size={30} color="#B11072" />,
      title: 'Informations personnelles',
      onPress: () => navigation.navigate('PersonalInfo'),
    },
    {
      iconComponent: <Icon name="security" size={30} color="#B11072" />,
      title: 'Connexion et sécurité',
      onPress: () => navigation.navigate('Security'),
    },
    {
      iconComponent: <AntDesign name="message1" size={30} color="#B11072" />,
      title: 'Messages',
      onPress: () => navigation.navigate('Messages'),
    },
    {
      iconComponent: <MaterialIcons name="question-answer" size={30} color="#B11072" />,
      title: 'Your listings',
      onPress: () => navigation.navigate('listings'),
    },
    {
      iconComponent: <Icon name="exit-to-app" size={30} color="#B11072" />,
      title: 'Déconnexion',
      onPress: () => navigation.navigate('Logout'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconRetour onPress={() => navigation.goBack()} />
        
      </View>
      <TitleComponent title="Profile" />
      
      <Profile
        name="Hanni Mohamed"
        email="hanni-moh@upf.ac.ma"
        navigation={navigation}
        settingsItems={settingsItems}
      />
      
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
});

export default ProfileScreen;
