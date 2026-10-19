import React from "react";

export default function PasIncrement(props) {
    return (
        <>
            <label>Pas d'incrémentation : </label>
            <input 
                type="number" 
                value={props.step} 
                onChange={(e) => props.changeStep(Number(e.target.value))} 
            />
        </>
    );
}