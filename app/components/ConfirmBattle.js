var React = require('react');

function ConfirmBattle(props){
    return props.isLoading === true // if isloading is true
    ? <p> LOADING! </p> 
    // print out loading
    : <p> CONFIRM BATTLE! </p>
    // else confirm battle!
}
       
module.exports = ConfirmBattle;