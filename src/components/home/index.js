import React from "react";
import Sidebar from "../sidebar";
import Cards from "../cards";
import Header from "../header";
import './style.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content-body">
        <Sidebar />
        <Cards />
      </div>
    </div>
  )
}