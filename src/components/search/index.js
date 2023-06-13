import React, { useContext, useState } from 'react';
import * as S from './styled'
import SearchIcon from '@mui/icons-material/Search';
import api from '../../fetch'
import FilterContext from '../../contexts/filter-context';

const SearchComponent = () => {
  const { setResponseData } = useContext(FilterContext);
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
    <S.SearchContent>
      <S.ContentStyled>
        <S.TextFieldStyled
          id="input-with-sx"
          label="Search"
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          size="small"
        />
        <S.IconButtonStyled onClick={handleClickSearch}>
          <SearchIcon />
        </S.IconButtonStyled >
      </S.ContentStyled>
    </S.SearchContent>
  )
}

export default SearchComponent;