import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Logo from '../Icons/logo.png';
import user from '../Icons/man-user.png';
import email from '../Icons/email.png';
import phone from '../Icons/phone-contact.png';


class Home extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
          <View style={styles.header}></View>
      
          <ImageBackground style={styles.avatar}  imageStyle={{ borderRadius: 63 ,borderWidth: 4,
      borderColor: "red",
      }} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}>
                <View style={{marginTop:100}}>
              
                </View>
                     </ImageBackground>
         
  
           <View style={styles.body}>
            
            <View style={styles.bodyContent}>
              <View style={{borderWidth:0, alignContent:'center',alignItems:'flex-start',borderWidth:0}}>

              
              <View style={{flexDirection:'row',marginBottom:10}}>
              
            <View style={{
                //alignItems:'center',
                //justifyContent:'center',
               backgroundColor: 'white',padding:20, borderRadius: 50,
               shadowColor: "black",
               shadowRadius: 20.00,
               shadowOffset: { height: 2},
               shadowOpacity: 0.3,
               elevation: 3,
            }}>
                <Image source={user} style={{width:25,height:25}}/>
              
                </View>
                <View style={{paddingLeft:25,justifyContent:'center'}}>
                <Text style={{color:'gray'}}>Name</Text>
                <Text style={{fontSize:25}}>Danial Rozar</Text>
                </View>
                
              
              
              </View>
              <View style={{flexDirection:'row',marginBottom:10}}>
              
            <View style={{
                alignItems:'flex-start',
                //justifyContent:'center',
               backgroundColor: 'white',padding:20, borderRadius: 50,
               shadowColor: "black",
               shadowRadius: 20.00,
               shadowOffset: { height: 2},
               shadowOpacity: 0.3,
               elevation: 3,
            }}>
                <Image source={email} style={{width:25,height:25}}/>
              
                </View>
                <View style={{paddingLeft:25,justifyContent:'center'}}>
                <Text style={{color:'gray'}}>Email</Text>
                <Text style={{fontSize:25}}>denial@gmail.com</Text>
                </View>
                
                
              
              
              </View>
              <View style={{flexDirection:'row',marginBottom:10}}>
              
              <View style={{
                  alignItems:'flex-start',
                  //justifyContent:'center',
                 backgroundColor: 'white',padding:20, borderRadius: 50,
                 shadowColor: "black",
                 shadowRadius: 20.00,
                 shadowOffset: { height: 2},
                 shadowOpacity: 0.3,
                 elevation: 3,
              }}>
                  <Image source={phone} style={{width:25,height:25}}/>
                
                  </View>
                  <View style={{paddingLeft:25,justifyContent:'center'}}>
                  <Text style={{color:'gray'}}>Phone</Text>
                  <Text style={{fontSize:25}}>0313 2339911</Text>
                  </View>
                  
                  
                
                
                </View>
              <View style={{alignItems:'center',alignSelf:'center'}}>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('EditP')}>
                  <Text style={{color:'white',fontSize:18}}>Edit Profile</Text>
              </TouchableOpacity>
            
              </View>
              </View>
            </View>
        </View>
      </ScrollView>
                )
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#F27F24",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
      flexDirection:'row'
    },
    bodyContent: {
      flex: 1,
      //justifyContent:'center',
      //alignItems: 'center',
     // borderWidth:1,
     // width:'20%',
      alignItems:'center',
      alignSelf:'center',
      paddingTop:30,
     
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:35,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:10,
      backgroundColor: "#F27F24",
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F27F24',
        padding: 17,
        marginBottom:10,
        borderRadius:10
      },
  });

export default Home;
