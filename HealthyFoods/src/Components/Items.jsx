import styles from "./Items.module.css";
const Items = ({ fooditems }) => {

    return <>
        <li className={`${styles["itemm-bg"]} list-group-item`}>{fooditems}</li>
    </>
}

export default Items;