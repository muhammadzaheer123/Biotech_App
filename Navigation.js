import React,{Component} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './src/Login/Login';
import Home from './src/Home/Home';
import ExpenceDetails from './src/ExpensesDetails/ExpensesDetails';
import AddExpense from './src/AddExpense/AddExpense';
import EditExpense from './src/Edit/Edit';
import ViewExpense from './src/View/View';
import ImagePicker from './src/Others/ImagePicker';
import ViewDocument from './src/ViewDocument/ViewDocument';
import list from './src/Icons/list.png';
import DrawerContentComponent from './src/DrawerContentComponent/DrawerContentComponent';
import EditProfile from './src/EditProfile/EditProfile';
import EditP from './src/EditProfile/EditP';
import PattyCashLedger from './src/PattyCashLedger/PattyCashLedger';
import PattyCashLedgerDetails from './src/PattyCashLedger/PattyCashLedgerDetails';
import ViewTodaysExpense from './src/ViewTodaysExpense/ViewTodaysExpense';
import ViewTodaysExpenseDetails from './src/ViewTodaysExpense/ViewTodaysExpenseDetails';
import test from './src/test';
import AllTables from './src/Tables/AllTables';

console.disableYellowBox = true;

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
    back = () => {
    this.props.navigationProps.goBack();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' ,padding:10}}>
        {/* <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>     
             <Image
             style={{ width: 30, height: 30,marginLeft:10 }}
             source={Image1}     
             />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>     
                 <Image
             style={{ width: 30, height: 30 }}
             source={list}     
             />
        </TouchableOpacity>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
 
  
  Login: {screen: Login,
    navigationOptions: ({ navigation }) => ({
     header: null,
     drawerLockMode: 'locked-closed',
    }),
  },
  
  
});

const HomeNavigation = createStackNavigator({
  Home: {screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
  PattyCashLedger: {screen: PattyCashLedger,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),},
    PattyCashLedgerDetails: {screen: PattyCashLedgerDetails,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),},
 
    ExpenceDetails: {screen: ExpenceDetails,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),},
      ViewTodaysExpense: {screen: ViewTodaysExpense,
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),},
        ViewTodaysExpenseDetails: {screen: ViewTodaysExpenseDetails,
          navigationOptions: ({ navigation }) => ({
            header: null,
          }),},
      AddExpense: {screen: AddExpense,
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),},
        EditExpense: {screen: EditExpense,
          navigationOptions: ({ navigation }) => ({
            header: null,
          }),},
          ViewExpense: {screen: ViewExpense,
            navigationOptions: ({ navigation }) => ({
              header: null,
            }),},
            ViewDocument: {screen: ViewDocument,
              navigationOptions: ({ navigation }) => ({
                header: null,
              }),},
              AllTables: {screen: AllTables,
                navigationOptions: ({ navigation }) => ({
                  header: null,
                }),},
            
});

const EditProfileNavigator = createStackNavigator({
 
  
  EditProfile: {screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
  EditP: {screen: EditP,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
  // ImagePicker: {screen: ImagePicker,
  //   navigationOptions: ({ navigation }) => ({
  //     header: null,
  //   }),},
  
});

const DrawerNavigatorExample = createDrawerNavigator({
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      drawerLabel: null,
      drawerLockMode: 'locked-closed',
    },
  },
  Home: {
    screen: HomeNavigation,
    navigationOptions: {
      drawerLabel: 'Home',
      //drawerLockMode: 'locked-closed',
    },
  },
  EditProfile: {
    screen: EditProfileNavigator,
    navigationOptions: {
      //drawerLabel: '',
      //drawerLockMode: 'locked-closed',
    },
  },
}
, {
  contentComponent: DrawerContentComponent,
  drawerWidth: 250
}
);

const App = createAppContainer(DrawerNavigatorExample);

export default App;
