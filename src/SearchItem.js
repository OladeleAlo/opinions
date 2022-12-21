import DataContext from './context/DataContext';
import { useContext } from 'react';

const SearchItem = () => {
    const { search, setSearch }= useContext(DataContext)
    
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Opinions'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem