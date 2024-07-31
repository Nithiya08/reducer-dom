import { useReducer, useState } from "react";
let initialState={name:'john', accno:'Ac123', balance:10000,err:null}
const reducer=(state,action)=>{
    switch(action.type){
        case 'withdraw':
            if((state.balance - action.payload)<500)
                return{...state,err:'Insuffucuent balance'}
            else
            return { ...state, balance:state.balance - action.payload,err:null}
            case 'deposit':
                return  { ...state, balance:state.balance + action.payload,err:null}
                case 'checkBalance':
                    return{...state, balance:state.balance,err:null}
    }
}

function BankAccount(){
    let [state,dispatch]=useReducer(reducer,initialState)
    let [amount,setamount]=useState(0)
    let [showBalance,setshowBalance]=useState(false)
    return(<>
    <b>Name:</b>{state.name}<br></br>
    <b>Account Number:</b>{state.accno}<br></br>
    <b>Enter The Amount</b><input type="text" value={amount} onChange={(event)=>setamount(event.target.value)}></input><br></br>
    <button onClick={()=>dispatch({'type':'withdraw' ,'payload':Number(amount)})}>Withdraw</button><br></br>
    <button onClick={()=>dispatch({'type':'deposit' ,'payload':Number(amount)})}>Deposit</button><br></br>
    <button onClick={()=>{setshowBalance(true); dispatch({'type':'checkBalance'})}}>checkBalance</button><br></br>
    {showBalance && <b>balance {state.balance} </b>}<br></br>
    {state.err && <b style={{color:'red'}}>{state.err}</b>}
    </>)
}
export default BankAccount