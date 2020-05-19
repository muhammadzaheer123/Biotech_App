import {TableView} from "react-native-responsive-table";
//import {TouchableOpacity, Text} from "react-native";
import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';
import Logo from '../Icons/logo.png';
import { connect } from 'react-redux';

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
            <View >
            <TableView 
    headers={[
        {
            name:"S.no.",
            reference_key:"no",
        },
        {
            name:"Name",
            reference_key:"name",
        },
        {
            name:"Age",
            reference_key:"age",
        },
        {
            name:"Actions",
            reference_key:"action",
        }
    ]}
    rows={[
            {
                no:1,
                name:"jhon",             
                age:25,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            },
            {
                no:2,
                name:"snow",
                age:23,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            },
            {
                no:2,
                name:"snow",
                age:23,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            },
            {
                no:2,
                name:"snow",
                age:23,
                action:(
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                )
            }
        ]}
/>
             
                </View>
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


