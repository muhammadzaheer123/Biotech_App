import * as React from 'react';
import { ScrollView, StyleSheet,View, Text } from 'react-native';
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
  static title = 'Data Table';

  state = {
    page: 0,
    searchTerm: '',
    sortAscending: true,
    backC: 'gray',
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
  };
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
    const itemsPerPage = 2;
    const from = this.state.page * itemsPerPage;
    const to = (this.state.page + 1) * itemsPerPage;

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
        <Card>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'60%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22}}>Table Example</Text>   
                </View>
                <View style={{width:'40%'}}>
                <SearchBar        
      placeholder="Search..."        
       containerStyle={{backgroundColor:'white',padding:5,paddingBottom:15,borderColor:'#cacaca',borderTopWidth:0,borderBottomWidth:0,borderWidth:0}}
       inputContainerStyle={{backgroundColor:'white'}} 
       inputStyle={{color:'black'}}   
      value={this.state.searchTerm}    
      underlineColorAndroid='red'   
      onChangeText={(term) => { this.searchUpdated(term) }} 
      autoCorrect={false}             
    />    
                </View>
           
            </View>
          <DataTable>
            <DataTable.Header style={{backgroundColor:'#fafafa'}}>
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
              </DataTable.Title >
              <DataTable.Title numeric style={styles.first}>Calories</DataTable.Title>
              <DataTable.Title numeric style={styles.first}>Fat (g)</DataTable.Title>
            </DataTable.Header>

            {filteredEmails.slice(from, to).map(item => (
              <DataTable.Row key={item.key} >
                <DataTable.Cell style={styles.first}>
                  {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric style={styles.first}>{item.calories}</DataTable.Cell>
                <DataTable.Cell numeric style={styles.first}>{item.fat}</DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={this.state.page}
              numberOfPages={Math.floor(filteredEmails.length / itemsPerPage)}
              onPageChange={page => {
                this.setState({ page });
              }}
              label={`${from + 1}-${to} of ${filteredEmails.length}`}
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
  },
});

export default withTheme(DataTableExample);