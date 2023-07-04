import React from "react";
import Sidebar from "../sidebar";
import Cards from "../cards";
import Header from "../header";
import './style.css';
import SearchComponent from "../search";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content-body">
        <Sidebar />
        <div className="cards-body">
          <SearchComponent/>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Home;