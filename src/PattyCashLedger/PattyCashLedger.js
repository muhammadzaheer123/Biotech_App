import React, { Component, PureComponent } from 'react';
import {
  VirtualizedListProperties, 
  ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    SafeAreaView,
    SectionList,
    VirtualizedList
   
} from 'react-native';
import Logo from '../Icons/logo.png';
//import { SpringScrollView } from "@youngtailors/react-native-spring-scrollview";
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { getUniqueId, getManufacturer, isTablet, getPhoneNumber } from 'react-native-device-info';

//import { resolveTxt } from 'dns';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import search from '../Icons/search.png';
import cDown from '../Icons/coins-down.png';
import cUp from '../Icons/coins-up.png';
import { connect } from 'react-redux';
import {fetchLedgerRecord} from './actions';
import PattyCashLedgerCard from '../Components/PattyCashLEdgerCard';
import PattyCashLedgerBlue from  '../Components/PattyCashLedgerBlue';

var SH = 100;
class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        //  limit: 10,
          loading:true
        }
        Dimensions.addEventListener("change", (e) => {
            //console.log('change');
          this.setState(e.window);
      });
      }
     async componentDidMount() {
        const { navigation } = this.props;
        const token = navigation.getParam('token');
        //console.log('token',token)
       await this.props.fetchLedgerRecord(token);
       // this.props.DOCTORSLIST(item);
      
      }
      shouldComponentUpdate(nextProps, nextState) {
        return nextProps.LedgerDetails.data != this.props.LedgerDetails.data;
    }
      renderFooter = () => {
        return(
          this.state.loading ?
          <View style={styles.loader}>
              <ActivityIndicator size="large"/>
          </View>
          :null
        )
      }
      handleLoadMore = () => {
        
        this.setState({loading:false});
        //console.log('llllllllllllllllllll',this.state);
      }
      renderHeader=() => {
        return(
          <View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={this.state.width*0.98} // from react-native
            height={SH}
            yAxisLabel={"RS."}
            yAxisSuffix={"k"}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 5,
              padding:7
            }}
          />
        
        
        <View style={{flexDirection:'row'}}>
            <View style={{width:'50%',padding:10,borderRightWidth:2,borderBottomWidth:4,borderBottomColor:'red',borderRightColor:'gray'}}>
                <Text style={{color:'gray'}}>TOTAL DEBIT</Text>
                <Text style={{color:'#7DC5E8'}}>PKR <Text style={{color:'black', fontSize:25}}>10,000</Text></Text>
            </View>
            <View style={{width:'50%',alignItems:'flex-end',padding:10,borderLeftWidth:2,borderBottomWidth:4,borderBottomColor:'#017DC5',borderLeftColor:'gray'}}>
                <Text style={{color:'gray'}}>TOTAL CREDIT</Text>
          <Text style={{color:'#7DC5E8'}}>PKR <Text style={{color:'black', fontSize:25}}>{this.props.LedgerDetails.data[0]!==undefined?this.props.LedgerDetails.data[0].balance:0}</Text></Text>
            </View>
        </View>
        <View>
            <View style={{flexDirection:'row',marginVertical:5}}>
                <View style={{width:'40%',paddingVertical:10,paddingHorizontal:4}}>
                <Text>STARTS <Text style={{color:'#017DC5'}}>02 SEP, 2019</Text></Text>
                </View>
                <View style={{width:'20%',padding:10,alignItems:'center'}}>
                    <Image source={search} style={{width:20,height:20}}/>
                </View>
                <View style={{width:'40%',paddingVertical:10,paddingHorizontal:4,alignItems:'flex-end'}}>
                <Text><Text style={{color:'#017DC5'}}>02 DEC, 2019 </Text>ENDS</Text>
                </View>
                
            </View>
            </View>
            </View>
          )
      }

      renderItem = ({item}) => (
        item.bfe_amount!==undefined ?
                  <PattyCashLedgerCard Date={item.created_at} Expense={item.bfe_amount} Profit={item.bfp_amount} Narration={item.narration} balance={item.balance} Voucher={item.voucher} navigation={this.props.navigation}/>
                  : <PattyCashLedgerBlue Date={item.created_at} Expense={item.bfe_amount} Profit={item.bfp_amount} Narration={item.narration} balance={item.balance} Voucher={item.voucher} navigation={this.props.navigation}/>
           
      )
    render() {
     
         if(isTablet()===false){
          //fontS=20;
          SH=300
        }
        else{
          //fontS = this.state.width*0.02;
          SH=this.state.height*0.4
        }
    
   

        return (
            <View onLayout={this.onLayout} style={{padding: 3,backgroundColor:'#efefef'}}>
 
    <View style={{borderWidth:1,borderColor:'#017DC5'}}/>
      
        <FlatList
        shouldItemUpdate={(props,nextProps)=>
          { 
            return props.item!==nextProps.item
              
        }}
   
    
   windowSize={41}
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={1200}
    
           // legacyImplementation={true}
        style={{ flex: 0 }}
       // initialNumToRender={this.props.LedgerDetails.data.length}
  data={ this.props.LedgerDetails.data}
  removeClippedSubviews={true}
  // removeClippedSubviews={false}
  renderItem={this.renderItem}
  keyExtractor={(item,index)=> index.toString()}
 // onEndReached={this.handleLoadMore}
  initialNumToRender={10}
  //maxToRenderPerBatch={15}
 // onEndReachedThreshold={0.5}
  ListFooterComponent={this.renderFooter}
  
  ListHeaderComponent={this.renderHeader}
  
 
/>


    </View>
               
                )
    }
}

const styles = StyleSheet.create({
    container1: { flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  container: {
    backgroundColor: '#41cdfa',
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
     loader:{
       alignItems:'center',
       marginTop:10
     }
})
const mapStateToProps = (state) => {
  //console.log('Ledger',state.ledger.data);
  const sortedActivities = state.ledger.data.sort((a, b) => b.created_at - a.created_at);
  //console.log(sortedActivities);
   return { LedgerDetails: state.ledger }; 
};

export default connect(mapStateToProps,{fetchLedgerRecord})(Home);


