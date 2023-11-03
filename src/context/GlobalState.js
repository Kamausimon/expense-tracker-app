import React,{createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//initial state
const initialState ={
    transactions: [
        {id:1, text:'Flowers', amount:-20},
        {id:2, text:'salary', amount:300},
        {id:3, text:'book', amount:-10},
        {id:4, text:'camera', amount:150}
    ]
}

//export context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
   const [state, dispatch] = useReducer(AppReducer, initialState);

   //actions
   function deleteTransaction(id) {
       dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
       })
   }

   return(
    <GlobalContext.Provider value={{  transactions: state.transactions, deleteTransaction}}>
        {children}
    </GlobalContext.Provider>
   )
}
