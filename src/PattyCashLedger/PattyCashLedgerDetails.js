import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import DoubleTab from 'react-native-double-tap';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import Logo from '../Icons/logo.png';
import { isTablet } from 'react-native-device-info';
//import { findRepos } from 'jest-changed-files';
class Home extends Component {
   config
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
              //console.log('change');
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
      

    //   onLayout(e) {
    //     this.setState({
    //       width: Dimensions.get('window').width,
    //       height: Dimensions.get('window').height,
          
    //     });
        
      //borderWidth:1,marginHorizontal:this.state.width*0.05,paddingVertical:this.state.height*0.008
    render() {
      var fontS=0;
      var fontS1=0;
      const config = {
         velocityThreshold: 0.3,
         directionalOffsetThreshold: 80
       };
      var PD =0 ;
      var PD1=0;
      if(isTablet()===false){
          fontS=16;
          fontS1=14;
          PD=5;
          PD1=5;
        }
        else{
          fontS = this.state.width*0.02;
          fontS1= this.state.width*0.015;
          PD = this.state.width*0.05;
          PD1=20;
          
        }
        const { navigation } = this.props;
        //console.log(navigation.getParam('Balance'));
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
            <ScrollView  >
               <View style={{padding: PD,backgroundColor:'#efefef',justifyContent:'center',height:this.state.height,paddingBottom:100}}>
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
             
           <View  style={styles.button}>
           <Text style={styles.ButtonText} > Patty Cash Ledger Details</Text>
         </View>
         <View style={{padding:PD}}> 

          <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Balance</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
        <Text style={{fontSize:fontS1,textAlign:'center'}}>Rs. {navigation.getParam('Balance')}</Text>
               </View>
                   </View>
                   <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Date</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}> {navigation.getParam('Date')}</Text>
               </View>
                   </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Voucher Number</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}> {navigation.getParam('voucher')}</Text>
               </View>
                   </View>
                   <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Narration</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}> {navigation.getParam('Narration')}</Text>
               </View>
                   </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Ammount Paid</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}>{navigation.getParam('Profit')!==undefined ? 'Rs. '+navigation.getParam('Profit'):null}</Text>
               </View>
                   </View>
                   <View style={{width:'50%'}}>
               <View style={[styles.alignStyle1]}>
                  <Text style={{fontSize:fontS,textAlign:'center',fontWeight:'bold'}}>Expenses</Text>
               </View>
               <View style={{borderWidth:2,borderTopWidth:0,borderColor:'#bababa',marginHorizontal:5,paddingVertical:this.state.height*0.01}}>
                  <Text style={{fontSize:fontS1,textAlign:'center'}}> {navigation.getParam('Expense')!==undefined? 'Rs. '+navigation.getParam('Expense'):null}</Text>
               </View>
                   </View>
          </View>
             
            
            </View>
            </DoubleTab>
            </View>
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
        marginBottom:10,
        borderRadius:10
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
      borderBottomColor:'red',
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
