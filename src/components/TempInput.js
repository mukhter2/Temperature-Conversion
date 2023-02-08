import React from 'react';

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit',
};

export default function TempInput({ temperature, scale, onTempChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} onChange={(e) => onTempChange(e, scale)} />
        </fieldset>
    );
}
