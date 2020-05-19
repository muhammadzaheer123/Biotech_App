import { StyleSheet, Dimensions } from 'react-native';
 

export default StyleSheet.create({
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
      marginBottom: Math.round(Dimensions.get('window').height)*0.2,
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
      padding: 12,
      borderRadius:20
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        height: 45,
        borderRadius: 15,
        margin:5,
        marginBottom:8
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
        marginRight: Math.round(Dimensions.get('window').width)*0.05
     },
     LoginText:{
        color:'white', 
        fontWeight:'bold',
        fontSize:Math.round(Dimensions.get('window').height)*0.019
     }
  })