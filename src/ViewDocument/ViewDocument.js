import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Modal,

} from 'react-native';
import Logo from '../Icons/logo.png';
import TestImage from '../Icons/Image.jpg';
import ImageViewer from 'react-native-image-zoom-viewer';
import Left from '../Icons/error1.png';
//import {Icon} from 'react-native-elements';

const screenHeight= Math.round(Dimensions.get('window').height);
var screenWidth= Math.round(Dimensions.get('window').width);

const images = [
    Image.resolveAssetSource(require('../Icons/Image.jpg')).uri,
  //  Image.resolveAssetSource(require('./icons/slider2.png')).uri
  ]; 
  const imagess = [{
    // Simplest usage.
    url: Image.resolveAssetSource(require('../Icons/Image.jpg')).uri,
 
    // width: 200,
     height: 400,
    // Optional, if you know the image size, you can set the optimization performance
 
    // You can pass props to <Image />.
    props: {
        // headers: <Text>Text</Text>
        // headers: ({ goBack }) => ({
        //     left: ( <Image source={Logo} style={{width:50,height:50}} onPress={ () => { goBack() } }  /> ),  
        // }),
    }
}]

class Home extends Component {
    fun = () => {
        console.log('hhh');
        return(
            <View style={{borderWidth:0,borderColor:'gray',justifyContent: 'center',
            alignItems: 'center',width:Math.round(Dimensions.get('window').width)}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{justifyContent: 'center',
                    alignItems: 'center',paddingLeft:35,paddingRight:35,marginVertical:20,paddingVertical:15,borderWidth:0,borderColor:'white',width:Math.round(Dimensions.get('window').width)*0.3}}>
                    <Image source={Left} style={{width:50,height:50}}/>
                </TouchableOpacity>            
            </View>
           )
    }
    render() {
        screenWidth= Math.round(Dimensions.get('window').width);
        return (
          //  <ScrollView style={{padding: 20,backgroundColor:'#efefef'}}>
        //        {/* <View style={styles.LogoImageContainer}>
        //        <Image source={Logo} style={styles.Logo}/> 
        //        </View> */}
        //        {/* <View>
        //            <Image source={TestImage} style={{width:screenWidth,height:screenHeight*0.5,resizeMode:'contain'}}/>
       //         </View> */}
                <Modal visible={true} transparent={true} >
                    <ImageViewer imageUrls={imagess} enableSwipeDown={true}  renderFooter={this.fun} onCancel={()=>this.props.navigation.goBack()}/>
                </Modal>
           
             
            //    </ScrollView>
                )
    }
}

const styles = StyleSheet.create({
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
     }
})

export default Home;
