import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1 className="heading">
                    <span>
                        {/* eslint-disable-next-line react/destructuring-assignment */}
                        Hello world, date: {this.state.date.toLocaleTimeString(this.props.locale)}
                    </span>
                </h1>
            </div>
        );
    }
}

export default Clock;
