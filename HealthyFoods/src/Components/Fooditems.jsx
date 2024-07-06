import Items from "./Items";
function Fooditems({ items }) {

    if (items.length === 0) {

        return <>
            <ul className="list-group">
                <li className="list-group-item "><h4>I'm Hungryy - Fill Me Up</h4></li>
            </ul>
        </>
    }


    return (
        <>
            <ul className="list-group ">
                {items.map((itemstoiterate) =>
                    <Items key={itemstoiterate} fooditems={itemstoiterate}></Items>
                )}
            </ul>
        </>
    )
}

export default Fooditems;