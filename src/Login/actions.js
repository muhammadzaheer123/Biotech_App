import NetInfo from '@react-native-community/netinfo';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    INTERNET_CONNECTION_FAIL
  } from './types';
  import * as Keychain from 'react-native-keychain';

  export const emailChanged = (text) => {
      //console.log(text);
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };
  
  export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };

  
  export const loginUser = ( email1, password1,nav , shouldEnableTouchID) => {
    //console.log('eeee',email1,password1);
    return (dispatch) => {
      let details = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
            //email: email1,
           // password: password1
        };
    
        let formBody = [];

       

        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
      dispatch({ type: LOGIN_USER });
      fetch('https://reqres.in/api/login/', {
         method: 'POST',
         headers: {
             //'Authorization': 'Bearer token',
             'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: formBody
     }).then((response) => response.json())
     .catch(() => {
      NetInfo.fetch().then(state => {
        //console.log("Connection type", state.type);
        //console.log("Is connected?", state.isConnected);
        if (!state.isConnected) {
               alert('Internet is not connected');
               InternetConnectionFail(dispatch)
             }
             else {
               alert('Login falied!');
             }
      });
      // NetInfo.isConnected.fetch().then(isConnected => {
      //   if (!isConnected) {
      //     alert('Internet is not connected');
      //   }
      //   else {
      //     alert('Login falied!');
      //   }
      // });
      // eslint-disable-next-line no-param-reassign  
      // const newError = new ErrorUtils(error, '');
      // newError.showAlert();

      //alert('sign up first');
      //alert('cool');
    })
         .then((responseData) => {
             //console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData.token!==undefined){
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              if (shouldEnableTouchID) {
                // if login is successful and users want to enable Touch ID login
                Keychain.setGenericPassword( details.email,details.password); // store the credentials in the keychain

                Keychain.getGenericPassword()   // Retrieve the credentials from the keychain
                .then(credentials => {
                  //console.log('touchId',credentials);
                });
              }
              loginUserSuccess(dispatch,responseData.token,nav) 
             }else{
              loginUserFail(dispatch)
             
             }
          }
           
             
              
         })
         .done();
        
     //  });
      //  firebase.auth().signInWithEmailAndPassword(email, password)
      //   .then(user => loginUserSuccess(dispatch, user))
      //   .catch((error) => {
      //     console.log(error);
      //     () => loginUserFail(dispatch)
         
      //   });
    };
  };
  
  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const InternetConnectionFail = (dispatch) => {
    dispatch({type: INTERNET_CONNECTION_FAIL})
  }
  
  const loginUserSuccess = (dispatch, token,nav) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: token
    });
    //console.log('Login');
    //const {navigate} = this.props.navigation;
    nav.navigate('Home', {token: token});
    // this.navigateToScreen('Demo Screen 2');
  };