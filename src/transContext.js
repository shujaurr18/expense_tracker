import React ,{ createContext, useReducer } from "react"
import TransactionReducer from "./transReducer";

const  intialTransactions = [

    {amount: 500, desc: "cash"},
    {amount: -50, desc: "Cold drink"},
    {amount: 100, desc: "Deposit"},

    {amount: -200, desc: "UTITLY BILL"}
]

export const TransationContext = createContext(intialTransactions);
export const TransactionProvider = ({children})=> {
    let [state, dispatch]= useReducer(TransactionReducer,intialTransactions)
function addTransaction(transobj){
    dispatch({
        type: "ADD_TRANSACTION",
        payload: {
            amount: transobj.amount,
            desc: transobj.desc
        }
    })
}
return(
    <TransationContext.Provider value={{
        transactions: state,
        addTransaction
    }}>
{children}
    </TransationContext.Provider>
)
}