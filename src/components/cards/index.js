import React from "react";
import { Card } from "./card";
import './style.css';

const data = {
  Poster: "images/download.jpg",
  Name: "Forrest Gump - O Contador de Histórias",
  Age: 14,
  Year: 1994,
  Category: [
    "Romance",
    "Drama"
  ],
  Streams: [
    "Netflix",
    "Amazon Prime",
    "Apple TV"
  ]
}

export default function Cards() {
  return (
    <div className="cards-conteiner">
    <h2> Opções</h2>

      <div className="card-content">
        <Card
          data={data} />
        <Card 
          data={data} />
        <Card 
          data={data} />
        <Card 
          data={data} />
        <Card 
          data={data} />
      </div>
    </div>
  )
}