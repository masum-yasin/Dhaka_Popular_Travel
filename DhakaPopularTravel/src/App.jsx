import "./App.css";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Travel/NavBar/NavBar";
import Table from "./Component/Travel/Table/Table";
import Search from "./Component/search/Search";

function App() {
  return (
    <>
      <NavBar />
      <Search />
      <Table />
      <Footer/>
    </>
  );
}

export default App;
