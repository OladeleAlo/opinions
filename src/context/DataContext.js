import { createContext, useState } from "react";
import { useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const length = items.length

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <DataContext.Provider
      value={{
        items,
        search, setSearch,
        setItems,
        newItem,
        setNewItem,
        handleSubmit,
        addItem,
        handleDelete,
        length
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
