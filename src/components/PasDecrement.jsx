import React from "react";

export default function PasDecrement(props) {
    return (
        <>
            <label>Pas de décrémentation : </label>
            <input 
                type="number" 
                value={props.step} 
                onChange={(e) => props.changeStep(Number(e.target.value))} 
            />
        </>
    );
}