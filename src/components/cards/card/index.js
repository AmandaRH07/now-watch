import React from "react";
import './style.css';
import ConvertParentalPating from '../../../utils'
import capa from '../../../../src/images/download.jpg'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';

export function CardConfig(data) {
  const consumeData = data.data;
  return (
    <Card className="card">
      <img src={capa} />
      <div className="card-infos">
        <p className="card-first">{consumeData.Name}</p>
        <div className="card-row">
          <p>{consumeData.Year}</p>
          <div className="card-row-second">
            {ConvertParentalPating(`${consumeData.Age}`)}
          </div>
        </div>
        <div className="card-categories">
          {consumeData.Category.map((item, index) =>
            <Chip
              key={index}
              label={item}
              variant="outlined"
              size="small"
              sx={{ marginRight: 1, marginTop: 1 }}
            />
          )}
        </div>
        <div className="card-streamings">
          {consumeData.Streams.map((item, index) =>
          (item.link.length == 0
            ? <Chip
              label={item.name}
              key={index}
              size="small"
              sx={{ marginRight: 1, marginTop: 1 }}
            />
            : <Chip
              key={index}
              label={item.name}
              component="a"
              href={item.link}
              variant="outlined"
              clickable
              size="small"
              sx={{ marginRight: 1, marginTop: 1 }}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}