import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';
import DetailsCard from '../Components/DetailsCard';
import Logo from '../Icons/logo.png';
import moment from 'moment';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {  isTablet } from 'react-native-device-info';
import {fetchExpenseRecord} from './action';
import { connect } from 'react-redux';

const KEYS_TO_FILTERS = ['voucherID','totalExpense','remarks','status','description','date'];

class ExpenceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          data: [{
            voucherID: 'BFE-140',
            totalExpense:'6789.00', 
            remarks:'tanvir ahmad', 
            status:'Approved', 
            description:'Expenses Against BFE-140 Dated:28-Nov-2019', 
            date:'28-Nov-2019'
        },{
            voucherID:'BFE-139', 
            totalExpense:'1234.00', 
            remarks:'tanvir ahmad', 
            status:'Approved', 
            description:'Expenses Against BFE-140 Dated:27-Nov-2019', 
            date:'27-Nov-2019'
        },{
            voucherID:'BFE-138',
            totalExpense:'5566.00',
            remarks:'tanvir ahmad',
            status:'Approved',
            description:'Expenses Against BFE-140 Dated:26-Nov-2019',
            date:'26-Nov-2019'
        },{
            voucherID:'BFE-137', 
            totalExpense:'100.00', 
            remarks:'tanvir ahmad', 
            status:'Approved', 
            description:'Expenses Against BFE-140 Dated:25-Nov-2019', 
            date:'25-Nov-2019'
        }
    ],
        searchTerm: '',
      
        }
        Dimensions.addEventListener("change", (e) => {
           // console.log('change');
          this.setState(e.window);
      });
    }

    componentDidMount() {
      const { navigation } = this.props;
      const token = navigation.getParam('token');
      console.log('token',token)
      this.props.fetchExpenseRecord(token);
     // this.props.DOCTORSLIST(item);
    }
    onChangeText = (term) => {
        this.setState({
          searchTerm: term,
          //data: []
        });
      }
     
    render() {
        var fontS=0;
        if(isTablet()===false){
            fontS=18;
            
          }
          else{
            fontS = this.state.width*0.03;
            
          }
    let filteredEmails = [];
   // console.log(this.state.data);
    if (this.state.data !== undefined) {
      filteredEmails = this.state.data.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
     // console.log(filteredEmails);
    }
        //console.log(this.state.searchTerm);
        return (
            <ScrollView style={{padding: this.state.width*0.05,paddingBottom:0,backgroundColor:'#efefef'}}>
                <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
            <View>
                <Text style={[styles.ButtonText,{fontSize:fontS}]}>Branch Factory Expenses Details</Text>
            </View>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddExpense')} style={styles.button}>
                 <Text style={[styles.ButtonText1,{fontSize:fontS}]} >+ Add Expense {moment().format("Do MMM YY")}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewTodaysExpense')} style={[styles.button,{backgroundColor:'#3EB1F1'}]}>
                 <Text style={[styles.ButtonText1,{fontSize:fontS}]} >  View Expense {moment().format("Do MMM YY")}</Text>
            </TouchableOpacity>

            <TextInput 
                onChangeText={(term) => this.onChangeText(term)}
                style={styles.searchInput1}
                placeholder="Search..."
                //value={this.state.searchTerm}
            />

            {filteredEmails.map(item => {
            return (
                <DetailsCard voucherID={item.voucherID} totalExpense={item.totalExpense} remarks={item.remarks} status={item.status} description={item.description} date={item.date} navigation={this.props.navigation}/>
            )
          })}

            <View style={{height:50}}>

            </View>
                </ScrollView>
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
        backgroundColor: '#49CE7F',
        padding: 10,
        marginBottom:10,
        borderRadius:10,
       // width:'50%'
      },
      ButtonText1:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:18
     },
     searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 10
      },
      searchInput1:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        marginBottom:10,
        borderWidth:1,
        borderColor:'red',
        borderRadius:2,
        backgroundColor:'#efefef',
        borderRadius: 2,
            borderBottomWidth: 1,
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
        
      }, 
     Logo: {
        width:100,
        height:100
    },
    LogoImageContainer:{
        justifyContent: 'center',
         alignItems: 'center',  
    },
    
})
const mapStateToProps = (state) => {
  console.log('Login',state.login);
  console.log('Login',state.expense);
 // const text = state.addExpenses.text;
 // console.log('text',text);
  return { loginUsers : state.login, expenseDetails: state.expense }; 
};

export default connect(mapStateToProps,{fetchExpenseRecord})(ExpenceDetails);
