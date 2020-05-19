import NetInfo from '@react-native-community/netinfo';
import {
    EXPENSE_FETCH,
    EXPENSE_FETCH_FAIL,
    EXPENSE_FETCH_SUCCESS,
    INTERNET_CONNECTION_FAIL
  } from './types';
  

export const fetchExpenseRecord = ( token ) => {
    console.log('token....',token);
    return (dispatch) => {
      let details = {
            token: token,
            //password: 'cityslicka'
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
      dispatch({ type: EXPENSE_FETCH });
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
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        if (!state.isConnected) {
               alert('Internet is not connected');
               InternetConnectionFail(dispatch)
             }
             else {
               alert('Login falied!');
             }
      });
    
    })
         .then((responseData) => {
             console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData.data!==undefined){
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              ExpenseSuccess(dispatch,responseData.data) 
             }else{
              ExpenseFail(dispatch)
             
             }
          }
           
             
              
         })
         .done();
        };
    };
    const ExpenseFail = (dispatch) => {
        dispatch({ type: EXPENSE_FETCH_FAIL });
      };
      
      const InternetConnectionFail = (dispatch) => {
        dispatch({type: INTERNET_CONNECTION_FAIL})
      }
      
      const ExpenseSuccess = (dispatch, data) => {
        dispatch({
          type: EXPENSE_FETCH_SUCCESS,
          payload: data
        });
        //console.log('Login');
        //const {navigate} = this.props.navigation;
        //nav.navigate('Home', {token: token});
        // this.navigateToScreen('Demo Screen 2');
      };