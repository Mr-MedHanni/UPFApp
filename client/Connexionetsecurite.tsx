// InformationsPersonnelles.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Connexionetsecurite: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion et securite</Text>
      {/* Add more content here as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#173C89",
  },
});

export default Connexionetsecurite;
