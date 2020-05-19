import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Logo from '../Icons/logo.png';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { isTablet } from 'react-native-device-info';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      right: -75
    }
    Dimensions.addEventListener("change", (e) => {
        //console.log('change');
      this.setState(e.window);
  });
  }

  EditPage = (voucherID,Account,ExpenseHeader,Narration,ExpenseAmount) =>{
    this.props.navigation.navigate('EditExpense' , {
        voucherID,
        Account,
        ExpenseHeader,
        Narration,
        ExpenseAmount
      });
}
ViewPage = (voucherID,Account,ExpenseHeader,Narration,ExpenseAmount) =>{
    this.props.navigation.navigate('ViewTodaysExpenseDetails' , {
        voucherID,
        Account,
        ExpenseHeader,
        Narration,
        ExpenseAmount
      });
}
    render() {
      var fontS=0;
        var fontS1=0;
        if(isTablet()===false){
            fontS=16;
            fontS1=14;
          }
          else{
            fontS = this.state.width*0.022;
            fontS1= this.state.width*0.016;
          }
        return (
          
                <View style={styles.container1}>
                <View style={styles.standalone}>
                    <SwipeRow leftOpenValue={75} closeOnRowPress rightOpenValue={this.state.right}>
                        <View style={styles.standaloneRowBack}>
                        <TouchableOpacity style={{padding:20,}} onPress={()=>this.EditPage(this.props.ExpenseVoucher,this.props.Account,this.props.ExpenseHeader,this.props.Narration,this.props.ExpenseAmount)}>
                            <Text style={styles.backTextWhite}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:20,paddingLeft:50,backgroundColor:'green'}} onPress={()=>this.ViewPage(this.props.ExpenseVoucher,this.props.Account,this.props.ExpenseHeader,this.props.Narration,this.props.ExpenseAmount)}>
                            <Text style={styles.backTextWhite}>View</Text>
                            </TouchableOpacity>
                           </View>
                        <View style={styles.standaloneRowFront}>
                        <View  style={{flexDirection:'row',padding:this.state.width*0.005,paddingBottom:1,borderBottomWidth:1,borderColor:'gray'}}>
        <View style={{padding:5,justifyContent:'center',width:'45%'}}>
        <Text style={{fontSize:fontS}}>{this.props.Narration}</Text>
            <Text style={{marginLeft:this.state.width*0.01,color:'gray'}}>Narration</Text>
        </View>
        <View style={{padding:5,justifyContent:'center',width:'45%',alignItems:'flex-end'}}>
        <Text style={{fontSize:this.state.width*0.022}}>PKR {this.props.ExpenseAmount}</Text>
            <Text style={{marginLeft:this.state.width*0.01,color:'gray'}}>Expense Amount</Text>
        </View>
        
    </View>
   
                        </View>
                    </SwipeRow>
                  </View>
                </View>
          
             
             
                )
    }
}

const styles = StyleSheet.create({

     container1: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom:5,
        borderColor:'#bababa',
        borderWidth:1
      },
      standalone: {
        marginTop: 30,
        marginBottom: 30,
      },
      standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 50,
      },
      standaloneRowBack: {
        alignItems: 'center',
        justifyContent:'center',
       backgroundColor: '#3EB1F1',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
       // padding: 20,
      },
      standaloneRowBack1: {
        alignItems: 'center',
        justifyContent:'center',
       // backgroundColor: '#3EB1F1',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //padding: 20,

      },
      backTextWhite: {
        color: '#FFF',
      },
})

export default Home;
