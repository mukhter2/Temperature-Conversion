import Clock from './Clock';

export default function ClockList({ quantities = [] }) {
    return (
        <div>
            {quantities.map(() => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}
