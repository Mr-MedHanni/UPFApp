import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons'; // Assuming you're using Expo

interface SearchBarProps {
  placeholder?: string;
  onSearchChange?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "recherche", onSearchChange }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#173C89" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={onSearchChange}
      />
     <Octicons name="filter" size={24} color="#173C89" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#173C89',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    width: '90%',
    marginHorizontal: 16,
    
    
    
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    left:15
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
