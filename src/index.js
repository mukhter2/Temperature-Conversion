import ReactDOM from 'react-dom';

class Clock {
    static print() {
        return (
            <h1 className="header">
                <span>Hello world, </span>
                date: {new Date().toLocaleTimeString()}
            </h1>
        );
    }
}
const ClockComponent = new Clock();

ReactDOM.render(ClockComponent.print(), document.getElementById('root'));
console.log(ClockComponent);
