import React from "react";
import './style.css';
import ConvertParentalPating from '../../../utils'
import capa from '../../../../src/images/download.jpg'

export function Card(data) {
  return (
    <div>
      <img className="card-image" src={capa}></img>
      <p className="card-first">{data.data.Name}</p>

      <div className="card-row">
        <p className="card-row-first">{data.data.Year}</p>
        <div className="card-row-second">
          {ConvertParentalPating("L")}
        </div>
      </div>

      <p className="card-second">{data.data.Category}</p>
      <p>{data.data.Streams}</p>
    </div>
  )
}