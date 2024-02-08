import { useSelector } from 'react-redux';
import '../App.css';

export default function Counter() {
    const count: number = useSelector((state) => state);

    return (
        <div className="counter">
            <h1>Value: </h1>
            <h1>{ count }</h1>
        </div>
    );
}
