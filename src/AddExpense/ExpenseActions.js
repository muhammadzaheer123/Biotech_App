
   export const ExpenseAccountUpdate = (text) => {
       console.log('action...text...',text)
     return {
       type: 'ADD_EXPENSE_ACCOUNT',
       payload: text
     };
 };

 export const ExpenseHeadUpdate = (text) => {
    console.log('action...text...',text)
  return {
    type: 'ADD_EXPENSE_HEAD',
    payload: text
  };
};
 
export const AddNewLine = ( id ) => {
    console.log('action...text...',id)
  return {
    type: 'ADD_NEW_LINE',
    payload: id
  };
};
export const AddNewLineNumber = ( value ) => {
    console.log('action...text...',value)
  return {
    type: 'ADD_LINE_NUMBER',
    payload: value
  };
};

export const RemoveItem = ( value ) => {
    console.log('action...text...',value)
  return {
    type: 'REMOVE_EXPENSE',
    payload: value
  };
};

export const UpdateNarration = ( index, value ) => {
  console.log('action...text...',value)
return {
  type: 'ADD_NARATION',
  payload: index,
  value: value
};
};

export const UpdateAmount = ( index, value ) => {
  console.log('action...text...',value)
return {
  type: 'ADD_AMOUNT',
  payload: index,
  value: value
};
};