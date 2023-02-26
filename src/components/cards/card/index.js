import React from "react";
import './style.css';
import ConvertParentalPating from '../../../utils'
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

export function CardConfig(data1) {
  const data = data1.data;

  return (
    <Card className="card">
      <img src={data.posterURLs.original} />
      <div className="card-infos">
        <p className="card-first">{data.title}</p>

        <div className="card-row-divided">
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
                label={item}
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
          {/* {Object.keys(data.streamingInfo).map((item, index) =>
          // (item.length == 0
          //   ? <Chip
          //     label={item}
          //     key={index}
          //     size="small"
          //     sx={{ marginRight: 1, marginTop: 1 }}
          //   />
          //   : <Chip
          //     key={index}
          //     label={item}
          //     component="a"
          //     href={item.us.link}
          //     variant="outlined"
          //     clickable
          //     size="small"
          //     sx={{ marginRight: 1, marginTop: 1 }}
          //   />
          //  )
           )} */}
        </div>
      </div>
    </Card>
  )
}