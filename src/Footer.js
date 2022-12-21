import DataContext from './context/DataContext';
import { useContext } from 'react';

const Footer = () => {
    const { length } = useContext(DataContext)
    return (
        <footer>
            <p>{length} List {length === 1 ? "item" : "items"}</p>
        </footer>
    )
}

export default Footer