import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from '../../fetch'
import FilterContext from '../../contexts/filter-context';
import { useContext, useState } from 'react';

const SearchComponent = () => {
  const {setResponseData } = useContext(FilterContext);
  const [title, setTitle] = useState('');

  const handleClickSearch = () => {
    setResponseData([])

    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
      params: {
        title: title,
        country: 'br',
        show_type: 'all',
        output_language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'a08b4892damsh53c57fca6e1477ap162e77jsn6c2433727c0a',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    api.request(options).then(response => (
      setResponseData(prevState => {
        prevState.push(...response.data.result)
        return [...prevState];
      }))
    )
  }

  return (
    <div className='search-content'>
      <SearchIcon />
      <TextField
        id="input-with-sx"
        label="Search..."
        variant="standard"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <Button onClick={handleClickSearch}>Enviar</Button>
    </div>
  )
}

export default SearchComponent;