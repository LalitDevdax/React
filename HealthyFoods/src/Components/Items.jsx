const Items = ({ fooditems }) => {


    return <>
        <li className="list-group-item lastt">
            <span>{fooditems}</span>
            <button type="button" className="btn btn-outline-success fixbuy">Buy</button>
        </li>
    </>
}

export default Items;