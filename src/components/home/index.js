import React from "react";
import Sidebar from "../sidebar";
import Cards from "../cards";
import './style.css';

export default function Home() {
  return (
    <div>
      <div className="header-container">
        <h1>Now Watch</h1>
      </div>
      <div className="content-body">
        <Sidebar/>
        <Cards />
      </div>
    </div>
  )
}