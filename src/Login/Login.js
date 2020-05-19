 import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, state,Image,TextInput,Dimensions, ScrollView, BackHandler,Alert } from 'react-native';
//import styles from './Button.component.style.js';
import styles from './Login.component.style.android.js';
import Logo from '../Icons/logo.png';
import { getUniqueId, getManufacturer, isTablet, getPhoneNumber } from 'react-native-device-info';
//import qs from 'querystring';
import {emailChanged,passwordChanged,loginUser} from './actions';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { CheckBox } from 'react-native-elements';

import * as Keychain from 'react-native-keychain';

import TouchID from 'react-native-touch-id';
class SignIn extends Component {
  
  constructor() {
    super();

    /**
    * Returns true if the screen is in portrait mode
    */
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
     // console.log();
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
      screenHeight: Math.round(Dimensions.get('window').height),
      screenWidth: Math.round(Dimensions.get('window').width),
      username: '',
      password: '',
      isLoggingIn: false,
      message: '',
      checked:false,
      touch:false,
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
        screenHeight: Math.round(Dimensions.get('window').height),
        screenWidth: Math.round(Dimensions.get('window').width)
  
      });
    });

  }
 
  
  componentDidMount() {
    console.log('mohello');
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    console.log('umhello');
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentDidMount(){

    const optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: 'blue', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Please authenticate to proceed', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };


    TouchID.isSupported()
  .then(biometryType => {
    if (biometryType === 'TouchID') {
      // Touch ID is supported on iOS
      this.setState({touch:true})
    } else if (biometryType === 'FaceID') {
      // Face ID is supported on iOS
      this.setState({touch:true})
    } else if (biometryType === true) {
      // Touch ID is supported on Android
      this.setState({touch:true})
    }
  })
  .catch(error => {
    // User's device does not support Touch ID (or Face ID)
    // This case is also triggered if users have not enabled Touch ID on their device
  });
    Keychain.getGenericPassword()   // Retrieve the credentials from the keychain
    .then(credentials => {
      //console.log('crereeu',credentials);
      if(credentials!==false){
        TouchID.authenticate('To login with username "'+credentials.username+'"', optionalConfigObject).then(success =>
          this.props.navigation.navigate('Home')
        );
      }
     
    });

    }
    onButtonPress = () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      // then navigate
      console.log('hello');
      navigate('NewScreen');
    }
    
    handleBackButton = () => {
      console.log('bababa')
     Alert.alert(
         'Exit App',
         'Exiting the application?', [{
             text: 'Cancel',
             onPress: ()=>console.log('Cancel Pressed'),
             style: 'cancel'
         }, {
             text: 'OK',
             onPress: ()=>BackHandler.exitApp()
         }, ], {
             cancelable: false
         }
      )
      return true;
    } 
  
  getLoginAPI = () => {

    // let details = {
    //     //email: 'eve.holt@reqres.in',
    //     //password: 'cityslicka'
    //     email: this.state.username,
    //     password: this.state.password
    // };

    // let formBody = [];
    // for (let property in details) {
    //     let encodedKey = encodeURIComponent(property);
    //     let encodedValue = encodeURIComponent(details[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    // fetch('https://reqres.in/api/login/', {
    //     method: 'POST',
    //     headers: {
    //         //'Authorization': 'Bearer token',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: formBody
    // }).then((response) => response.json())
    //     .then((responseData) => {
    //         console.log(responseData);  
    //         this.setState({message: responseData});
    //         if(responseData.token!==undefined){
    //           const {navigate} = this.props.navigation;
    //           navigate('Home', {token: this.state.message.token});
    //         }
    //     })
    //     .done();
        const {navigate} = this.props.navigation;
        navigate('Home', {token: this.state.message.token});
};

  
  render() {
  //  var DeviceInfo = require('react-native-device-info');
 
//console.log("Device Unique ID", getUniqueId()); 
//console.log("Tablet", isTablet()); 

var fontS=0;
var fa=0;
if(isTablet()===false){
    fontS=this.state.screenHeight*0.12;
    fa=14;
  }
  else{
    fontS = this.state.screenHeight*0.11;
    fa=16;
  }
    if (this.state.orientation === 'portrait') {
      return (
          //Render View to be displayed in portrait mode
          //<ScrollView>
          <View style={{backgroundColor:'#F27F24',height:Math.round(Dimensions.get('window').height)}}> 
          <View style={{ backgroundColor:'rgb(255,255,255)',
          marginHorizontal: Math.round(Dimensions.get('window').width)*0.08,
          marginVertical: Math.round(Dimensions.get('window').height)*0.08,
           // marginTop: Math.round(Dimensions.get('window').height)*0.02,
           // alignContent:'center',
           //marginHorizontal: Math.round(Dimensions.get('window').width)*0.,
           // marginBottom: Math.round(Dimensions.get('window').height)*0.1,
            borderColor:'#d1d1d1',
            borderWidth:1, 
            borderRadius:20, 
            padding:30,
            flex:1,
            //marginRight: Math.round(Dimensions.get('window').width)*0.2,
            justifyContent:'center',
            }}>
              <View  style={styles.LogoImageContainer}>
                <Image source={Logo}
                style={styles.LogoImageStyle}
                />
                </View>
              
                <View style={{ flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#d1d1d1',
                  height: Math.round(Dimensions.get('window').height)*0.07,
                  borderRadius: 15,
                  margin:5,
                  marginBottom:8}}>
                <Image
                    source={require("../Icons/envelope.png")}
                    style={styles.ImageStyle}
                />
                
                <TextInput  keyboardType='email-address' value={this.props.loginUsers.email} onChangeText={value => this.props.emailChanged(value)} style={{flex:1 }} autoCompleteType='email' placeholder="Email"/>
                </View>
                <View style={{ flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#d1d1d1',
                  height: Math.round(Dimensions.get('window').height)*0.07,
                  borderRadius: 15,
                  margin:5,
                  marginBottom:8}}>
                <Image
                    source={require("../Icons/padlock.png")}
                    style={styles.ImageStyle}
                />
                <TextInput  value={this.props.loginUsers.password} onChangeText={value => this.props.passwordChanged(value)} style={{flex:1 }} secureTextEntry={true} password={true}  placeholder="Password"/>
         
                </View>
                {
                  this.state.touch ? 
                  <CheckBox
                  title='Enable TouchID'
                  checked={this.state.checked}
                  onPress={() => this.setState({checked: !this.state.checked})}
                />
                  : null

                }
             
           <TouchableOpacity style={styles.forgetpasswordContainer}
            >
              {
                this.props.loginUsers.error!==''?
                <Text style={{color:'red', marginLeft:15}}>{this.props.loginUsers.error}</Text>
                : null
              }
               
          <Text style={[styles.forgetpassword,{fontSize:fa}]}>Forgot Password?</Text>
         </TouchableOpacity>
    
            
           <TouchableOpacity onPress={()=>this.props.loginUser(this.props.email,this.props.password,this.props.navigation,this.state.checked)} style={styles.button}>
           <Text style={styles.LoginText} > LOGIN </Text>
         </TouchableOpacity>
      
      
       </View>
    
       </View>
        
        //</ScrollView>
    
       );
    }
    else {
      return (
        //Render View to be displayed in landscape mode
        <View>
          <Spinner
					//visibility of Overlay Loading Spinner
					visible={this.props.loginUsers.loading}
					//Text with the Spinner 
					textContent={'Loading...'}
					//Text style of the Spinner Text
					textStyle={styles.spinnerTextStyle}
				/>
        <View style={{backgroundColor:'#F27F24', height: Math.round(Dimensions.get('window').height)}}> 
        <View style={{
            backgroundColor:'rgb(255,255,255)',
            marginTop: Math.round(Dimensions.get('window').height)*0.02,
           // alignContent:'center',
           marginLeft: Math.round(Dimensions.get('window').width)*0.2,
            marginBottom: Math.round(Dimensions.get('window').height)*0.098,
            borderColor:'#d1d1d1',
            borderWidth:1, 
            borderRadius:20, 
            padding:30,
            flex:1,
            marginRight: Math.round(Dimensions.get('window').width)*0.2,
            justifyContent:'center'
        }
          

        }>
        <View  style={newStyle.LogoImageContainer}>
              <Image source={Logo}
              style={{width:this.state.screenHeight*0.18,
              height:this.state.screenHeight*0.18}}
              />
              </View>
              <View style={{ flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      height: fontS,
      borderRadius: 15,
      margin:5,
      marginBottom:8}}>
              <Image
                  source={require("../Icons/envelope.png")}
                  style={newStyle.ImageStyle}
              />
              <TextInput  value={this.props.loginUsers.email} onChangeText={value => this.props.emailChanged(value)} style={{flex:1 }} placeholder="Email"/>
              </View>   
              <View style={{ flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      height: fontS,
      borderRadius: 15,
      margin:5,
      marginBottom:8}}>
              <Image
                  source={require("../Icons/padlock.png")}
                  style={newStyle.ImageStyle}
              />
              <TextInput  value={this.props.loginUsers.password} onChangeText={value => this.props.passwordChanged(value)}  style={{flex:1 }} secureTextEntry={true} password={true}  placeholder="Password"/>
       
              </View>
              <TouchableOpacity style={newStyle.forgetpasswordContainer1}
          >
             {
                  this.state.touch ? 
                  <CheckBox
                  title='Enable TouchID'
                  checked={this.state.checked}
                  onPress={() => this.setState({checked: !this.state.checked})}
                />
                  : null
              }

{
                this.props.loginUsers.error!==''?
                <Text style={{color:'red', marginLeft:15}}>{this.props.loginUsers.error}</Text>
                : null
              }
             
        <Text style={[newStyle.forgetpassword,{fontSize:fa}]}>Forgot Password?</Text>
       </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.props.loginUser(this.props.loginUsers.email,this.props.loginUsers.password,this.props.navigation)} style={{ alignItems: 'center',
      backgroundColor: '#F27F24',
      justifyContent:'center',
     height:fontS,
      borderRadius:20}}>
         <Text style={{color:'white', 
      fontWeight:'bold',
      fontSize:fa,
      padding:this.state.screenHeight*0.015}} > LOGIN </Text>
       </TouchableOpacity>
    
        </View>
       </View>
      </View>

      );
    }

  }

  
	
}

