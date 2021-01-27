import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewCustomer from './NewCustomer';
import MainMenu from './MainMenu';

const App = () => {

  const [id, setId] = useState(2);

  const customer = {
    name: "Daniel",
    password: "password",
    id: 1
  }

  const [customers, setCustomers] = useState([customer]);

  const account = {
    type: "Checking",
    balance: 500,
    owner: customer.id,
    tlog: []
  }

  const [accounts, setAccounts] = useState([account]);

const [loggedInCustomer, setLoggedInCustomer] = useState();




  

 

  



const addCustomer = (customer) => {
  setCustomers(
    customers.push(customer)
  )
}

const logCustomer = () => {
  console.log(customer);
}
const logList = () => {
  console.log(customers);
  console.log(accounts);
}
const logLoggedIn = () => {
  console.log(loggedInCustomer);
}

const addNewCustomer = event => {
  event.preventDefault();
  console.log(event.target.name.value);
  setId(id+1)
  let customer = {
    name: event.target.name.value,
    password: event.target.password.value,
    id: id
    
  }
  customers.push(customer)
  addNewAccount(event, customer)
  setLoggedInCustomer(customer);

}

const addNewAccount = (event, customer) => {
  event.preventDefault();
  console.log(event.target.accountType.value);
  console.log(event.target.deposit.value)
  let account = {
    name: event.target.accountType.value,
    balance: parseInt(event.target.deposit.value),
    owner: customer.id,
    tlog: []
  }
  accounts.push(account);
  console.log(accounts);
}
const login = event => {
  event.preventDefault();
  var i;
  for(i = 0; i < customers.length; i++) {
    if(customers[i].id == event.target.id.value && customers[i].password === event.target.password.value) {
    setLoggedInCustomer(customers[i]);
    return;
    }
  }
  console.log("Incorrect password or ID");
  return <p>Incorrect password or ID</p>
}

const logout = () => {
  setLoggedInCustomer();
}

const withdraw = (amount, account) => {
  if(amount > account.balance) {
    console.log("You can't withdraw more than the balance")
  } else {
    account.balance = account.balance - amount;
    console.log("Account balance is now " + account.balance)
    account.tlog.push("withdrew $" + amount);
  }
 
}

const deposit = (amount, account) => {
  if(amount < 1) {
    console.log("You can't deposit that amount")
  } else {
    account.balance = account.balance + Number(amount);
    console.log("Account balance is now " + account.balance)
    account.tlog.push("Deposited $" + amount);
  }
}

const logAccounts = () => {
  console.log(accounts);
}


  return (
    
    <div className="App">
      {/* <form onSubmit ={() => addNewCustomer()}> 
        <label htmlFor = "name">Name</label>
        <input id = "name" type = "text"></input>
        <br></br>
        <label htmlFor = "password">Password</label>
        <input id = "password" type = "text"></input>
        <input type = "submit"></input>
      </form> */}
   <button onClick = {logCustomer} > Log customer </button>
   <button onClick = {logList} > Log customerList </button>
   <button onClick = {logAccounts}> Log Account List</button>
   <button onClick = {logLoggedIn}>Who is logged in?</button>
   <button onClick = {logout}> Logout</button>
   <br></br>
   {/* <form onSubmit={addNewAccount}>
      <label htmlFor="accountType">account Type</label>
      <select name = "accounttype" id = "accountType">
        <option value = "Checking">Checking</option>
        <option value = "Savings"> Savings</option>
      </select>
      <label htmlFor="deposit">Amount to deposit</label>
      <input type = "number" id = "deposit"></input>
      <input type = "submit"></input>
   </form> */}

   {/* <form onSubmit={login}>
      <label htmlFor = "id">ID number</label>
      <input type = "text" id = "id"></input>
      <br></br>
      <label htmlFor = "password">Password</label>
      <input type = "text" id = "password"></input>
      <input type = "submit"></input>
   </form> */}
   { !loggedInCustomer ? 
            <NewCustomer addCustomer = {addNewCustomer} login = {login}/>
           
             :
             <MainMenu customer = {loggedInCustomer} accounts = {accounts} logout = {logout} withdraw = {withdraw}
                        deposit = {deposit} />
   }
    
    </div>
  );
}

export default App;
