import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert,ScrollView } from 'react-native';
import { Table, TableWrapper,Col, Cols, Cell, TableWraper, Row } from 'react-native-table-component';

export default class ExampleFive extends Component {
  constructor(props) {
    super(props);
    const elementButton = (value) => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        [elementButton('1'), 'a', 'b', 'c', 'd'],
        [elementButton('2'), '1', '2', '3', '4'],
        [elementButton('3'), 'a', 'b', 'c', 'd']
      ]
    }
  }

  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  render() {
    const tableHead = ['Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9', 'Head10','Head11'];
    const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5'];
    const tableData = [
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
    ];
    const widthArr = [160, 160, 160, 160, 160, 160, 160, 160, 160, 160];
    const state = this.state;
    return (
        <View style={styles.container}>
          <Table style={styles.table}>
            {/* Left wraper */}
            <TableWrapper style={{width: 80}}>
              <Cell data="Head" style={styles.head} textStyle={styles.headText}/>
              {
                tableTitle.map((title, i) => (
                  <Cell key={i} data={title} height={28} style={[styles.title, i%2 && {backgroundColor: '#DFF5F2'}]} textStyle={styles.titleText}/>
                ))
              }
            </TableWrapper>
  
            {/* Right scrollview wraper */}
            <ScrollView horizontal={true}>
              {/* If parent element is not table element, you should add the type of borderstyle. */}
              <TableWrapper borderStyle={{borderWidth: 1,borderColor: '#000'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
                {
                  tableData.map((data, i) => (
                    <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                  ))
                }
              </TableWrapper>
            </ScrollView>
          </Table>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  singleHead: { width: 80, height: 40, backgroundColor: '#c8e1ff', borderWidth:0 },
  //head: { flex: 1, backgroundColor: '#c8e1ff', borderWidth:0 },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  //titleText: { marginRight: 6, textAlign:'right' },
  text: { textAlign: 'center'  },
  btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' },
    table: { width: '100%', flexDirection: 'row' },
    head: { backgroundColor: '#333', height: 60,width:'100%' },
    headText: { color: '#fff', textAlign: 'center'},
    titleText: { marginLeft: 6 },
    list: { height: 50, backgroundColor: '#f0f0f0' },
    listText: { textAlign: 'right', marginRight: 6}

});