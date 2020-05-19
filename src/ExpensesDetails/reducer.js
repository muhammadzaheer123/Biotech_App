import {
  EXPENSE_FETCH,
  EXPENSE_FETCH_FAIL,
  EXPENSE_FETCH_SUCCESS,
  INTERNET_CONNECTION_FAIL
  } from './types';
  
  const INITIAL_STATE = {
    data:[],
    loading: false,
    error:''
        
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EXPENSE_FETCH:
        return { ...state, loading: true, error: ''  };
      case EXPENSE_FETCH_SUCCESS:
        return { ...state, ...INITIAL_STATE, data: action.payload,loading: false,error:'' };
      case EXPENSE_FETCH_FAIL:
        return { ...state, error: 'Failed.',loading: false };
      case INTERNET_CONNECTION_FAIL:
        return { ...state, error: 'Internet is not Connected', password: '', token: '',loading: false }
      default:
        return state;
    }
  };