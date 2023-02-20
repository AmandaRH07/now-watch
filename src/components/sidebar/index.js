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
    setFilterService,
    setFilterType,
    setFilterGenre
  } = useContext(FilterContext);

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

    const filtersCheckboxService = Object.keys(checkboxService).filter((item) => checkboxService[item] === true);
    setFilterService(prevState => (
      {
        ...prevState,
        ...filtersCheckboxService
      }
    ))

    const filtersCheckboxType = Object.keys(checkboxType).filter((item) => checkboxType[item] === true);
    setFilterType(prevState => (
      {
        ...prevState,
        ...filtersCheckboxType
      }
    ))

    const filtersCheckboxGenre = Object.keys(checkboxGenre).filter((item) => checkboxGenre[item] === true);
    setFilterGenre(prevState => (
      {
        ...prevState,
        ...filtersCheckboxGenre
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
            value="prime"
            label="Amazon Prime"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.prime}
                onClick={() => handleChangeCheckboxService("prime", !checkboxService.prime)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="apple"
            label="Apple TV"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.apple}
                onClick={() => handleChangeCheckboxService("apple", !checkboxService.apple)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="disney"
            label="Disney Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.disney}
                onClick={() => handleChangeCheckboxService("disney", !checkboxService.disney)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="hbo"
            label="HBO Max"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.hbo}
                onClick={() => handleChangeCheckboxService("hbo", !checkboxService.hbo)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="netflix"
            label="Netflix"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.netflix}
                onClick={() => handleChangeCheckboxService("netflix", !checkboxService.netflix)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="starz"
            label="Star Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.starz}
                onClick={() => handleChangeCheckboxService("starz", !checkboxService.starz)}
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
            value="28"
            label="Ação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Acao28}
                onClick={() => handleChangeCheckboxGenre("Acao28", !checkboxGenre.Acao28)}
                checkedIcon={<PlayArrow />} />} 
          />

          <FormControlLabel
            value="16"
            label="Animação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Animacao16}
                onClick={() => handleChangeCheckboxGenre("Animacao16", !checkboxGenre.Animacao16)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="1"
            label="Biografia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Biografia1}
                onClick={() => handleChangeCheckboxGenre("Biografia1", !checkboxGenre.Biografia1)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="35"
            label="Comédia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Comedia35}
                onClick={() => handleChangeCheckboxGenre("Comedia35", !checkboxGenre.Comedia35)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="99"
            label="Documentario"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Documentario99}
                onClick={() => handleChangeCheckboxGenre("Documentario99", !checkboxGenre.Documentario99)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="18"
            label="Drama"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Drama18}
                onClick={() => handleChangeCheckboxGenre("Drama18", !checkboxGenre.Drama18)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="878"
            label="Ficção Científica"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.FiccaoCientifica878}
                onClick={() => handleChangeCheckboxGenre("FiccaoCientifica878", !checkboxGenre.FiccaoCientifica878)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="10749"
            label="Romance"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Romance10749}
                onClick={() => handleChangeCheckboxGenre("Romance10749", !checkboxGenre.Romance10749)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="27"
            label="Terror"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Terror}
                onClick={() => handleChangeCheckboxGenre("Terror27", !checkboxGenre.Terror27)}
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
            onClick={() => handleSaveFilter()}>Enviar</Button>
        </Stack>

      </div>
    </div >
  )
};

export default Sidebar
