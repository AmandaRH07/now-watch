import React from "react";
import './style.css';
import ConvertParentalPating from '../../../utils'
import capa from '../../../../src/images/download.jpg'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

export function CardConfig(data) {
  const consumeData = data.data;
  return (
    <Card className="card">
      <img src={capa} />
      <div className="card-infos">
        <p className="card-first">{consumeData.Name}</p>

        <div className="card-row-divided">
          {consumeData.Category.map((item, index) =>
            <Chip
              key={index}
              label={item}
              variant="outlined"
              size="small"
              sx={{ marginRight: 1, marginTop: 1 }}
            />
          )}
          <div className="card-row-second">
            {ConvertParentalPating(`${consumeData.Age}`)}
          </div>
        </div>
        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-divided">
          <div className="card-row-first">
            {consumeData.Gender.map((item, index) =>
              <Chip
                key={index}
                label={item}
                variant="outlined"
                size="small"
                sx={{ marginRight: 1, marginTop: 1 }}
              />
            )}
          </div>
          <div className="card-row-second">
            <p>{consumeData.Year}</p>
          </div>
        </div>

        <Divider variant="middle" sx={{ marginTop: 1 }} />

        <div className="card-row-all">
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