import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Job from './Job';

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

class Category extends Component {
  render() {
    const { categoryName, jobs } = this.props;

    return (
      <View>
        <Text>{categoryName}</Text>
        {jobs[categoryName].map((job) => (
          <Job job={job} />
        ))}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Category);
