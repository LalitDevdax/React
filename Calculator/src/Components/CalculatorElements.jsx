import CalcDisplayelements from "./CalcDisplayelements"
const CalculatorElements = ({ elements }) => {
    return <>
        <div className="fixele">
            {elements.map((expressions) => <CalcDisplayelements ele={expressions}></CalcDisplayelements>)}
        </div>
    </>

}
export default CalculatorElements;