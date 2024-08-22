// IconRetour.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // Example using Ionicons

interface IconRetourProps {
  onPress: () => void;
}

const IconRetour: React.FC<IconRetourProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      
      <AntDesign name="left" size={40} color="#C10074" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    marginTop:50
    
  },
});

export default IconRetour;
