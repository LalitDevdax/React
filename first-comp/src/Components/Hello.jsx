function Hello(){
    let msgno=1;
    let myFirstName = 'Lalit';
    let myLastName = 'Devda';
    let myFullName=()=>{
        return 'Lalit Devda'
    }
    return <>
    Message No : {msgno}
        <h3>My First name is : {myFirstName}</h3>
        <h3>My Last name is : {myLastName}</h3>
        <h3>My FUll name is : {myFullName()}</h3>
    
    </>
}

export default Hello;