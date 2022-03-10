import "./App.css";
import { Header } from "lib-movies";

import SearchPage from "./Components/SearchPage";
function App() {
  return (
    <>
      <Header label={"Movie Data Base Search"}></Header>
      <SearchPage></SearchPage>
    </>
  );
}

export default App;
