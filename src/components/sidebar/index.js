import React from "react";
import './style.css';
import playBackground from '../../images/playBackground.png'

export default function sidebar() {
  return (
    <div className="sidebar-container" >
      <h2 className="titles-container"> Streamings </h2>
      <div className="options-content">
        <div className="select-stream">
          <input type="checkbox" class="radio_item" />
          <label class="label_item"> <img src={playBackground}/></label>
          <p className="sidebar-p">Netflix</p>
        </div>
        <p className="sidebar-p">Amazon Prime</p>
        <p className="sidebar-p">HBO Max</p>
        <p className="sidebar-p">Disney Plus</p>
        <p className="sidebar-p">Star Plus</p>
        <p className="sidebar-p">Globo Play</p>
      </div>
      <h2>Tipo</h2>
      <p className="sidebar-p">Filme</p>
      <p className="sidebar-p">Série</p>

      <h2>Gênero</h2>
      <p>Ação</p>
      <p>Animação</p>
      <p>Comédia</p>
      <p>Drama</p>
      <p>Ficção Científica</p>
      <p>Romance</p>
      <p>Terror</p>
    </div>
  )
};
