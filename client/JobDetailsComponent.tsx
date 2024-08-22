import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleEmp from './TitleEmp';

interface JobDetailsComponentProps {
  title: string;
  company: string;
  location: string;
  date: string;
}

const JobDetailsComponent: React.FC<JobDetailsComponentProps> = ({ title, company, location, date }) => {
  return (
    <View style={styles.container}>
      <TitleEmp title={title}  />
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    //backgroundColor:'#B3B3B3'

  },
  text: {
    
  },
  company: {
    color: 'gray',
    right: 40,
    marginTop:-7
    
  },
  location: {
    color: 'gray',
    marginTop: 6,
    right: 40,
  },
  date: {
    color: 'gray',
    right: 40,
    
  },
});

export default JobDetailsComponent;
