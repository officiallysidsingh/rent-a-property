import React, { useState } from "react";

function InputWithSearch(props){
    const [loc,setLoc]=useState('');
    return(
        <div className="main">
            <input list="data" onChange={(e)=>setLoc(e.target.value)} placeholder="Search" style={{ height: "30px", width: "20%"}} />
            <datalist id="data">
                {props.data.map((op)=><option key={op.id}>{op.name}</option>)}
            </datalist>
        </div>
    );
}
export default InputWithSearch;