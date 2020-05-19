const add_expense = (state = {text:'',expenseHead:'Expense1',addLine:1,items: [{ id: 1,narration:'',addamount:'' }]}, action) => {
    console.log('reducer',action.payload);
    switch (action.type) {
        
        case 'ADD_EXPENSE_ACCOUNT':
           return {...state,text: action.payload} 
        case 'ADD_EXPENSE_HEAD':
            return {...state,expenseHead:action.payload}
        case 'ADD_NEW_LINE':
            return {...state,items:[...prevState.items, {id:prevState.addLine + 1}]}
        case 'ADD_LINE_NUMBER':
               const prevState = state.addLine+1; 
               const previousItems = state.items.concat({id:prevState})
             return {...state,addLine:prevState,items:previousItems}
        case 'REMOVE_EXPENSE':
                const upadatedRecord = state.items.filter(item => item.id !== action.payload)
              return {...state,items:upadatedRecord}
        case 'ADD_NARATION':    
                const record = state.items.findIndex(item => item.id == action.payload)
                state.items[record].narration =  action.value
                const it = state.items
            return {...state,items:it}
        case 'ADD_AMOUNT':    
                const record1 = state.items.findIndex(item => item.id == action.payload)
                state.items[record1].addamount =  action.value
                const it1 = state.items
            return {...state,items:it1}
        default:
            return state
    } 
  }
  
  export default add_expense