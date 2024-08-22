import React from 'react';
import { View, StyleSheet } from 'react-native';
import JobLogoComponent from './JobLogoComponent';
import JobDetailsComponent from './JobDetailsComponent';
import JobButtonsComponent from './JobButtonsComponent';

interface JobCardComponentProps {
  logoSource: any;
  title: string;
  company: string;
  location: string;
  date: string;
  onReadMore: () => void;
  onApplyNow: () => void;
}

const JobCardComponent: React.FC<JobCardComponentProps> = ({
  logoSource,
  title,
  company,
  location,
  date,
  onReadMore,
  onApplyNow,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoDetailsContainer}>
        <JobLogoComponent logoSource={logoSource} />
        <JobDetailsComponent
          title={title}
          company={company}
          location={location}
          date={date}
        />
      </View>
      <JobButtonsComponent onReadMore={onReadMore} onApplyNow={onApplyNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginVertical: 30,
  },
  logoDetailsContainer: {
    flexDirection: 'row',
  },
});

export default JobCardComponent;
