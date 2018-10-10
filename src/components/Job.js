import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const regex = /^(.*?)[.?!]\s/;

class Job extends Component {
  render() {
    const { job } = this.props;

    return (
      <View style={styles.jobContainer}>
        <View style={styles.jobContent}>
          <Image style={styles.jobImage} source={{ uri: job.image }} />
          <View style={styles.jobDescription}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text numberOfLines={2} style={styles.jobText}>
              {regex.exec(job.description)[0]}
            </Text>
          </View>
        </View>
        <View style={styles.borderLine} />
      </View>
    );
  }
}

Job.propTypes = {
  job: PropTypes.object,
};

const styles = StyleSheet.create({
  jobContainer: {
    marginBottom: 10,
  },
  jobContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobImage: {
    width: 76,
    height: 76,
    borderRadius: 27,
  },
  jobDescription: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'flex-start',
    height: '95%',
  },
  jobTitle: {
    fontSize: 17,
    marginBottom: 5,
    color: '#515151',
  },
  jobText: {
    fontSize: 13,
    color: '#818181',
  },
  borderLine: {
    marginBottom: 5,
    marginLeft: 85,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Job;
