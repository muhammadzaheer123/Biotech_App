import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight,
    Animated
} from 'react-native';
import Logo from '../Icons/logo.png';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import SwipeCard from '../Components/SwipeViewExpense';
import { isTablet } from 'react-native-device-info';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      data: [{

        key:1,
        ExpenseVoucher: 'BFE-197',
        Account:'5087', 
        ExpenseHeader:'Installation Expense on Roland 700 Machine', 
        Narration:'Machine Pipe', 
        ExpenseAmount:'450.00', 
    },{
      key:2,
      ExpenseVoucher: 'BFE-197',
      Account:'5087', 
      ExpenseHeader:'Installation Expense on Roland 700 Machine', 
      Narration:'Oil for compressor 10L', 
      ExpenseAmount:'2800.00', 
    },{
      key:3,
      ExpenseVoucher: 'BFE-197',
      Account:'5087', 
      ExpenseHeader:'Installation Expense on Roland 700 Machine', 
      Narration:'Air filter for machine compressor', 
      ExpenseAmount:'2290.00', 
    },{
      key:4,
      ExpenseVoucher: 'BFE-197',
      Account:'5094', 
      ExpenseHeader:'Uncategorised Asset', 
      Narration:'Drawer Lock', 
      ExpenseAmount:'110.00', 
    }
],
    }

    this.rowSwipeAnimatedValues = {};
        Array(20)
            .fill('')
            .forEach((_, i) => {
                this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
            });
            
    Dimensions.addEventListener("change", (e) => {
        console.log('change');
      this.setState(e.window);
  });
 
  }

  onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};

onSwipeValueChange = swipeData => {
    const { key, value } = swipeData;
    this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
};
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
        var Pd = 0;
        if(isTablet()===false){
            fontS=16;
            fontS1=14;
            Pd=10;
          }
          else{
            fontS = this.state.width*0.022;
            fontS1= this.state.width*0.016;
            Pd=20;
          }
        return (
            <ScrollView style={{padding: Pd,backgroundColor:'#efefef'}}>
                <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
                <View style={styles.button}>
                <Text style={styles.ButtonText}>{moment().format("Do MMM YY")} Expense</Text>
         
                </View>
                <View style={styles.container}>
                    <SwipeListView
                        data={this.state.data}
                        renderItem={data => (
                            <TouchableHighlight
                                onPress={() => console.log('You touched me')}
                                style={styles.rowFront}
                                underlayColor={'white'}
                            >
                              <View style={styles.container1}>
                <View style={styles.standalone}>
                
                                <View style={styles.standaloneRowFront}>
                                   
                                      <View  style={{flexDirection:'row',padding:this.state.width*0.005,paddingBottom:1,borderBottomWidth:1,borderColor:'gray'}}>
        <View style={{padding:5,justifyContent:'center',width:'49%'}}>
        <Text style={{fontSize:fontS1}}>{data.item.Narration}</Text>
            <Text style={{marginLeft:this.state.width*0.01,color:'gray'}}>Narration</Text>
        </View>
        <View style={{padding:5,justifyContent:'center',width:'49%',alignItems:'flex-end'}}>
        <Text style={{fontSize:fontS1}}>PKR {data.item.ExpenseAmount}</Text>
            <Text style={{marginLeft:this.state.width*0.01,color:'gray'}}>Expense Amount</Text>
        </View>
        
    </View>
                                </View>
                                </View>
                                </View>
                            </TouchableHighlight>
                        )}
                        renderHiddenItem={(data, rowMap) => (
                            <View style={styles.rowBack}>
                                 <TouchableOpacity style={styles.backRightBtnLeft,styles.backRightBtn,[{padding:50,marginLeft:-5,paddingHorizontal:25,backgroundColor:'blue'}]}
                                  onPress={()=>this.EditPage(data.item.ExpenseVoucher,data.item.Account,data.item.ExpenseHeader,data.item.Narration,data.item.ExpenseAmount)}>
                            <Text style={styles.backTextWhite}>Edit</Text>
                            </TouchableOpacity>
                            <View style={[
                                       styles.backRightBtn1,
                                       styles.backRightBtnLeft,
                                     
                                        {flexDirection:'row'}
                                    ]}>
                            <TouchableOpacity
                                   style={[
                                    styles.backRightBtn,
                                    styles.backRightBtnLeft,
                                    
                                  
                                ]}
                                    onPress={()=>this.ViewPage(data.item.ExpenseVoucher,data.item.Account,data.item.ExpenseHeader,data.item.Narration,data.item.ExpenseAmount)}
                                >
                                    <Text style={styles.backTextWhite,{textAlign:'center',color:'white'}}>
                                        View Details
                                    </Text>
                                   
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                     style={[
                                        styles.backRightBtnLeft1,
                                        styles.backRightBtn,
                                      //  {marginRight:35}
                                       {right:75},
                                    //   {backgroundColor:'red'}
                                    ]}
                                    onPress={()=>this.props.navigation.navigate('ViewDocument')}  >
                                    <Text style={styles.backTextWhite,{textAlign:'center',color:'white'}}>
                                        View Document
                                    </Text>
                                   
                                </TouchableOpacity>
                            
                            
                            
                            </View>
                            
                             
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-150}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        onRowDidOpen={this.onRowDidOpen}
                        onSwipeValueChange={this.onSwipeValueChange}
                    />
           

           
            </View>
     
                         
              </ScrollView>
   
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
   container: {
    backgroundColor: 'white',
    flex: 1,
 
},
standalone: {
    marginTop: 30,
    marginBottom: 30,
},
standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 80,
},

backTextWhite: {
    color: '#FFF',
},
rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 100,
},
rowBack: {
    alignItems: 'center',
    backgroundColor: '#F27F24',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
},
backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    //paddingLeft:100
},
backRightBtn1: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 150,
    //paddingLeft:100
},
backRightBtnLeft: {
    backgroundColor: 'green',
    right: 0,
},
backRightBtnLeft1: {
    backgroundColor: 'red',
    right: 0,
},
})

export default Home;
