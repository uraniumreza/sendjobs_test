import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    return (
      <ScrollView style={styles.appContainer}>
        {Object.keys(jobs).map((key, index) => (
          <Category key={index} categoryName={key} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingRight: 5,
    padding: 15,
    backgroundColor: '#FFF',
  },
});

App.propTypes = {
  jobs: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
