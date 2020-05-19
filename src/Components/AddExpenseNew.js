import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';
import Logo from '../Icons/logo.png';
import uploadImg from '../Icons/upload.png';
import Cross from '../Icons/del.png';
import ImagePicker from 'react-native-image-picker';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      upload: 'red',
      photo: ''
    }
    Dimensions.addEventListener("change", (e) => {
       // console.log('change');
      this.setState(e.window);
  });
  }
    handleChoosePhoto = () => {
        console.log('image');
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
              photo: response,
              upload: 'blue'
            });
            console.log('uploaded');
          }
        });
    }

    render() {
      console.log(this.props.w);
      var bg = '%fafafa';
      this.props.w%2 == 0 ?
            bg = 'white'
              : null
    
        return (
          <View> 
           
            <View style={{borderWidth:1,padding:20,borderRadius:0,borderColor:'black',borderRadius:10,backgroundColor:bg,marginTop:15,paddingTop:5}}>
              <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
              
            
              </View>
                
            <View>
                        <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Narration</Text>
                    <View style={{}}>
                      <TextInput
                        value={this.props.Narration}
                       onChangeText={ value => this.props.narr(this.props.id,value)}
                       style={{ height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='Enter Payments Details'/>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Add Amount</Text>
                    <View style={{flexDirection:'row'}}>
                      <TextInput
                      value={this.props.Ammount}
                       onChangeText={ value => this.props.amm(this.props.id,value)}
                      keyboardType='numeric'
                       style={{ height: 40,width:'45%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='0.00'/>
                      <View style={{justifyContent: 'center',
        alignItems: 'center',width:'40%',marginLeft:5}}>
                      <TouchableOpacity onPress={this.handleChoosePhoto} style={[styles.button2,{backgroundColor: this.state.upload}]}>
                         <Image source={uploadImg} style={{width:20,height:20,marginRight:5}}/> 
                        <Text style={styles.ButtonText2} >Upload Image</Text>
                        </TouchableOpacity>
                       
                      </View>
                      {
                  this.props.id !== 1 ?
                     <TouchableOpacity onPress={() => this.props.delete(this.props.id)} style={[styles.alignStyle1,{marginLeft:5,backgroundColor: 'red',justifyContent:'center',alignItems:'center',margin:0,borderWidth:0}]}>
                    <Image source={Cross} style={{width:20,height:20}}/> 
                  
                   </TouchableOpacity>
                  : null
                }
                       
                    </View>
                    
                </View>
              
             
                </View>
                </View>
                </View>
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
     button2: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        //marginBottom:10,
        borderRadius:10,
        flexDirection:'row',
        //marginTop:10,
       // margin:10,
       justifyContent: 'center',
        alignItems: 'center',
      },
      button3: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        paddingBottom:10,
        //marginBottom:10,
      //  borderRadius:10,
        flexDirection:'row',
        //marginTop:10,
       // margin:10,
       justifyContent: 'center',
        alignItems: 'center',
      },
      ButtonText2:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:14
     }, 
     alignStyle1:{
       
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
     // marginBottom:10,
      borderWidth:1,
      borderColor:'black',
      borderRadius:2,
      paddingVertical: 5,
      backgroundColor:'red',
      borderRadius: 2,
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
          padding:10,
          paddingTop:10,
          paddingBottom:10
   },
})

export default Home;
