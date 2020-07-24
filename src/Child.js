import React,{useContext, useState} from 'react';
import { TransationContext} from './transContext';


function Child() {
   let {transactions,addTransaction} = useContext(TransationContext);
   let [newDesc , setDesc]=useState("");
   let [newAmount , setAmount]=useState(0);
   const handelAddition=(event)=>{
       event.preventDefault();
       if (Number(newAmount)===0){

       alert("Please Enter Correct Value")
    return false;
    }
       addTransaction({
           amount: Number(newAmount),
           desc: newDesc
       })
   }
   const getIncome =()=>{
       let income =0
       for (var i=0; i<transactions.length;i++){
           if (transactions[i].amount>0)
           income += transactions[i].amount
       }
    return income
    }
       const getExpense = ()=>{
           let expense =0;
           for (var i=0;i<transactions.length;i++){
            if (transactions[i].amount<0)
         
            expense += transactions[i].amount
   }
return expense;
}
   return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br />{getIncome()+getExpense()} </h3>
            <div className="expense-contaienr">
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>EXPENSE <br /> {getExpense()}</h3>

            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
            {transactions.map((transobj,ind)=>{
                return(
                    <li key={ind}>
                <span>
                    {transobj.desc}
                </span>
                <span>{transobj.amount}</span>
            </li>
                )
            })}
        
            </ul>
            <h3>Add new transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handelAddition} >
                <label>
                    Enter Description <br />
                    <input type="text" required onChange={(ev)=>setDesc(ev.target.value)} />
                </label>
                <label>
                    Enter Amount <br />
                    <input type="number" required onChange={(ev)=>setAmount(ev.target.value)} />
                </label>
                <br />
                <input type="submit" value="Add transaction" />
            </form>
        </div>
    );
}

export default Child;
