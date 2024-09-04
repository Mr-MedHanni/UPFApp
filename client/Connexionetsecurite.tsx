import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import IconRetour from './IconRetour';
import TitleComponent from './TitleComponent';
import InputField from './InputField';


const Connexionetsecurite: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    // Add your save logic here
    alert('Saved!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconRetour onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.titleAndIconContainer}>
          <TitleComponent title="Connexion et sécurité" />
        </View>

        <InputField
          title="Current Password"
          placeholder="Enter your current password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <InputField
          title="Create Password"
          placeholder="Create a new password"
          value={createPassword}
          onChangeText={setCreatePassword}
        />

        <InputField
          title="Confirm Password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

<TouchableOpacity style={styles.saveButton} onPress={() => alert('Saved!')}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
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
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  titleAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // Add some margin below the title
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

export default Connexionetsecurite;
