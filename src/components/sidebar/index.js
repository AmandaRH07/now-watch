import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import { PlayArrowOutlined, PlayArrow } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';

const Sidebar = () => {
  const [checkboxs, setCheckboxs] = useState({
    Netflix: false,
    AmazonPrime: false,
    Hbo: false,
    Disney: false,
    StarPlus: false,
    GloboPlay: false,
    Filmes: false,
    Series: false,
    Acao: false,
    Animacao: false,
    Comedia: false,
    Drama: false,
    FiccaoCientifica: false,
    Romance: false,
    Terror: false,
  });

  const handleChangeCheckbox = (field, value) => {
    setCheckboxs(prevState => (
      {
        ...prevState,
        [field]: value,
      }
    ))
  }


  const handleCleanFilter = ( ) => {
  }

  const handleSaveFilter = ( ) => {
    const filters = Object.keys(checkboxs).filter((item) => checkboxs[item]);
    console.log("Filtros", filters);
  }

  return (
    <div className="sidebar-container" >
      <h2 className="titles-container"> Select your streamings options </h2>
      <div className="options-content">
        <FormGroup>
          <h3> Steamings</h3>
          <FormControlLabel
            value="Netflix"
            label="Netflix"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Netflix", !checkboxs.Netflix)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="AmazonPrime"
            label="Amazon Prime"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("AmazonPrime", !checkboxs.AmazonPrime)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Hbo"
            label="HBO Max"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Netflix", !checkboxs.Hbo)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Disney"
            label="Disney Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Disney", !checkboxs.Disney)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="StarPlus"
            label="Star Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("StarPlus", !checkboxs.StarPlus)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="GloboPlay"
            label="Globo Play"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("GloboPlay", !checkboxs.GloboPlay)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Categorias </h3>
          <FormControlLabel
            value="Filmes"
            label="Filmes"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Filmes", !checkboxs.Filmes)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="Series"
            label="Séries"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Series", !checkboxs.Series)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Gêneros</h3>
          <FormControlLabel
            value="Acao"
            label="Ação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Acao", !checkboxs.Acao)}
                checkedIcon={<PlayArrow />} />} />
          <FormControlLabel
            value="Animacao"
            label="Animação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Animacao", !checkboxs.Animacao)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Comedia"
            label="Comédia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Comedia", !checkboxs.Comedia)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Drama"
            label="Drama"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Drama", !checkboxs.Drama)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="FiccaoCientifica"
            label="Ficção Científica"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("FiccaoCientifica", !checkboxs.FiccaoCientifica)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="Romance"
            label="Romance"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Romance", !checkboxs.Romance)}
                checkedIcon={<PlayArrow />} />}

          />

          <FormControlLabel
            value="Terror"
            label="Terror"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                onClick={() => handleChangeCheckbox("Terror", !checkboxs.Terror)}
                checkedIcon={<PlayArrow />} />}
          />
        </FormGroup>

        <Stack
          direction="row"
          spacing={2}
          className="buttons-content">
          <Button 
            variant="contained"
            onClick={() => handleCleanFilter()}>Limpar</Button>
          <Button 
            variant="contained"
            onClick={() => handleSaveFilter()} >Enviar</Button>
        </Stack>

      </div>
    </div >
  )
};

export default Sidebar
