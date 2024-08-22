import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleEmpProps {
  title: string;
}

const TitleEmp: React.FC<TitleEmpProps> = ({ title }) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 20,
      //  fontFamily: 'JejuGothic',
        marginHorizontal: 16,
        marginBottom: 15,
        color: '#173C89',
        right: 58,
        margin: 35,
      },
      
});

export default TitleEmp;