const newStyle = StyleSheet.create({
  container: {
    backgroundColor:'rgb(255,255,255)',
      marginTop: Math.round(Dimensions.get('screen').height)*0.15,
      marginLeft: Math.round(Dimensions.get('window').width)*0.05,
      marginBottom: Math.round(Dimensions.get('window').height)*0.20,
      borderColor:'#d1d1d1',
      borderWidth:1, 
      borderRadius:20, 
      padding:30,
      flex:1,
      marginRight: Math.round(Dimensions.get('window').width)*0.05,
},
  container1 : {
    backgroundColor:'rgb(255,255,255)',
    marginTop: Math.round(Dimensions.get('window').height)*0.02,
   // alignContent:'center',
   marginLeft: Math.round(Dimensions.get('window').width)*0.2,
    marginBottom: Math.round(Dimensions.get('window').height)*0.098,
    borderColor:'#d1d1d1',
    borderWidth:1, 
    borderRadius:20, 
    padding:30,
    flex:1,
    marginRight: Math.round(Dimensions.get('window').width)*0.2,
  },
  LogoImageContainer:{
      justifyContent: 'center',
       alignItems: 'center',
       
  },
  LogoImageStyle: {
      width:Math.round(Dimensions.get('window').height)*0.19,
      height:Math.round(Dimensions.get('window').height)*0.19
  },
  LogoImageStyle1: {
    width:Math.round(Dimensions.get('window').height)*0.18,
    height:Math.round(Dimensions.get('window').height)*0.18
},
  button: {
    alignItems: 'center',
    backgroundColor: '#F27F24',
    padding: 17,
    marginBottom:10,
    borderRadius:25
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#F27F24',
    padding: 50,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 17,
    marginBottom:10,
    borderRadius:25,
    borderWidth:1,
    borderColor:'#F27F24'
  },
  backgroundImage: { 
      flex: 1,
      alignSelf: 'stretch',
      width: null
    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      height: 50,
      borderRadius: 15,
      margin:5,
      marginBottom:10
    },
    SectionStyle1: {
     
    },
   
    ImageStyle: {
      padding: 10,
      margin: 5,
      marginRight:20,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
  },
  errorText: {
  color: 'red',
  fontSize: 15,
  paddingLeft: 20
   },
     forgetpasswordContainer: {
       marginTop:10,
       marginBottom:15
   },
   forgetpasswordContainer1: {
    //marginTop:5,
    marginBottom:10
},
   forgetpassword:{
      color:'red', 
      textAlign:'right',
      fontSize: Math.round(Dimensions.get('window').width)*0.015,
      marginRight: Math.round(Dimensions.get('window').width)*0.05
   },
   LoginText:{
      color:'white', 
      fontWeight:'bold',
      fontSize:Math.round(Dimensions.get('window').height)*0.025,
      padding:Math.round(Dimensions.get('window').height)*0.015
   }
})

const mapStateToProps = (state) => {
  //console.log('Login',state.login);
 // const text = state.addExpenses.text;
 // console.log('text',text);
  return { loginUsers : state.login }; 
};

export default connect(mapStateToProps, { emailChanged, passwordChanged,loginUser })(SignIn);
