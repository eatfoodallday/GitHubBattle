var React = require('react');

function puke (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
    return props.isLoading === true // if isloading is true
    ? <p> LOADING! </p> 
    // print out loading
    : <div> CONFIRM BATTLE!: {puke(props)}</div>
    // else confirm battle!
}
       
module.exports = ConfirmBattle;