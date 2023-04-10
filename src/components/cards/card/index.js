import React from "react";
import './style.css';
import { ConvertParentalPating, CaptalizeFirstLetter } from '../../../utils'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

export function CardConfig({ cardsMapData }) {
  const data = cardsMapData[1];

  return (
    <Card className="card" >
      <img src={data.posterURLs.original} alt="poster"/>
      <div className="card-infos">
        <p className="card-first">{data.title}</p>

        <div className="card-row-divided">
          <Chip
            label={CaptalizeFirstLetter(data.type)}
            size="small"
            sx={{ marginRight: 1, marginTop: 1 }}
            disabled
          />
          <div className="card-row-second">
            {ConvertParentalPating(data.advisedMinimumAudienceAge)}
          </div>
        </div>
        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-divided">
          <div className="card-row-first">
            {data.genres.map((item, index) =>
              <Chip
                key={index}
                label={item.name}
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
          {Object.entries(data.streamingInfo.br || {}).map((item, index) =>
            <Chip
              key={index}
              label={CaptalizeFirstLetter(item[0])}
              component="a"
              href={item[1].map(l => l.link)}
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