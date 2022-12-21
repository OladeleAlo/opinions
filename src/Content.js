import ItemList from './ItemList';
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Content = () => {
    const { items, handleCheck, handleDelete,search } = useContext(DataContext)
   
    return (
        <main>
            {items.length ? (
                <ItemList
                items={items.filter((item) =>
                    item.item.toLowerCase().includes(search.toLowerCase())
                  )}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content