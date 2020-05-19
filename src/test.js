// 'use strict';

// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 
// class SomeComponent extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       myText: 'I\'m ready to get swiped!',
//       gestureName: 'none',
//       backgroundColor: '#fff'
//     };
//   }
 
//   onSwipeUp(gestureState) {
//     this.setState({myText: 'You swiped up!'});
//   }
 
//   onSwipeDown(gestureState) {
//     this.setState({myText: 'You swiped down!'});
//   }
 
//   onSwipeLeft(gestureState) {
//     this.setState({myText: 'You swiped left!'});
//   }
 
//   onSwipeRight(gestureState) {
//     this.setState({myText: 'You swiped right!'});
//   }
 
//   onSwipe(gestureName, gestureState) {
//     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
//     this.setState({gestureName: gestureName});
//     switch (gestureName) {
//       case SWIPE_UP:
//         this.setState({backgroundColor: 'red'});
//         break;
//       case SWIPE_DOWN:
//         this.setState({backgroundColor: 'green'});
//         break;
//       case SWIPE_LEFT:
//         this.setState({backgroundColor: 'blue'});
//         break;
//       case SWIPE_RIGHT:
//         this.setState({backgroundColor: 'yellow'});
//         break;
//     }
//   }
 
//   render() {
 
//     const config = {
//       velocityThreshold: 0.3,
//       directionalOffsetThreshold: 80
//     };
 
//     return (
//       <GestureRecognizer
//         //onSwipe={()=>this.onSwipe('SWIPE_UP')}
//         onSwipeUp={()=>this.onSwipeUp('SWIPE_UP')}
//         onSwipeDown={()=>this.onSwipeDown('SWIPE_DOWN')}
//         onSwipeLeft={()=>this.onSwipeLeft('SWIPE_LEFT')}
//         onSwipeRight={()=>this.onSwipeRight('SWIPE_RIGHT')}
//         config={config}
//         style={{
//           flex: 1,
//           backgroundColor: this.state.backgroundColor
//         }}
//         >
//         <Text>{this.state.myText}</Text>
//         <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
//       </GestureRecognizer>
//     );
//   }
// }
 
// export default SomeComponent;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

class abc extends React.Component {
  fun = () => {
    const activities = [
      { title: 'Hiking', date: '2019-09-12 17:42:41'},
      { title: 'Shopping', date: '2019-09-13 23:05:42'},
      { title: 'Trekking', date: '2019-09-16 12:55:30' }
    ]
    const sortedActivities = activities.slice().sort((a, b) => new Date(b.date) - new Date(a.date))

    console.log(activities);
    console.log(sortedActivities);
  }
  render(){
    
    this.fun();
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        
      </ViewPager>
    );
  }
  
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default abc;