import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IconRetour from './IconRetour';
import TitleComponent from './TitleComponent';
import Info from './info';
import { EvilIcons, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const UpdateInformations: React.FC<{ navigation: any }> = ({ navigation }) => {
  const settingsItems1 = [
    {
      iconComponent: <EvilIcons name="user" size={24} color="#8B8B8B" />,
      id: '1',
      title1: 'Username',
      title11: 'Mohamed Hanni',
      onPress: () => navigation.navigate('InformationsPersonnelles'),
    },
    {
      iconComponent: <MaterialCommunityIcons name="email-fast-outline" size={24} color="#8B8B8B" />,
      id: '2',
      title1: 'Email',
      title11: 'hanni-moh@upf.ac.ma',
      onPress: () => navigation.navigate('Connexionetsecurite'),
    },
    {
      iconComponent: <Ionicons name="call-outline" size={24} color="#8B8B8B" />,
      id: '3',
      title1: 'Phone',
      title11: '0652485685',
      onPress: () => navigation.navigate('UpdateInformations'),
    },
    {
      iconComponent: <FontAwesome name="shopping-bag" size={24} color="#8B8B8B" />,
      id: '4',
      title1: 'Job Title',
      title11: 'Front-end Dev',
      onPress: () => navigation.navigate('listings'),
    },
    {
      iconComponent: <EvilIcons name="location" size={24} color="#8B8B8B" />,
      id: '5',
      title1: 'Location',
      title11: 'Fes, Morocco',
      onPress: () => navigation.navigate('Logout'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconRetour onPress={() => navigation.goBack()} />
      </View>

      {/* Container for Title and Icon */}
      <View style={styles.titleAndIconContainer}>
        <TitleComponent title=" Update Informations" />
       
      </View>

      <Info
        settingsItems1={settingsItems1} name={''} email={''} navigation={undefined}      />
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
  titleAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items on opposite ends
    alignItems: 'center', // Center vertically
    paddingHorizontal: 16,
    marginTop: 10, // Add margin for spacing
  },
});

export default UpdateInformations;
 
