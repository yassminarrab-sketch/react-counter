import React, { useState } from "react";
import Valeur from './Valeur';
import PasIncrement from './PasIncrement';
import PasDecrement from './PasDecrement';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [IncStep, setIncStep] = useState(1);
    const [DecStep, setDecStep] = useState(1);

    const increment = () => setCount(prev => prev + IncStep);
    const decrement = () => setCount(prev => prev - DecStep); // Fixed to minus
    const initialise = () => setCount(0);

    return (
        <>
            <Valeur count={count} />
            <button onClick={increment}>Incrementer</button>
            <button onClick={decrement}>Decrementer</button>
            <button onClick={initialise}>Initialiser</button>
            
            <PasIncrement step={IncStep} changeStep={setIncStep} />
            <PasDecrement step={DecStep} changeStep={setDecStep} />
        </>
    );
}