import React from "react";
import './style.css';
import { ConvertParentalPating, CaptalizeFirstLetter } from '../../../utils'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

const CardConfig = ({cardsMapData} ) => {

  return (
    <Card className="card" >
      <img src={cardsMapData.posterURLs.original} alt="poster"/>
      <div className="card-infos">
        <p className="card-first">{cardsMapData.title}</p>

        <div className="card-row-divided">
          <Chip
            label={CaptalizeFirstLetter(cardsMapData.type)}
            size="small"
            sx={{ marginRight: 1, marginTop: 1 }}
            disabled
          />
          <div className="card-row-second">
            {ConvertParentalPating(cardsMapData.advisedMinimumAudienceAge)}
          </div>
        </div>
        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-divided">
          <div className="card-row-first">
            {cardsMapData.genres.map((item, index) =>
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
            <p>{cardsMapData.firstAirYear}</p>
          </div>
        </div>

        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-all">
          {Object.entries(cardsMapData.streamingInfo.br || {}).map((item, index) =>
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

export default CardConfig;