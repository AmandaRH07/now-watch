import React, {useState} from "react";
import { Checkbox } from '@mui/material';
import { PlayArrowOutlined, PlayArrow } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './style.css';

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

export default function Sidebar() {
  const [checkbox, setCheckbox] = useState("");

  const types = sidebarOptions.map(x => {
    return x.type;
  })

  return (
    <div className="sidebar-container" >
      <h2 className="titles-container"> Select your streamings options </h2>
      <div className="options-content">
        <FormGroup>
          <h3> Steamings</h3>
            <FormControlLabel 
              control={<Checkbox icon={<PlayArrowOutlined />} 
              checkedIcon={<PlayArrow />} />} 
              value="Netflix"
              label="Netflix" 
              onClick={() => { setCheckbox("true") 
                console.log("VALUE", checkbox)}}/>
            <FormControlLabel 
              control={<Checkbox icon={<PlayArrowOutlined />} 
              checkedIcon={<PlayArrow />} />} 
              value="AmazonPrime"
              label="AmazonPrime" />
            <FormControlLabel 
              control={<Checkbox icon={<PlayArrowOutlined />} 
              checkedIcon={<PlayArrow />} />} 
              value="HBO"
              label="HBO" />
          <h3> Categorias </h3>
            <FormControlLabel 
              control={<Checkbox icon={<PlayArrowOutlined />} 
              checkedIcon={<PlayArrow />} />} 
              value="Filmes"
              label="Filmes" />
            <FormControlLabel 
              control={<Checkbox icon={<PlayArrowOutlined />} 
              checkedIcon={<PlayArrow />} />} 
              value="Series"
              label="Séries" />
        </FormGroup>
      </div>
    </div >
  )
};
