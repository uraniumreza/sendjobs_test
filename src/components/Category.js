import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import Job from './Job';

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

class Category extends Component {
  render() {
    const { categoryName, jobs } = this.props;
    const categorizedJobs = jobs[categoryName];
    return (
      <View>
        <Text>{categoryName}</Text>
        <FlatList
          data={categorizedJobs}
          renderItem={({ item }) => <Job job={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Category);
