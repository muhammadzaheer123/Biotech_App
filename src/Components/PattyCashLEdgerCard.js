import React from 'react';
import {TouchableOpacity, View, Image, Text,Dimensions} from 'react-native';
//import cDown from '../Icons/coins-down.png';
//import cUp from '../Icons/coins-up.jpg';
import { getUniqueId, getManufacturer, isTablet, getPhoneNumber } from 'react-native-device-info';
import FastImage from 'react-native-fast-image'
import moment from 'moment';

class Home extends React.PureComponent{
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
    
    render(){
        var fontS = 50;
        var SH = 100;
        //var images=cUp;
        var colors='#FD5548';
        var amount='';
       // console.log("Tablet", isTablet()); 
       //   console.log(this.state.height);
        //  console.log(this.state.width);
         // const state = this.state;
          if(isTablet()===false){
            fontS=20;
            SH=15
          }
          else{
            fontS = this.state.width*0.02;
            SH = this.state.width*0.015;
          }
          //if(this.props.Expense==undefined){
            //  images=require('../Icons/coins-down.png');
          //    colors='#017DC5';
          //    amount='PKR '+ this.props.Profit
         // }
          //if(this.props.Profit==undefined){
            amount='- PKR '+ this.props.Expense;
           // images=require('../Icons/coins-up.png');
              colors='#FD5548';
        //  }
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PattyCashLedgerDetails',{
                voucher: this.props.Voucher,
                Date: this.props.Date,
                Expense: this.props.Expense,
                Profit:this.props.Profit,
                Balance: this.props.balance,
                Narration: this.props.Narration
            })} style={{flexDirection:'row',padding:this.state.width*0.005,paddingBottom:1,borderBottomWidth:1,borderColor:'gray'}}>
        <View style={{backgroundColor:colors,padding:5,width:'12%',alignItems:'center'}}>
        <FastImage
        style={{ width: this.state.width*0.05, height: this.state.height*0.1 }}
        source={{
            uri:   Image.resolveAssetSource(require('../Icons/coins-up.png')).uri,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
        </View>
        <View style={{padding:5,justifyContent:'center',width:'44%'}}>
    <Text style={{fontSize:fontS}}>{amount}</Text>
            <Text style={{fontSize:SH,marginLeft:this.state.width*0.01,color:'gray'}}>{moment(this.props.Date).format("Do MMM YY")}</Text>
        </View>
        <View style={{padding:5,justifyContent:'center',width:'44%',alignItems:'flex-end'}}>
        <Text style={{fontSize:fontS}}>PKR {this.props.balance}</Text>
            <Text style={{fontSize:SH,marginLeft:this.state.width*0.01,color:'gray'}}>Balance</Text>
        </View>
        
    </TouchableOpacity>
        )
    }
}

export default Home;