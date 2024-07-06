function FoodInput({ handleInput, handleadd, inputValue, handleKeyPress }) {


    return <>

        <li className="list-group-item">
            <div className="input-container">
                <input type="text" placeholder="Enter Food Item" className="handleinput" onInput={(e) => handleInput(e)} value={inputValue} onKeyPress={handleKeyPress} />
                <button type="button" className="btn btn-primary add-button" onClick={handleadd}>Add</button>
            </div>
        </li>



    </>
}

export default FoodInput;