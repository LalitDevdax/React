function Random(){
    let number = Math.floor(Math.random() * 10);
    return <>
        <h2>Random Number : {number}</h2>
    </>
}

export default Random;