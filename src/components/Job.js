import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Category extends Component {
  render() {
    const { job } = this.props;

    return (
      <View>
        <Text>{job.title}</Text>
        <Image src={job.image} />
        <Text>{job.description}</Text>
      </View>
    );
  }
}

export default Category;
