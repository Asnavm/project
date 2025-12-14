import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import {originals,action, comedy} from './url'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <NavBar/>
  
      <Banner/>
  <RowPost url={originals} title='Netflix Originals' />
  <RowPost url={action} title='Action' isSmall />
  <RowPost url={comedy} title='Comedy Movies' isSmall />
    </div>
  );
}

export default App;
