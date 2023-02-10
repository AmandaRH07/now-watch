import React from "react";
import { CardConfig } from "./card";
import './style.css';

const data = {
  Poster: "images/download.jpg",
  Name: "Forrest Gump - O Contador de Histórias",
  Age: 12,
  Year: 1994,
  
  Gender: [
    "Romance",
    "Drama",
    "Terror",
    "Comédia", 

  ],
  Category: [
    "Filme",
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
    },
    {
      name: "HBO",
      link: []
    },
    {
      name: "Star+",
      link: []
    }
  ]
}

const data2 = {
  Poster: "images/download.jpg",
  Name: "Forrest Gump - O Contador de Histórias",
  Age: 12,
  Year: 1994,
  
  Gender: [
    "Romance",
    "Drama",
  ],
  Category: [
    "Série",
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
      <div className="card-content">
        <CardConfig
          data={data} />
        <CardConfig 
          data={data2} />
        <CardConfig 
          data={data} />
        <CardConfig 
          data={data2} />
        <CardConfig 
          data={data} />
      </div>
    </div>
  )
}