import React from 'react';

const NewCustomer = (props) => {

    const submitForm = event =>  {
        event.preventDefault();
        props.addCustomer(event);
    }


    return (
        <div>
           <form onSubmit ={submitForm} > 
        <label htmlFor = "name">Name</label>
        <input id = "name" type = "text"></input>
        <br></br>
        <label htmlFor = "password">Password</label>
        <input id = "password" type = "text"></input>
        <br></br>
        <label htmlFor="accountType">account Type</label>
      <select name = "accounttype" id = "accountType">
        <option value = "Checking">Checking</option>
        <option value = "Savings"> Savings</option>
      </select>
      <br></br>
      <label htmlFor="deposit">Amount to deposit</label>
      <input type = "number" id = "deposit"></input>
      <input type = "submit"></input>
   </form>
   <br/>
   <br/>
   <br/>
   <p> Or login</p>

   <form onSubmit={props.login}>
      <label htmlFor = "id">ID number</label>
      <input type = "text" id = "id"></input>
      <br></br>
      <label htmlFor = "password">Password</label>
      <input type = "text" id = "password"></input>
      <input type = "submit"></input>
   </form>

        </div>
    );
};

export default NewCustomer;