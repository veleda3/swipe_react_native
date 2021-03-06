import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';


export default class Deck extends Component {
  constructor(props) {
    super(props);
    // make sure to look at the docs for all the options for pnaResponders
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {}
    });
    this.state = { panResponder }
  }
  renderCards() {
    return this.props.data.map(item => {
        return this.props.renderCard(item);
    })
  };
  render() {
    return (
      <View {...this.state.panResponder.panHandlers}>
        {this.renderCards()}
      </View>
    );
  }
}
