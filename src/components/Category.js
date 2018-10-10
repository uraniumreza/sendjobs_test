import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Job from './Job';

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

class Category extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { categoryName, jobs } = this.props;
    const categorizedJobs = jobs[categoryName];
    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>
          {this.capitalizeFirstLetter(categoryName)}
        </Text>
        <FlatList
          data={categorizedJobs}
          renderItem={({ item }) => <Job job={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  }
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  jobs: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 5,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 7,
  },
});

export default connect(mapStateToProps)(Category);
