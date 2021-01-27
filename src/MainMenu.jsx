import React from 'react';

const MainMenu = (props) => {

    //Setting up account variable. I'll change it to accomodate multiple accounts per person later. probably just an array of accounts
    var account;
    var i;
    for(i = 0; i < props.accounts.length; i++) {
        if (props.accounts[i].owner === props.customer.id) {
            account = props.accounts[i];
        }
    }
    //Shows balance of account. Will need to make it show balances on all accounts
    const showBalance = () => {
        var i;
        for(i = 0; i < props.accounts.length; i++) {
            if(props.accounts[i].owner === props.customer.id){
                console.log(props.accounts[i].balance)
                return;
            }
        }
        console.log("No accounts found");
            return <p> no accounts found </p>
    }

    const withdrawMoney = (event, account) => {
        event.preventDefault();
        var i;
    for(i = 0; i < props.accounts.length; i++) {
        if (Number(props.accounts[i].owner) === Number(props.customer.id)) {
            props.withdraw(event.target.amount.value, props.accounts[i]);
        }
    }    

    }
   const depositMoney = (event, account) => {
       event.preventDefault();
       var i;
       for(i = 0; i < props.accounts.length; i++) {
           if(props.accounts[i].owner === props.customer.id) {
               props.deposit(event.target.amount.value, props.accounts[i])
           }
       }
   }

   const printCustomer = () => {
       console.log(props.customer)
   }

   //currently stacks transactions that are identical and sequential. Will need to fix later.
   const showTransactions = () => {
       var i;
       for(i = 0; i < account.tlog.length; i++) {
           console.log(account.tlog[i], "\n");
       }
   }

    return (
        <div>
            <button onClick = {props.logout}>Logout current user</button>
            <br/><br/>
            <br></br>
            <button onClick = {printCustomer}>Print customer details</button>
            <button onClick = {() => console.log(account)}>Show account</button>
            <button onClick = {showBalance}>Show current Balance</button>
            <form onSubmit= {withdrawMoney}>
                <p>Withdraw money</p>
                <input type = "numbers" id = "amount"></input>
                <label htmlFor = "Withdraw amount"></label>
                <input type = "submit"></input>
            </form>
            <br></br>
            <br></br>
            <form onSubmit = {depositMoney}>
                <p>Deposit money</p>
                <input type = "numbers" id = "amount"></input>
                <label htmlFor = "deposit amount"></label>
                <input type = "submit"></input>
            </form>
            <button onClick = {showTransactions}>Show transaction history</button>
        </div>
    );
};

export default MainMenu;