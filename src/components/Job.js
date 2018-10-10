import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const regex = /^(.*?)[.?!]\s/;

class Category extends Component {
  render() {
    const { job } = this.props;

    return (
      <View>
        <Text>{job.title}</Text>
        <Image style={{ width: 64, height: 64 }} source={{ uri: job.image }} />
        <Text>{regex.exec(job.description)[0]}</Text>
      </View>
    );
  }
}

export default Category;
