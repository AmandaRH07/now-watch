import React from "react";
import { Card } from "./card";
import './style.css';

const data = {
  Poster: "images/download.jpg",
  Name: "Forrest Gump - O Contador de Histórias",
  Age: 12,
  Year: 1994,
  
  Category: [
    "Romance",
    "Drama"
  ],
  Streams: [
    {
      name: "Netflix",
      link: "https://www.netflix.com/br/title/60000724"
    },
    {
      name: "Amazon Prime",
      link: "https://www.primevideo.com/detail/Forrest-Gump/0NHF7IFLIDER9XNBFBK2HLMQXC"
    },
    {
      name: "Apple TV",
      link: []
    }
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