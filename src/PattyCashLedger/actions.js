import NetInfo from '@react-native-community/netinfo';
import {
    LEDGER_FETCH,
    LEDGER_FETCH_FAIL,
    LEDGER_FETCH_SUCCESS,
    INTERNET_CONNECTION_FAIL,
    LOADING_CHANGE
  } from './types';
  
  
  export const loadingFalse = () => {
    //console.log(text);
  return {
    type: LOADING_CHANGE,
    payload: false
  };
};
export const fetchLedgerRecord =  ( token ) => {
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
      dispatch({ type: LEDGER_FETCH });
      fetch('http://demo.biotecherp.work/public/api/ledger', {
         method: 'GET',
        //  headers: {
        //      //'Authorization': 'Bearer token',
        //      'Content-Type': 'application/x-www-form-urlencoded'
        //  },
        //  body: formBody
     }).then((response) =>  response.json())
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
    
    })
         .then((responseData) => {
             //console.log('responceData.....',responseData);  
          //   this.setState({message: responseData});
          if(responseData!==undefined){
            if(responseData!==undefined){
              //  const {navigate} = this.props.navigation;
              //  navigate('Home', {token: this.state.message.token});
              ledgerSuccess(dispatch,responseData) 
             }else{
              ledgerFail(dispatch)
             
             }
          }
           
             
              
         })
         .done();
        };
    };
    const ledgerFail = (dispatch) => {
        dispatch({ type: LEDGER_FETCH_FAIL });
      };
      
      const InternetConnectionFail = (dispatch) => {
        dispatch({type: INTERNET_CONNECTION_FAIL})
      }
      
      const ledgerSuccess = (dispatch, data) => {
        dispatch({
          type: LEDGER_FETCH_SUCCESS,
          payload: data
        });
        //console.log('Login');
        //const {navigate} = this.props.navigation;
        //nav.navigate('Home', {token: token});
        // this.navigateToScreen('Demo Screen 2');
      };