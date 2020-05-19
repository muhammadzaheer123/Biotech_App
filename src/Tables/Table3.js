import * as React from 'react';
import { ScrollView, StyleSheet,Dimensions,View, Text } from 'react-native';
import { DataTable, Card, withTheme, Theme } from 'react-native-paper';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {SearchBar} from 'react-native-elements';
const KEYS_TO_FILTERS = ['name', 'calories','fat'];


type Props = {
  theme: Theme;
};

type State = {
  page: number;
  sortAscending: boolean;
  items: Array<{ key: number; name: string; calories: number; fat: number }>;
};

class DataTableExample extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          page: 0,
          searchTerm: '',
          sortAscending: true,
         
          items: [
            {
              key: 1,
              name: 'Cupcake',
              calories: 356,
              fat: 16,
            },
            {
              key: 2,
              name: 'Eclair',
              calories: 262,
              fat: 16,
            },
            {
              key: 3,
              name: 'Frozen yogurt',
              calories: 159,
              fat: 6,
            },
            {
              key: 4,
              name: 'Gingerbread',
              calories: 305,
              fat: 3.7,
            },
            {
              key: 5,
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9,
            },
            {
              key: 6,
              name: 'Jelly Bean',
              calories: 375,
              fat: 0,
            },
          ],
        }
        Dimensions.addEventListener("change", (e) => {
          this.setState(e.window);
        });
      }
  static title = 'Data Table';

 
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    let filteredEmails = this.state.items.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    const { sortAscending } = this.state;

    filteredEmails = filteredEmails
      .slice()
      .sort((item1, item2) =>
        (sortAscending
        ? item1.name < item2.name
        : item2.name < item1.name)
          ? 1
          : -1
      );
    const itemsPerPage = 4;
    const from = this.state.page * itemsPerPage;
    const to = (this.state.page + 1) * itemsPerPage;
            let a=0;
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: background,width:this.state.width}]}
        contentContainerStyle={styles.content}
        horizontal={true}
      >
        <Card>
            <View>
            <SearchBar        
      placeholder="Type Here..."        
       containerStyle={{backgroundColor:'white',padding:0,borderColor:'#cacaca',borderTopWidth:0,borderBottomWidth:0,borderWidth:0}}
       inputContainerStyle={{backgroundColor:'#cacaca'}}    
      value={this.state.searchTerm}       
      onChangeText={(term) => { this.searchUpdated(term) }} 
      autoCorrect={false}             
    />    
            {/* <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          /> */}
            </View>
          <DataTable >
            <DataTable.Header style={{backgroundColor:'#F27F24'}}>
              <DataTable.Title
                sortDirection={
                  this.state.sortAscending ? 'ascending' : 'descending'
                }
                onPress={() =>
                  this.setState(state => ({
                    sortAscending: !state.sortAscending,
                  }))
                }
                style={styles.first}
              >
                Dessert
              </DataTable.Title>
              <DataTable.Title numeric style={{width:500}}>Calories</DataTable.Title>
              <DataTable.Title numeric style={{width:500}}>Fat (g)</DataTable.Title>
              
            </DataTable.Header>
            
            {

                
            filteredEmails.length !== 0 ?
            filteredEmails.slice(from, to).map(item => (
                
                a++%2 ===0 ?
                <DataTable.Row key={item.key}  >
                <DataTable.Cell style={styles.first}>
                    
                  {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric  style={{width:500}}>{item.calories}</DataTable.Cell>
                <DataTable.Cell numeric  style={{width:500}}>{item.fat}</DataTable.Cell>
              </DataTable.Row>
                :  <DataTable.Row key={item.key} style={{backgroundColor:'#fafafa'}}  >
                <DataTable.Cell style={styles.first}>
                  {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric  style={{width:500}}>{item.calories}</DataTable.Cell>
                <DataTable.Cell numeric  style={{width:500}}>{item.fat}</DataTable.Cell>
              </DataTable.Row>
              
            ))
            
            :
            <View style={{justifyContent:'center',alignItems:'center',height:50}}><Text style={{fontSize:18}}>No record to Display</Text></View> 
            
            }
        

            <DataTable.Pagination
              page={this.state.page}
              numberOfPages={Math.ceil(filteredEmails.length / itemsPerPage)}
              onPageChange={page => {
                this.setState({ page });
              }}
              label={`${from + 1}-${to} of ${filteredEmails.length}`}
              style={{justifyContent:'flex-end'}}
            />
          </DataTable>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 8,
  },

  first: {
    flex: 2,
    width:500
  },
});

export default withTheme(DataTableExample);