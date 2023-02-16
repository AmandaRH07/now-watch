import React, { useState, useContext } from 'react';
import { Checkbox } from '@mui/material';
import { PlayArrowOutlined, PlayArrow } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';
import FilterContext from '../../contexts/filter-context';

const Sidebar = () => {

  const { 
    checkboxService, 
    setCheckboxService,
    checkboxType,
    setCheckboxType,
    checkboxGenre, 
    setCheckboxGenre, 
    filter, 
    setFilter } = useContext(FilterContext);

  const handleChangeCheckboxService = (field, value) => {
    setCheckboxService(prevState => (
      {
        ...prevState,
        [field]: value,
      }
    ))
  }

  const handleChangeCheckboxType = (field, value) => {
    setCheckboxType(prevState => (
      {
        ...prevState,
        [field]: value,
      }
    ))
  }

  const handleChangeCheckboxGenre = (field, value) => {
    setCheckboxGenre(prevState => (
      {
        ...prevState,
        [field]: value,
      }
    ))
  }

  const handleCleanFilter = () => {
  }

  const handleSaveFilter = () => {
    const filtersCheckboxType = Object.keys(checkboxType).filter((item) => checkboxType[item] === true);     
    setFilter(prevState => (
      {
        ...prevState,
        ...filtersCheckboxType
      }
    ))
  }

  return (
    <div className="sidebar-container" >
      <h2 className="titles-container"> Selecione as opções que se encaixam no que você quer assistir! </h2>
      <div className="options-content">
        <FormGroup>
          <h3> Steamings</h3>
          <FormControlLabel
            value="Netflix"
            label="Netflix"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.Netflix}
                onClick={() => handleChangeCheckboxService("Netflix", !checkboxService.Netflix)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="AmazonPrime"
            label="Amazon Prime"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.AmazonPrime}
                onClick={() => handleChangeCheckboxService("AmazonPrime", !checkboxService.AmazonPrime)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Hbo"
            label="HBO Max"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.Hbo}
                onClick={() => handleChangeCheckboxService("Hbo", !checkboxService.Hbo)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Disney"
            label="Disney Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.Disney}
                onClick={() => handleChangeCheckboxService("Disney", !checkboxService.Disney)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="StarPlus"
            label="Star Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.StarPlus}
                onClick={() => handleChangeCheckboxService("StarPlus", !checkboxService.StarPlus)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Categorias </h3>
          <FormControlLabel
            value="movie"
            label="Filme"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxType.movie}
                onClick={() => handleChangeCheckboxType("movie", !checkboxType.movie)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="series"
            label="Séries"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxType.series}
                onClick={() => handleChangeCheckboxType("series", !checkboxType.series)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Gêneros</h3>
          <FormControlLabel
            value="Acao"
            label="Ação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Acao}
                onClick={() => handleChangeCheckboxGenre("Acao", !checkboxGenre.Acao)}
                checkedIcon={<PlayArrow />} />} />
          <FormControlLabel
            value="Animacao"
            label="Animação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Animacao}
                onClick={() => handleChangeCheckboxGenre("Animacao", !checkboxGenre.Animacao)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Comedia"
            label="Comédia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Comedia}
                onClick={() => handleChangeCheckboxGenre("Comedia", !checkboxGenre.Comedia)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="Drama"
            label="Drama"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Drama}
                onClick={() => handleChangeCheckboxGenre("Drama", !checkboxGenre.Drama)}
                checkedIcon={<PlayArrow />} />}
          />
          <FormControlLabel
            value="FiccaoCientifica"
            label="Ficção Científica"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.FiccaoCientifica}
                onClick={() => handleChangeCheckboxGenre("FiccaoCientifica", !checkboxGenre.FiccaoCientifica)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="Romance"
            label="Romance"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Romance}
                onClick={() => handleChangeCheckboxGenre("Romance", !checkboxGenre.Romance)}
                checkedIcon={<PlayArrow />} />}

          />

          <FormControlLabel
            value="Terror"
            label="Terror"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Terror}
                onClick={() => handleChangeCheckboxGenre("Terror", !checkboxGenre.Terror)}
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
