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
import { connect } from 'react-redux';
import Table1 from './Table1';
import Simpletable from './SimpleTable';
//import { ReactMUIDatatable } from "react-material-ui-datatable";
import Table2 from './Tabel2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table7 from './Table7';
import Table8 from './Table8';
import Table9 from './Table9';
//import Table5 from './Table5';
//import Table6 from './Table6';
import Search from './Search'; 
import Table10 from './Table10';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
    Dimensions.addEventListener("change", (e) => {
      this.setState(e.window);
    });
  }
  
    render() {
        return (
            <ScrollView style={{backgroundColor:'#efefef'}}>
                <Search />
                <Table3 />
                <Table4 />
                <Table1 />
                <Simpletable />
                <Table2 />
                <Table7 />
                <Table8 />
                <Table9 />
                <Table10 />
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
  },
  topContainer: {
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
        margin:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      ButtonText:{
        color:'white', 
        //fontWeight:'bold',
        fontSize:18
     }
})

const mapStateToProps = (state) => {
  //console.log('Login',state.login);
   return { loginUsers : state.login }; 
};

export default connect(mapStateToProps)(Home);

