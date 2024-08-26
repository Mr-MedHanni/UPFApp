import React from 'react';
import { View, StyleSheet, ScrollView, ImageSourcePropType } from 'react-native';
import HeaderNav from './HeaderNav';
import TitleComponent from './TitleComponent';
import SearchBar from './SearchBar'; 
import IconRetour from './IconRetour'; 
import JobCardComponent from './JobCardComponent';

const UPFemploiPage: React.FC = ({ navigation }) => {
  const localImage: ImageSourcePropType = require('./assets/profile.jpg');
  const localImage1: ImageSourcePropType = require('./assets/notif.jpg');

  const handleNotificationPress = () => {
    navigation.navigate('Notifications'); // Navigate to the Notifications screen
  };

  // Sample job data array
  const jobData = [
    {
      logoSource: require('./assets/cgi-logo.png'),
      title: "Développeur Fullstack JAVA / Angular",
      company: "CGI",
      location: "Fès",
      date: "Offre publiée il y a plus de 10 jours",
    },
    {
      logoSource: require('./assets/ATIJARI.png'),
      title: "Designer UI/UX",
      company: "Atos",
      location: "Casablanca",
      date: "Offre publiée il y a 5 jours",
    },
    {
      logoSource: require('./assets/IBM.png'),
      title: "Project Manager",
      company: "IBM",
      location: "Rabat",
      date: "Offre publiée il y a 3 jours",
    },
    // Add more jobs as needed
  ];

  const handleToggleButton = () => {
    // Toggle logic here
  };

  const handleSearchChange = (text: string) => {
    console.log(text);
  };

  const handleReadMore = () => {
    console.log('Read more clicked');
  };

  const handleApplyNow = () => {
    console.log('Apply Now clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IconRetour onPress={() => navigation.goBack()} />
        <HeaderNav
          userImage={localImage}
          onNotificationPress={handleNotificationPress}
          notificationIcon={localImage1}
          notificationCount={1}
          isButtonActive={false}
          onToggleButton={handleToggleButton}
          greeting={''}
          userName={''}
        />
      </View>

      <TitleComponent title="offres d'emplois" />

      <SearchBar onSearchChange={handleSearchChange} />

      <ScrollView style={styles.scrollView}>
        {jobData.map((job, index) => (
          <JobCardComponent
            key={index}
            logoSource={job.logoSource}
            title={job.title}
            company={job.company}
            location={job.location}
            date={job.date}
            onReadMore={handleReadMore}
            onApplyNow={handleApplyNow}
          />
        ))}
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
  scrollView: {
    marginHorizontal: 16,
    marginTop: 10,
  },
});

export default UPFemploiPage;
