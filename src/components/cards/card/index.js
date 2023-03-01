import React from "react";
import './style.css';
import { ConvertParentalPating, CaptalizeFirstLetter } from '../../../utils'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

export function CardConfig({ type, cardsMapData }) {
  const index = cardsMapData[0];
  const data = cardsMapData[1];

  const genresApi = {
    1: "Biography",
    2: "Film Noir",
    3: "Game Show",
    4: "Musical",
    5: "Sport",
    6: "Short",
    7: "Adult",
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Science Fiction",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10752: "War",
    10763: "News",
    10764: "Reality",
    10767: "Talk Show",
  }

  const HandleGenresCards = (values) => {
    return Object.entries(genresApi).map(i => i[0] === values ? i[1] : "")
  }

  return (
    <Card className="card" key={index} >
      <img src={data.posterURLs.original} />
      <div className="card-infos">
        <p className="card-first">{data.title}</p>

        <div className="card-row-divided">
          <Chip
            label={type}
            size="small"
            sx={{ marginRight: 1, marginTop: 1 }}
            disabled
          />
          <div className="card-row-second">
            {ConvertParentalPating(`${data.age}`)}
          </div>
        </div>
        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-divided">
          <div className="card-row-first">
            {data.genres.map((item, index) =>
              <Chip
                key={index}
                label={HandleGenresCards(item.toString())}
                variant="outlined"
                size="small"
                sx={{ marginRight: 1, marginTop: 1 }}
              />
            )}
          </div>
          <div className="card-row-second">
            <p>{data.year}</p>
          </div>
        </div>

        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-all">
          {Object.entries(data.streamingInfo).map((item, index) =>
            <Chip
              key={index}
              label={CaptalizeFirstLetter(item[0])}
              component="a"
              href={item[1].br.link}
              target="_blank"
              variant="outlined"
              clickable
              size="small"
              sx={{ marginRight: 1, marginTop: 1 }}
            />
          )}
        </div>
      </div>
    </Card>
  )
}