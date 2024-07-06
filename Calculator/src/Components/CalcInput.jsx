import { useState } from "react";

function CalcInput({ displayvalue }) {

    return <>
        <input type="text" className='inputx' value={displayvalue} readOnly />
    </>
}

export default CalcInput;