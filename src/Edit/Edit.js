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
    Picker
} from 'react-native';
import Logo from '../Icons/logo.png';
import uploadImg from '../Icons/upload.png';
import ImagePicker from 'react-native-image-picker';

class Home extends Component {
    state= {
        expenseHead: '',
        photo: null,
        upload: 'red',
    }

    handleChoosePhoto = () => {
        console.log('image');
      const options = {
        title: 'Select Photo',
        noData: true,
      }
      
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
         
            this.setState({
              photo: response,
              upload:'blue',
            });
          }
        });
    }

    render() {
        const { navigation } = this.props;
        //console.log(navigation.getParam('expenseAccount'));
        return (
            
            <ScrollView style={{padding: 10,backgroundColor:'#efefef'}}>
                <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
             
                <Text style={styles.ButtonText}>Edit Branch Factory Payments</Text>
                <Text style={{textAlign:'center',marginBottom:10,fontSize:18,color:'#F27F24'}}>Expense Info</Text>
                <View style={{borderWidth:1,padding:10,borderRadius:20,borderColor:'gray'}}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <Text>Expense Voucher #  </Text>
                <Text>{navigation.getParam('voucherID')}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                    <Text>Date </Text>
                    <Text>{navigation.getParam('date')}</Text>
                </View>

                    </View>
                    <View style={{marginBottom:10, justifyContent: 'center',
                         alignItems: 'center',}}>
                    <Text>Remaining Cash in Hand </Text>
                    <Text style={{color:'gray',fontSize:18}}>Rs. 4552.00</Text>
                </View>
              
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}> 

                    </View>
                    <View style={{ justifyContent: 'center',
                          alignItems: 'center'}}>
                    <Text>Remaining Cash in Hand </Text>
                    <Text style={{color:'red',fontSize:18}}>Rs. 4552.00</Text>
                </View>
                </View>
                 
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Expense Account</Text>
                    <View style={{}}>
                      <TextInput
                       style={{ height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='Enter Payments Details' value={navigation.getParam('Account')}/>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Expense Head</Text>
                    <View style={{height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10}}>
                    <Picker
                        selectedValue={navigation.getParam('ExpenseHeader')}
                        style={{height: 40}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({expenseHead: itemValue})
                        }
                        >
                    <Picker.Item label="Installation Expense on Roland 700 Machine" value="Installation Expense on Roland 700 Machine" />
                    <Picker.Item label="Expense2" value="Expense2" />
                    </Picker>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Narration</Text>
                    <View style={{}}>
                      <TextInput
                       style={{ height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='Enter Payments Details' value={navigation.getParam('Narration')}/>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Add Amount</Text>
                    <View style={{flexDirection:'row'}}>
                      <TextInput
                       keyboardType='numeric'
                       style={{ height: 40,width:'50%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='0.00' value={navigation.getParam('ExpenseAmount')}/>
                      <View style={{justifyContent: 'center',
                          alignItems: 'center',width:'50%'}}>
                      <TouchableOpacity  onPress={this.handleChoosePhoto} style={[styles.button2,{backgroundColor:this.state.upload}]}>
                      <Image source={uploadImg} style={{width:20,height:20,marginRight:5}}/> 
                        <Text style={styles.ButtonText2} >Upload Image</Text>
                        </TouchableOpacity>
                      </View>
                       
                    </View>
                </View>
                <View style={{marginTop:10}}>  
                <Button title='Save'/>
                </View>
               
                </View>
                <View style={{height:30}}>

                </View>
                
                </ScrollView>
                )
    }
}

const styles = StyleSheet.create({
    Logo: {
        width:100,
        height:100
    },
    LogoImageContainer:{
        justifyContent: 'center',
         alignItems: 'center',
         
    },
      ButtonText:{
        color:'red', 
        //fontWeight:'bold',
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom:10
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
      ButtonText2:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:14
     },
})

export default Home;
