import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { JOBS } from './assets/data';
import { actions } from './src/actions/index';

import Category from './src/components/Category';

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    JOBS.map((job) => {
      dispatch(actions.addJob(job));
    });
  }

  render() {
    const { jobs } = this.props;
    console.log(jobs);
    return (
      <View>
        {Object.keys(jobs).map((key) => (
          <Category categoryName={key} />
        ))}
        <Text>Jobs</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(App);
