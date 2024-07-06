function CalcDisplayelements({ ele, onButtonClick }) {
    return <>
        <div class="grid text-center fixelements">
            <button className="butt" onClick={onButtonClick}>{ele}</button>
        </div>
    </>
}

export default CalcDisplayelements;