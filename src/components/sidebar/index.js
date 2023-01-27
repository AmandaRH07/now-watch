import React from "react";
import './style.css';
// import playBackground from '../../images/playBackground.png'

var sidebarOptions = [
  {
    id: 0,
    type: "Streamings",
    // options: "Netflix,
    options: [
      {
        options_id: 0,
        option: "Netflix",
        option: "Amazon Prime",
        option: "Apple TV",
        option: "HBO Max",
        option: "Disney Plus",
        option: "Star Plus",
        option: "Globo Play",
      }]
  },
  {
    id: 1,
    type: "Categories",
    options: [
      {
        options_id: 3,
        option: "Filme",
        option: "Série",
      }]
  },
  {
    id: 2,
    type: "Genres",
    options: [
      {
        options_id: 2,
        option: "Ação",
        option: "Animação",
        option: "Comédia",
        option: "Drama",
        option: "Ficção Científica",
        option: "Romance",
        option: "Terror",
      }]
  },
];

export default function sidebar() {

  const types = sidebarOptions.map(x => {
    return x.type;
  })

  return (
    <div className="sidebar-container" >
      <h2 className="titles-container"> Select your streamings options </h2>
      <div className="options-content">
     
      <fieldset className="check-image">
        <label for="like">
        <input type="checkbox" name="like" id="like" value="check"/>
          <i className="Teste"></i>
          {/* <p>Netflix</p> */}
        </label>
      </fieldset>
       
      </div> 
    </div >
  )
};

 {/* <input className="" type="radio" name="rad"/><label for="rad1">Radio 1</label> */}

        {/* { 
          types.map((element, index) => {
            console.log("EEE", element) &&
            <p key={index} className="sidebar-p">{element}</p>
          })
        }
        {
          sidebarOptions.forEach(x => {
            x.map(y => {
            console.log("XXX", y.option) &&
            <p  className="sidebar-p">{y.option}</p>
          })
        })
        } */}