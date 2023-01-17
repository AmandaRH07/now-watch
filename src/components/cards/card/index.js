import React from "react";
import './style.css';
import ConvertParentalPating from '../../../utils'
import capa from '../../../../src/images/download.jpg'

export function Card(data) {
  return (
    <div className="card">
      <img src={capa} />
      <div className="card-infos">
        <p className="card-first">{data.data.Name}</p>
        <div className="card-row">
          <p>{data.data.Year}</p>
          <div className="card-row-second">
            {ConvertParentalPating("L")}
          </div>
        </div>
        <p className="card-second">{data.data.Category}</p>
        <p>{data.data.Streams}</p>
      </div>
    </div>
  )
}