import { useSelector } from 'react-redux';
import { itemSelector } from '../slices/cartSlice';
import '../App.css';

export default function Counter() {
    const items = useSelector(itemSelector);
    console.log(items);

    const total = items?.reduce((acc, item) => acc + item?.price, 0);
    return (
        <div className="cart">
            <h1>Value: </h1>
            <h1>{total} Rs</h1>
        </div>
    );
}
