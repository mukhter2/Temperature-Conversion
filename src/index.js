import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1 className="heading">
                <span>Hello world, date: {new Date().toLocaleTimeString()}</span>
            </h1>
        );
    }
}
ReactDOM.render(<Clock />, document.getElementById('root'));
