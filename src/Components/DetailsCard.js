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
import { isTablet } from 'react-native-device-info';

class ExpenceDetails extends Component {
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

    EditPage = (voucherID,date,expenseAccount,expenseHead,narration,addAmount) =>{
        this.props.navigation.navigate('EditExpense' , {
            voucherID,
            date,
            expenseAccount,
            expenseHead,
            narration,
            addAmount
          });
    }
    ViewPage = (voucherID,date,expenseAccount,expenseHead,narration,addAmount) =>{
        this.props.navigation.navigate('ViewExpense' , {
            voucherID,
            date,
            expenseAccount,
            expenseHead,
            narration,
            addAmount
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
            fontS = this.state.width*0.02;
            fontS1= this.state.width*0.016;
          }
        return (
          
         <View style={styles.container}> 
             <View style={styles.alignStyle1}>
         <Text style={{color:'red',fontWeight:'bold',fontSize:fontS}}>Voucher ID: </Text><Text style={{color:'red',fontSize:fontS1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>{this.props.voucherID}</Text> 
             </View>
            
             <View style={styles.alignStyle}>
        <Text style={[styles.TextTableHeading,{fontSize:fontS}]}>Total Expense: </Text><Text style={{color:'red',fontSize:fontS1}}>{this.props.totalExpense}</Text>
             </View>
             <View style={styles.rowDirection}>
                 <View style={{width:'25%', flexDirection:'row',justifyContent: 'center',
        alignItems: 'center'}}>
    <Text style={[styles.TextTableHeading,{fontSize:fontS}]}>Remarks: </Text>  
                 </View>
                 <View style={{width:'30%', flexDirection:'row',        alignItems: 'center'}}>
    <Text style={[styles.text,{fontSize:fontS1}]}>{this.props.remarks}</Text>  
                 </View>
                
                 <View style={{width:'20%', flexDirection:'row',justifyContent: 'center',
        alignItems: 'center'}}>
    <Text style={[styles.TextTableHeading,{fontSize:fontS}]}>Status: </Text>
                 </View>
                 <View style={{width:'25%', flexDirection:'row',
        alignItems: 'center'}}>
        <Text style={{color:'green',fontSize:fontS1}}>{this.props.status}</Text> 
                 </View>
                 
               </View>
               <View style={{justifyContent: 'center',
         alignItems: 'center',marginBottom:20
         }}>
                 <Text style={[styles.TextTableHeading,{fontSize:fontS}]}>Description </Text>
        <Text style={[styles.text,{fontSize:fontS1}]}>{this.props.description}</Text>  
             </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
               <View style={{width:'50%'}}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewTodaysExpense')} style={styles.button1}>
        <Text style={[styles.ButtonText2,{fontSize:fontS}]} >Details</Text>
         </TouchableOpacity>
                
               </View>
                 
                
                 
             
               </View>
         </View>
               
          )
    }
}

const styles = StyleSheet.create({
    ButtonText:{
        color:'red', 
        //fontWeight:'bold',
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom:10
     },
    //'#F27F24'
     button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        marginBottom:10,
        borderRadius:10,
       // width:'50%'
      },
      button1: {
        alignItems: 'center',
        backgroundColor: '#3EB1F1',
        padding: 10,
        //marginBottom:10,
        borderRadius:10,
        //width:'50%',
        margin:10,
        marginBottom: 0
      },
      button2: {
        alignItems: 'center',
        backgroundColor: '#F2A72A',
        padding: 10,
        //marginBottom:10,
        borderRadius:10,
        //width:'50%',
        marginTop:10,
        margin:10,
        marginBottom: 0
      },
      ButtonText1:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:18
     },
     ButtonText2:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:14
     },
     container: {
        //borderWidth: 1,
        borderRadius: 10,
        margin:10,
        padding:10,
        backgroundColor:'#ed934e',
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
     },
     //'#ed934e'
     rowDirection:{
         flexDirection:'row',
         marginBottom: 10
     },
     alignStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        marginBottom:10
        
     },
     alignStyle1:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        marginBottom:10,
        borderWidth:1,
        borderColor:'white',
        borderRadius:2,
        paddingVertical: 5,
        backgroundColor:'#efefef',
        borderRadius: 2,
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
        
     },
     TextTableHeading: {
         fontWeight:'bold',
         color:'white',
         fontSize:16

     },
     Logo: {
        width:100,
        height:100
    },
    LogoImageContainer:{
        justifyContent: 'center',
         alignItems: 'center',
         
    },
    text:{
        color:'white'
    }
})

export default ExpenceDetails;
