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
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>
                        {/* eslint-disable-next-line react/destructuring-assignment */}
                        Hello world, date: {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                {locale === 'en-US' ? (
                    <Button change={this.handleClick} locale="bn-BD" show enable={false} />
                ) : (
                    <Button change={this.handleClick} locale="en-US" show={false} enable />
                )}
            </div>
        );
    }
}

export default Clock;
