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

const screenHeight= Math.round(Dimensions.get('window').height);
const screenWidth= Math.round(Dimensions.get('window').width);

class ViewCard extends Component {

    render() {
        return (
          
         <View style={styles.container}> 
             <View style={styles.alignStyle1}>
         <Text style={{color:'red',fontWeight:'bold',fontSize:18}}>Expense Voucher #: </Text><Text style={{color:'red',fontSize:16}}>{this.props.voucherID}</Text> 
             </View>
             <View style={styles.alignStyle}>
        <Text style={styles.TextTableHeading}>Account: </Text><Text style={{color:'red'}}>{this.props.account}</Text>
             </View>
             <View style={styles.alignStyle}>
        <Text style={styles.TextTableHeading}>Expense Ammount: </Text><Text style={{color:'white'}}>{this.props.expenseAmmount}</Text>
             </View>
              <View style={{justifyContent: 'center',
         alignItems: 'center'
         }}>
                 <Text style={styles.TextTableHeading}>Expense Head </Text>
        <Text style={styles.text}>{this.props.expenseHead}</Text>  
             </View>
             <View style={{flexDirection:'row'}}>
             <View style={{justifyContent: 'center',
         alignItems: 'center', width:'30%'
         }}>
                 <Text style={styles.TextTableHeading}>Narrations </Text>
            </View>
             <View style={{justifyContent: 'center',
         alignItems: 'center', width:'30%'
         }}>
        <Text style={styles.text}>{this.props.narration}</Text>  
             </View>
             <View style={{justifyContent: 'center',
         alignItems: 'center', width:'40%'
         }}>
                   <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ViewDocument')} style={styles.button1}>
        <Text style={styles.ButtonText2} >View Document</Text>
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
        //width:'43%',
        margin:10,
        marginBottom: 0
      },
      button2: {
        alignItems: 'center',
        backgroundColor: '#F2A72A',
        padding: 10,
        //marginBottom:10,
        borderRadius:10,
        //width:'43%',
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
        fontSize:14,
        textAlign: 'center'
     },
     container: {
        //borderWidth: 1,
        borderRadius: 10,
        padding:10,
        backgroundColor:'#F27F24',
        marginBottom:20,
        paddingTop:5  
     },
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

export default ViewCard;
