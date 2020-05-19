import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
  
} from 'react-native';

import Logo from '../Icons/logo.png';
import DoubleTab from 'react-native-double-tap';
import { isTablet } from 'react-native-device-info';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    }
    Dimensions.addEventListener("change", (e) => {
       // console.log('change');
      this.setState(e.window);
  });
  }
  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
    this.props.navigation.goBack();
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
      
        break;
    }
  }
 
    render() {
      var fontS=0;
      var fontS1=0;
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
      if(isTablet()===false){
          fontS=16;
          fontS1=14;
        }
        else{
          fontS = this.state.width*0.02;
          fontS1= this.state.width*0.015;
        }
        const { navigation } = this.props;
        return (
          <GestureRecognizer
          //onSwipe={()=>this.onSwipe('SWIPE_UP')}
          onSwipeUp={()=>this.onSwipeUp('SWIPE_UP')}
          onSwipeDown={()=>this.onSwipeDown('SWIPE_DOWN')}
          onSwipeLeft={()=>this.onSwipeLeft('SWIPE_LEFT')}
          onSwipeRight={()=>this.onSwipeRight('SWIPE_RIGHT')}
          config={config}
          style={{
            flex: 1,
            backgroundColor: this.state.backgroundColor
          }}
          >
            <ScrollView style={{padding: 20,paddingBottom:0,backgroundColor:'#efefef'}}>
            <DoubleTab   singleTap={() => {
            console.log("single tap");
          }}
          doubleTap={() => {
            console.log("double tap");
            this.props.navigation.goBack();

          }}
          delay={200}>
                <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
             
                <View style={{flexDirection:'row'}}>
          <View style={{width:'100%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Expense Voucher #</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}>{navigation.getParam('voucherID')}</Text>
               </View>
                   </View>
                  
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Account</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}>{navigation.getParam('Account')}</Text>
               </View>
                   </View>
                   <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Expense Header</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:12,textAlign:'center'}}>{navigation.getParam('ExpenseHeader')}</Text>
               </View>
                   </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Narration</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}>{navigation.getParam('Narration')}</Text>
               </View>
                   </View>
                   <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Expense Amount</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}>Rs. {navigation.getParam('ExpenseAmount')}</Text>
               </View>
                   </View>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewDocument')} style={styles.button}>
           <Text style={[styles.ButtonText,{fontSize:16}]} > View Document</Text>
         </TouchableOpacity>
         </DoubleTab>
                </ScrollView>
                
      </GestureRecognizer>
                )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#41cdfa',
   // borderColor: '#ddd',
   // borderWidth: 1,
   // borderRadius: 2,
   // borderBottomWidth: 0,
   // shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
    padding: 5
  }, topContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  imageContainer: {
    alignItems: 'flex-start',
    borderWidth:1,
    borderRadius:70,
    padding:2,
    borderColor:'#bababa'
  },
    Logo: {
        width:150,
        height:150
    },
    LogoImageContainer:{
        justifyContent: 'center',
         alignItems: 'center',
         
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F27F24',
        padding: 17,
        marginTop:10,
        borderRadius:10,
        marginBottom:100
      },
      ButtonText:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:18
     },
     alignStyle1:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'white',
        borderRadius:2,
        paddingVertical: 5,
        backgroundColor:'#efefef',
        borderRadius: 2,
        borderBottomWidth:4,
        borderBottomColor:'#F27F24',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
        
     }
})

export default Home;
