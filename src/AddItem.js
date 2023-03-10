import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import DataContext from './context/DataContext';
import { useContext } from 'react';

const AddItem = () => {
    const { newItem, setNewItem, handleSubmit } = useContext(DataContext)
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='whats your opinion'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem