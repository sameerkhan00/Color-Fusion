import React, {Component} from 'react';
import {Text, View, Dimensions, Animated} from 'react-native';

const {height, width} = Dimensions.get('screen');
export class Splash extends Component {
  constructor() {
    super();
    this.state = {
      viewScale1: new Animated.Value(1),
      viewScale2: new Animated.Value(1),
      viewScale3: new Animated.Value(1),
      viewScale4: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.handleAnimationUpdate(this.state.viewScale1);

    setTimeout(() => this.handleAnimationUpdate(this.state.viewScale2), 2000);
    setTimeout(() => this.handleAnimationUpdate(this.state.viewScale3), 4000);
    setTimeout(() => {
      this.handleAnimationUpdate(this.state.viewScale4);
    }, 6000);
    setTimeout(() => {
      this.props.navigation.navigate('Start');
    }, 10000);
  }

  handleAnimationUpdate = val => {
    Animated.timing(val, {
      toValue: 2,
      duration: 2000,
    }).start();
  };
  render() {
    const {viewScale1, viewScale2, viewScale3, viewScale4} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            height: height / 2,
            width: width / 2,
            backgroundColor: '#76f58b',
            transform: [{scale: viewScale1}],
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <Animated.View
          style={{
            height: height / 2,
            width: width / 2,
            backgroundColor: '#98a6b8',
            transform: [{scale: viewScale2}],
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
          }}
        />
        <Animated.View
          style={{
            height: height / 2,
            width: width / 2,
            backgroundColor: '#edb4ea',
            transform: [{scale: viewScale3}],
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />
        <Animated.View
          style={{
            height: height / 2,
            width: width / 2,
            backgroundColor: '#fcba03',
            transform: [{scale: viewScale4}],
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 10,
          }}
        />
        <Text
          style={{
            fontSize: height * 0.08,
            fontFamily: 'serif',
            fontWeight: 'bold',
            color: '#ffffff',
            zIndex: 100,
          }}>
          COLOR FUSION
        </Text>
      </View>
    );
  }
}

export default Splash;
