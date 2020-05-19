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
    Picker,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import Logo from '../Icons/logo.png';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import uploadImg from '../Icons/upload.png';
import AddNewLine from '../Components/AddExpenseNew';
import { getUniqueId, getManufacturer, isTablet, getPhoneNumber } from 'react-native-device-info';
import {ExpenseAccountUpdate, ExpenseHeadUpdate, AddNewLineNumber, RemoveItem, UpdateNarration, UpdateAmount} from './ExpenseActions';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
    Dimensions.addEventListener("change", (e) => {
       // console.log('change');
      this.setState(e.window);
  });
  }

 
  removeItem = index => {
     this.props.RemoveItem(index);
  }

  updateChildNarration = (index,value) => {
    console.log('addddddddddddddddd');
    this.props.UpdateNarration(index,value);
  }
  updateChildAmount = (index,value) => {
    console.log('addddddddddddddddd');
    this.props.UpdateAmount(index,value);
  }
 
   
  render() {
    var pad=5;
    var bW=0;
    if(isTablet()===false){
      pad=5;
      bW=0;
    }
    else{
      pad=10;
      bW=5;
    }
    var a=0;
           var backgroundsColor= '#fafafa';
        return (
          <View style={{height:this.state.height}}>

         
            <ScrollView style={{padding: pad,backgroundColor:'#efefef',borderWidth:bW,borderColor:'red',margin:5,height:this.state.height}}>
               <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
             
                <Text style={styles.ButtonText}>Add New Branch Factory Payments</Text>
                <Text style={{textAlign:'center',marginBottom:10,fontSize:18,color:'#F27F24'}}>Add Expense Info</Text>
                <View style={{borderWidth:2,padding:20,borderColor: '#F27F24',borderRadius:10}}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <Text>Expense Voucher #  </Text>
                    <Text>BFE-137</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                    <Text>Date </Text>
                    <Text>{moment().format("Do MMM YY")}</Text>
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
                       onChangeText={value => this.props.ExpenseAccountUpdate(value)}
                      value={this.props.expense.text}
                       style={{ height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10 }} 
                      placeholder='Enter Payments Details'/>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{height:40,textAlignVertical:'center',width:'35%'}}>Expense Head</Text>
                    <View style={{height: 40,width:'100%', borderColor: 'gray', borderWidth: 1,borderRadius:10}}>
                    <Picker
                        selectedValue={this.props.expense.expenseHead}
                        style={{height: 40}}
                        onValueChange={ value => this.props.ExpenseHeadUpdate(value)
                        }
                        >
                    <Picker.Item label="Expense1" value="Expense1" />
                    <Picker.Item label="Expense2" value="Expense2" />
                    </Picker>
                    </View>
                </View>
             
             
                </View>
                     
               {
                
                   this.props.expense.items.map((index,i)=>{
                       console.log(index);
                       return(
                        <AddNewLine delete={this.removeItem} narr={this.updateChildNarration} amm={this.updateChildAmount} Narration={index.narration} Ammount={index.addamount} key={a} value={i.value} id={index.id} w={a++}/>
                       )
                       
                   })
               }
              
                 <View style={{height:this.state.height*0.2}}>
                  
                 </View>
                </ScrollView>
                
                <View style={[styles.avatar,{ marginTop:this.state.height*0.85, width: this.state.width*0.55}]}> 
                <View style={{marginBottom:5}}>
                  <Button title='Add Line' onPress={ () => this.props.AddNewLineNumber()} style={{height:this.state.height*0.09,padding:20,margin:20}}/>
                </View> 
               
                <Button title='Save'/>
                </View>
                </View>
                )
    }
}

const styles = StyleSheet.create({
    Logo: {
        width:100,
        height:100
    },
    avatar: {
      borderRadius: 63,
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
     
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
const mapStateToProps = (state) => {
   console.log(state.addExpenses);
  // const text = state.addExpenses.text;
  // console.log('text',text);
   return { expense : state.addExpenses }; 
};

export default connect(mapStateToProps, { ExpenseAccountUpdate, ExpenseHeadUpdate, AddNewLineNumber, RemoveItem, UpdateNarration,UpdateAmount })(Home);
