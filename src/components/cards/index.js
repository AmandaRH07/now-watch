import React, { useEffect, useContext, useState } from "react";
import api from "../../fetch";
import { CardConfig } from "./card";
import './style.css';
import FilterContext from '../../contexts/filter-context';

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
    }]
}

function GetService(filterService) {
  return Object.keys(filterService).map(x => filterService[x]).toString();
}

function GetType(filterType) {
  return Object.keys(filterType).map(x => filterType[x]).toString();
}

function GetGenres(filterGenre) {
  var genresString = Object.keys(filterGenre).map(x => filterGenre[x]).toString();
  var genreNum = genresString.replace(/[^0-9]/g,'');

  return genreNum;
}

export default function Cards() {
  const { filterService, filterType, filterGenre } = useContext(FilterContext);
  const [responseData, setResponseData] = useState([]);

  function fecthData(filterService, filterType, filterGenre) {
    console.log(GetService(filterService), GetType(filterType), GetGenres(filterGenre))

    if (Object.keys(filterType).length !== 0) {
      try {
        const options = {
          method: 'GET',
          url: 'https://streaming-availability.p.rapidapi.com/search/basic',
          params: {
            country: 'us',
            service: GetService(filterService),
            type: GetType(filterType),
            genre: GetGenres(filterGenre),
            page: '1',
            output_language: 'en',
            language: 'en'
          },
          headers: {
            'X-RapidAPI-Key': 'a08b4892damsh53c57fca6e1477ap162e77jsn6c2433727c0a',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
          }
        };
        api.request(options).then(function (response) {
          setResponseData(prevState => (
            {
              ...prevState,
              ...response.data
            }
          ))
        })
      }
      catch (error) {
        console.error(error);
      };
    }
  }

  console.log(responseData)

  useEffect(() => {
    fecthData(filterService, filterType, filterGenre);
  }, [filterService, filterType, filterGenre])

  return (
    <div className="cards-conteiner">
      <div className="card-content">
        <CardConfig
          data={data} />
        {/* { responseData.forEach((item, index) =>
          console.log(responseData[index]) &&
          console.log(responseData[item])
          // <CardConfig
          //   data={item} />
        )} */}
      </div>
    </div>
  )
}