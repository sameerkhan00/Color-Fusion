import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Button,
} from 'react-native';

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

  componentDidMount() {}

  render() {
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
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 10,
          }}
        />
        <View
          style={{
            height: height / 2,
            width: '80%',
            zIndex: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: height * 0.08,
              fontFamily: 'serif',
              fontWeight: 'bold',
              color: '#ffffff',
            }}>
            COLOR FUSION
          </Text>
          <TouchableOpacity style={{width: '100%'}}>
            <Button
              title="Start Playing"
              color="red"
              onPress={() => this.props.navigation.navigate('Main')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Splash;
