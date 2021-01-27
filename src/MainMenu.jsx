import React from 'react';

const MainMenu = (props) => {

    const showBalance = () => {
        var i;
        for(i = 0; i < props.accounts.length; i++) {
            console.log(props.accounts[i])
            if(props.accounts[i].owner === props.customer.id){
                console.log(props.accounts[i].balance)
                return <p>Account balance is {props.accounts[i].balance}</p>
               
            }
            console.log("No accounts found");
            return <p> no accounts found </p>
        }
    }
    const test = () => {
        let str = "<p> Test text</p>"
        return str;
    }


    return (
        <div>
            <button onClick = {props.logout}>Logout current user</button>
            <br/><br/>
            <br></br>
            <button onClick = {showBalance}>Show current Balance</button>
            <button onClick = {test}>Test button</button>
        </div>
    );
};

export default MainMenu;