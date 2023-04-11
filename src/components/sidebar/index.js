import React, { useContext } from 'react';
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
    setFilterGenre,
    setResponseHasMore,
    setResponseNextCursor
  } = useContext(FilterContext);

  const getSidebarOptions = (field) => {
    return Object.keys(field).filter((item) => field[item] === true);
  }

  const handleChangeCheckboxesValues = (option, field, value) => {
    switch (option) {
      case 'service':
        setCheckboxService(prevState => ({
          ...prevState,
          [field]: value,
        }))
        break;
      case 'type':
        setCheckboxType(prevState => ({
          ...prevState,
          [field]: value,
        }))
        break;
      case 'genre':
        setCheckboxGenre(prevState => ({
          ...prevState,
          [field]: value,
        }))
        break;
      default:
        break;
    }
  }

  const handleCleanFilter = () => {
    const filtersCheckboxService = getSidebarOptions(checkboxService);
    filtersCheckboxService.map(service =>
      setCheckboxService(prevState => ({
        ...prevState,
        [service]: false,
      })))
    setFilterService([])

    const filtersCheckboxType = getSidebarOptions(checkboxType);
    filtersCheckboxType.map(type =>
      setCheckboxType(prevState => ({
        ...prevState,
        [type]: false,
      })))
    setFilterType([])

    const filtersCheckboxGenre = getSidebarOptions(checkboxGenre);
    filtersCheckboxGenre.map(genre =>
      setCheckboxGenre(prevState => ({
        ...prevState,
        [genre]: false,
      })))
    setFilterGenre([])

    setResponseHasMore(false)
    setResponseNextCursor(undefined)
  }

  const handleSaveFilter = () => {
    const filtersCheckboxService = getSidebarOptions(checkboxService);
    const filtersCheckboxServiceOptions = []
    filtersCheckboxServiceOptions.push(filtersCheckboxService)
    setFilterService(...filtersCheckboxServiceOptions)

    const filtersCheckboxType = getSidebarOptions(checkboxType);
    const filtersCheckboxTypeOptions = []
    filtersCheckboxTypeOptions.push(filtersCheckboxType)
    setFilterType(...filtersCheckboxTypeOptions)

    const filtersCheckboxGenre = getSidebarOptions(checkboxGenre);
    const filtersCheckboxGenreOptions = []
    filtersCheckboxGenreOptions.push(filtersCheckboxGenre)
    setFilterGenre(...filtersCheckboxGenreOptions)
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
                onClick={() => handleChangeCheckboxesValues("service", "prime", !checkboxService.prime)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="apple"
            label="Apple TV"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.apple}
                onClick={() => handleChangeCheckboxesValues("service", "apple", !checkboxService.apple)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="disney"
            label="Disney Plus"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.disney}
                onClick={() => handleChangeCheckboxesValues("service", "disney", !checkboxService.disney)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="hbo"
            label="HBO Max"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.hbo}
                onClick={() => handleChangeCheckboxesValues("service", "hbo", !checkboxService.hbo)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="netflix"
            label="Netflix"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxService.netflix}
                onClick={() => handleChangeCheckboxesValues("service", "netflix", !checkboxService.netflix)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Categorias </h3>
          <FormControlLabel
            value="movie"
            label="Filmes"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxType.movie}
                onClick={() => handleChangeCheckboxesValues("type", "movie", !checkboxType.movie)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="series"
            label="Séries"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxType.series}
                onClick={() => handleChangeCheckboxesValues("type", "series", !checkboxType.series)}
                checkedIcon={<PlayArrow />} />}
          />

          <h3> Gêneros</h3>
          <FormControlLabel
            value="28"
            label="Ação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Acao28}
                onClick={() => handleChangeCheckboxesValues("genre", "Acao28", !checkboxGenre.Acao28)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="16"
            label="Animação"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Animacao16}
                onClick={() => handleChangeCheckboxesValues("genre", "Animacao16", !checkboxGenre.Animacao16)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="1"
            label="Biografia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Biografia1}
                onClick={() => handleChangeCheckboxesValues("genre", "Biografia1", !checkboxGenre.Biografia1)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="35"
            label="Comédia"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Comedia35}
                onClick={() => handleChangeCheckboxesValues("genre", "Comedia35", !checkboxGenre.Comedia35)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="99"
            label="Documentario"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Documentario99}
                onClick={() => handleChangeCheckboxesValues("genre", "Documentario99", !checkboxGenre.Documentario99)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="18"
            label="Drama"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Drama18}
                onClick={() => handleChangeCheckboxesValues("genre", "Drama18", !checkboxGenre.Drama18)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="878"
            label="Ficção Científica"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.FiccaoCientifica878}
                onClick={() => handleChangeCheckboxesValues("genre", "FiccaoCientifica878", !checkboxGenre.FiccaoCientifica878)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="10749"
            label="Romance"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Romance10749}
                onClick={() => handleChangeCheckboxesValues("genre", "Romance10749", !checkboxGenre.Romance10749)}
                checkedIcon={<PlayArrow />} />}
          />

          <FormControlLabel
            value="27"
            label="Terror"
            control={
              <Checkbox icon={<PlayArrowOutlined />}
                checked={checkboxGenre.Terror27}
                onClick={() => handleChangeCheckboxesValues("genre", "Terror27", !checkboxGenre.Terror27)}
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

export default Sidebar;
