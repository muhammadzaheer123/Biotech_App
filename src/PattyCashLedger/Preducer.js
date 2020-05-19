import {
    LEDGER_FETCH,
    LEDGER_FETCH_SUCCESS,
    LEDGER_FETCH_FAIL,
    INTERNET_CONNECTION_FAIL,
    LOADING_CHANGE
    } from './types';
    
    const INITIAL_STATE = {
      data:[],
      loading: true,
      error:''
          
    };
    
    
    export default (state = INITIAL_STATE, action) => {
     // console.log('ledgerjjjjjjjjjjjj');
      switch (action.type) {
        case LEDGER_FETCH:
          return { ...state, loading: true, error: ''  };
        case LEDGER_FETCH_SUCCESS:
          return { ...state, ...INITIAL_STATE, data: action.payload,loading: true,error:'' };
        case LEDGER_FETCH_FAIL:
          return { ...state, error: 'Failed.',newloading: true };
        case INTERNET_CONNECTION_FAIL:
          return { ...state, error: 'Internet is not Connected', password: '', token: '',loading: true }
        case LOADING_CHANGE:
          return {...state,loading:action.payload}
        default:
          return state;
      }
    };