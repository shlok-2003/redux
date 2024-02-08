import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import * as action from './redux/actionType';
import './App.css';


export default function App() {
    const dispatch = useDispatch();
    
    return (
        <div className="App">
            <Counter />
            <div className="buttons">
                <button onClick={() => dispatch({ type: action.INCREMENT })}>Increment</button>
                <button onClick={() => dispatch({ type: action.DECREMENT })}>Decrement</button>
            </div>
        </div>
    );
}
