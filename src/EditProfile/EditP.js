import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Dimensions
} from 'react-native';
import Logo from '../Icons/logo.png';
import ImagePicker from 'react-native-image-picker';
import Reinput from 'reinput';
import user from '../Icons/man-user.png';
import pass from '../Icons/pass.png';
import camera from '../Icons/camera.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      imageuri: 'https://bootdey.com/img/Content/avatar/avatar6.png'
    }
    Dimensions.addEventListener("change", (e) => {
      this.setState(e.window);
    });
  }
    handleChoosePhoto = () => {
     //   console.log('image');
    //   const options = {
    //     noData: true,
    //   }
    const options = {
        title: 'Select Photo',
      };
      
      ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
         
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };
         
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
         
            this.setState({
              imageuri: response.uri,
            });
          }
        });
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fafafa'}}>
          <View style={styles.header}></View>
      <TouchableOpacity onPress={this.handleChoosePhoto} style={{position:'absolute',marginTop:130,  alignSelf:'center',}}>
        <View style={styles.avatar}>
        <ImageBackground style={{ width: 122,
      height: 122,}}  imageStyle={{ borderRadius: 63 ,borderWidth: 0,
      borderColor: "red",
      }} source={{uri: this.state.imageuri}}
            />

        </View>
        <View style={{width:35,height:35,padding:10,backgroundColor:'#fafafa',borderRadius: 63 ,borderWidth: 1,position:'absolute',marginLeft:90,marginTop:90,
      borderColor: "red",alignItems:'center',justifyContent:'center'}}>
          <Image source={camera} style={{width:18,height:18}} />
      </View>
  
      </TouchableOpacity>
      
           <View style={styles.body}>
            <View style={styles.bodyContent}>
             
             
            
            <View style={{width:'100%'}}>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{padding:10}}>
                <Image source={user} style={{width:35,height:35,marginTop:9}}/>
                </View>
              <Reinput label='Name'  labelActiveColor='#F27F24' underlineActiveColor='#F27F24'  labelActiveScale={0.5} style={{width:'90%'}}  fontSize={25}  defaultValue='Danial Rozar'/>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{padding:10}}>
                <Image source={pass} style={{width:35,height:35,marginTop:9}}/>
                </View>
              <Reinput label='Exsisting Password' labelActiveColor='#F27F24' underlineActiveColor='#F27F24' secureTextEntry={true} password={true} labelActiveScale={0.5} style={{width:'90%'}}  fontSize={25}  />
              </View>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{padding:10}}>
                <Image source={pass} style={{width:35,height:35,marginTop:9}}/>
                </View>
              <Reinput label='New Password' labelActiveColor='#F27F24' underlineActiveColor='#F27F24'  secureTextEntry={true} password={true} labelActiveScale={0.5} style={{width:'90%'}}  fontSize={25} />
              </View>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View style={{padding:10}}>
                <Image source={pass} style={{width:35,height:35,marginTop:9}}/>
                </View>
              <Reinput label='Confirm New Password' labelActiveColor='#F27F24' underlineActiveColor='#F27F24'  secureTextEntry={true} password={true} labelActiveScale={0.5} style={{width:'90%'}}  fontSize={25} />
              </View>
    {/* <View style={{}}>
        <Fumi
          defaultValue={'Danial Rozar'}
          height={70} 
          style={{ borderColor: 'gray', borderWidth: 1,fontSize:20}}
          inputStyle={{ fontSize:20,borderBottomWidth:0,margin:10,borderBottomColor:'#f95a25'}}
          label={'Name'}
          labelStyle={{fontSize:15}}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#f95a25'}
          iconSize={31}
          iconContainerStyle={{ padding: 20 }} 
        />
    </View> */}
     <View style={{alignItems:'center',alignSelf:'center'}}>
              <TouchableOpacity style={styles.buttonContainer} >
                  <Text style={{color:'white',fontSize:18}}>Save</Text>
              </TouchableOpacity>
            
              </View>
    
  </View>
            {/* <View style={{padding:15}}>
            <Text style={{fontSize:18,marginBottom:10}}>Change Password</Text>
            <TextInput style={{ height: 50,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10, marginBottom:10,padding:15 }}  placeholder='Exsisting Password'/>
              <TextInput style={{ height: 50,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10, marginBottom:10,padding:15 }}  placeholder='New Password'/>
              <TextInput style={{ height: 50,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10, marginBottom:10,padding:15 }}  placeholder='Confirm New Password'/>

            </View> */}
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
     // position: 'absolute',
     // marginTop:130,
      borderColor:'red',
      borderWidth:4,
      
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
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
