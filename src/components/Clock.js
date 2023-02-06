import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>
                        {/* eslint-disable-next-line react/destructuring-assignment */}
                        Hello world, date: {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                {/* <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>
                    Click Here
                </button> */}
                {/* eslint-disable-next-line react/jsx-no-bind */}
                <Button
                    change={() => {
                        this.handleClick(this, 'en-US');
                    }}
                >
                    {' '}
                </Button>
            </div>
        );
    }
}

export default Clock;
