import React, {useEffect} from "react";
import api from "../../fetch";
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

const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/basic',
    params: {
      country: 'us',
      service: 'netflix',
      type: 'movie',
      genre: '18',
      page: '1',
      output_language: 'en',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'a08b4892damsh53c57fca6e1477ap162e77jsn6c2433727c0a',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };


  function fecthData(){
    api.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    }); 
}

export default function Cards() {

  useEffect(() => {
    fecthData();
  });

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