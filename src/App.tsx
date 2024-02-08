import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import products from './data/product.json';
import { addItem, removeItem } from './slices/cartSlice';
import './App.css';

export type CardProps = {
    id: number;
    image: string;
    productName: string;
    price: number;
};

type itemProp = Array<CardProps>;

const Card = ({ id, image, productName, price }: CardProps) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <img className="image" src={image} alt="product" />
            <h1>{productName}</h1>
            <h1>Price: {price}</h1>
            <button 
                onClick={
                    () => dispatch(
                        addItem({ id, image, productName, price})
                    )
                }
            >
                Add to Cart
            </button>
            <button 
                onClick={() => dispatch(
                        removeItem({ id })
                    )
                }
            >
                Remove
            </button>
        </div>
    );
};

export default function App() {
    const card: itemProp = products;

    return (
        <div className="App">
            <Cart />
            <div className="card-container">
                {card.map(
                    (item: CardProps): React.ReactElement => (
                        <Card key={item?.id} {...item} />
                    )
                )}
            </div>
        </div>
    );
}
