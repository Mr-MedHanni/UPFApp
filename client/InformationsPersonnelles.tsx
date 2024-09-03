import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import IconRetour from './IconRetour';
import TitleComponent from './TitleComponent';
import Info from './info';
import { EvilIcons, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const InformationsPersonnelles: React.FC<{ navigation: any }> = ({ navigation }) => {
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
      onPress: () => navigation.navigate(''),
    },
    {
      iconComponent: <EvilIcons name="location" size={24} color="#8B8B8B" />,
      id: '5',
      title1: 'Location',
      title11: 'Fes, Morocco',
      onPress: () => navigation.navigate(''),
    },
    {
      iconComponent: <EvilIcons name="location" size={24} color="#8B8B8B" />,
      id: '6',
      title1: 'You are',
      // title11: 'Fes, Morocco',
      onPress: () => navigation.navigate(''),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <IconRetour onPress={() => navigation.goBack()} />
        </View>

        {/* Container for Title and Icon */}
        <View style={styles.titleAndIconContainer}>
          <TitleComponent title="Informations personnelles" />
          <TouchableOpacity onPress={() => navigation.navigate('UpdateInformations')}>
            {/*<MaterialCommunityIcons name="file-refresh-outline" size={34} color="#B11072" />*/}
          </TouchableOpacity>
        </View>

        <Info
          name="Change profile picture"
          settingsItems1={settingsItems1}
          email={''}
          navigation={undefined}
        />
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={() => alert('Saved!')}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
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
  saveButton: {
    backgroundColor: '#B11072',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InformationsPersonnelles;
