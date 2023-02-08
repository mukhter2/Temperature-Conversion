export default function BoilingVerdict({ celcius = 0 }) {
    if (celcius >= 100) {
        return <p>The Water will boil</p>;
    }
    return <p>The Water will not boil</p>;
}
