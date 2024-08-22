import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TitleComponent from './TitleComponent';

interface ActualitesComponentProps {
  events: { id: string; imageSource: any; }[];
  onEventPress: (eventId: string) => void;
}

const ActualitesComponent: React.FC<ActualitesComponentProps> = ({ events, onEventPress
     }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {//<TitleComponent title="Actualités & Événements" />
      }
      <View style={styles.eventContainer}>
        {events.map(event => (
          <TouchableOpacity key={event.id} onPress={() => onEventPress(event.id)
            }>
            <Image source={event.imageSource} style={styles.eventImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 16,
  },
  eventContainer: {
    marginBottom: 16,
  },
  eventImage: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ActualitesComponent;
