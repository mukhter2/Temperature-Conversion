import React from 'react';
import { convert, toCelcius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TempInput from './TempInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    // onTempChange = (e) => {
    //     this.setState({
    //         temperature: e.target.value,
    //     });
    // };

    render() {
        const { temperature, scale } = this.state;
        const celcius = scale === 'f' ? convert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TempInput scale="c" temperature={celcius} onTempChange={this.handleChange} />
                <TempInput scale="f" temperature={fahrenheit} onTempChange={this.handleChange} />

                <BoilingVerdict celcius={parseFloat(temperature)} />
            </div>
        );
    }
}
