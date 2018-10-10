import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { JOBS } from './assets/data';
import { actions } from './src/actions/index';

import Category from './src/components/Category';

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  categories: state.categories,
});

class App extends Component {
  componentDidMount() {
    const { dispatch, categories } = this.props;
    JOBS.map((job) => {
      dispatch(actions.addCategory(job.category));
      dispatch(actions.addJob(job));
    });
  }

  render() {
    const { jobs, categories } = this.props;
    return (
      <View>
        {categories.map((category) => (
          <Category categoryName={category} />
        ))}
      </View>
    );
  }
}

export default connect(mapStateToProps)(App);
