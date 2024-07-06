import CalcDisplayelements from "./CalcDisplayelements"
const CalculatorElements = ({ elements, onButtonClick }) => {

    return <>
        <div className="fixele">
            {elements.map((expressions) => <CalcDisplayelements ele={expressions} onButtonClick={() => onButtonClick(expressions)}></CalcDisplayelements>)}
        </div>
    </>

}
export default CalculatorElements;