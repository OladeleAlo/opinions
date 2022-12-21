import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="Opinion" />
      <DataProvider>
        <AddItem />
        <SearchItem />
        <Content />

        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
