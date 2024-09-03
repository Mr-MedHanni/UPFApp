import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import ProfileImage from './ProfileImage';

interface SettingsItemProps1 {
  title11?: React.ReactNode;
  iconComponent: React.ReactNode;
  title1: string;
  onPress: () => void;
  id: string;
}

interface ProfileProps1 {
  name: string;
  email: string;
  navigation: any;
  settingsItems1: SettingsItemProps1[];
}

const Info: React.FC<ProfileProps1> = ({ name, email, navigation, settingsItems1 }) => {
  const [checked, setChecked] = useState<string>('Etudiant'); // State to manage selected radio button

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileInfo}>
        <ProfileImage imageSource={require('./assets/profile.jpg')} />
        <TouchableOpacity>
          <Text style={styles.profileName}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingsContainer}>
        {settingsItems1.map((item, index) => {
          if (item.id === '6') {
            // Render radio button group for item with id '6'
            return (
              <View key={index} style={styles.settingsItem}>
                <View style={styles.itemLeft}>
                  {item.iconComponent}
                  <View style={styles.textInputContainer}>
                    <Text style={styles.settingsText}>{item.title1}</Text>
                    <View style={styles.radioGroup}>
                      <View style={styles.radioOption}>
                        <RadioButton
                          value="Etudiant"
                          status={checked === 'Etudiant' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('Etudiant')}
                        />
                        <Text>Etudiant</Text>
                      </View>
                      <View style={styles.radioOption}>
                        <RadioButton
                          value="Lauriat"
                          status={checked === 'Lauriat' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('Lauriat')}
                        />
                        <Text>Lauriat</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          } else {
            // Render normal settings items
            return (
              <View key={index} style={styles.settingsItem}>
                <View style={styles.itemLeft}>
                  {item.iconComponent}
                  <View style={styles.textInputContainer}>
                    <Text style={styles.settingsText}>{item.title1}</Text>
                    {item.title11 && <TextInput style={styles.settingsInput} value={item.title11 as string} />}
                  </View>
                </View>
              </View>
            );
          }
        })}
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
      color: '#000000',
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 4,
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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textInputContainer: {
      flexDirection: 'column',
      marginLeft: 16,
      flex: 1, // Allows the container to use full width
    },
    settingsText: {
      color: '#173C89',
      fontSize: 12,
      marginBottom: 4,
    },
    settingsInput: {
      color: '#000000',
      fontSize: 14,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 0,
      paddingHorizontal: 8,
      paddingVertical: 4,
      width: '100%', // Makes the input stretch horizontally
    },
  
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default Info;
