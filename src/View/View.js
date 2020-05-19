import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import ViewCard from '../Components/ViewCard';
import Logo from '../Icons/logo.png';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['voucherID','account','expenseAmmount','expenseHead','narration'];

class ExpenceDetails extends Component {

    state = {
        data: [{
            voucherID: 'BFE-140',
            account:'5014', 
            expenseAmmount:'461.00', 
            expenseHead:'Installation Expense on Roland 700', 
            narration:'Machine pipe'
        },{
            voucherID: 'BFE-141',
            account:'5014', 
            expenseAmmount:'460.00', 
            expenseHead:'Installation Expense on Roland 700', 
            narration:'Machine pipe'
        },{
            voucherID: 'BFE-142',
            account:'5014', 
            expenseAmmount:'460.00', 
            expenseHead:'Installation Expense on Roland 700', 
            narration:'Machine pipe'
        },{
            voucherID: 'BFE-143',
            account:'5014', 
            expenseAmmount:'460.00', 
            expenseHead:'Installation Expense on Roland 700', 
            narration:'Machine pipe'
        }
    ],
        searchTerm: '',
        //distance: 1000,
        //filter: false
    };
    onChangeText = (term) => {
        this.setState({
          searchTerm: term,
          //data: []
        });
      }

    render() {

        let filteredEmails = [];
        // console.log(this.state.data);
         if (this.state.data !== undefined) {
           filteredEmails = this.state.data.filter(
             createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
           );
          // console.log(filteredEmails);
         }
        return (
            <ScrollView style={{padding: 20,backgroundColor:'#efefef'}}>
                <View style={styles.LogoImageContainer}>
                <Image source={Logo} style={styles.Logo}/> 
                </View>
            <View>
                <Text style={styles.ButtonText}>Viewing</Text>
            </View>
            <View>
                <Text style={styles.ButtonText}>Total Expenses: 8921.00</Text>
            </View>
            <View>
                <Text style={styles.ButtonText}>Dated: 26-Nov-2019</Text>
            </View>
            <TextInput 
                onChangeText={(term) => this.onChangeText(term)}
                style={styles.searchInput1}
                placeholder="Search..."
                placeholderTextColor='gray'
                //value={this.state.searchTerm}
            />

            {filteredEmails.map(item => {
            return (
                <ViewCard voucherID={item.voucherID} account={item.account} expenseAmmount={item.expenseAmmount} expenseHead={item.expenseHead} narration={item.expenseHead} navigation={this.props.navigation}/>
                )
          })}
          <View style={{height:30}}>

            </View>
                </ScrollView>
                )
    }
}

const styles = StyleSheet.create({
    ButtonText:{
        color:'red', 
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
      ButtonText1:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:18
     }, 
     Logo: {
        width:100,
        height:100
    },
    LogoImageContainer:{
        justifyContent: 'center',
         alignItems: 'center',  
    },
    searchInput: {
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        
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
    
})

export default ExpenceDetails;
