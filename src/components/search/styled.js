import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import styled from "styled-components";

export const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ContentStyled = styled.div`
  display: flex;
  border-radius: 25px;
  justify-content: center;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  width: 25%;
`;

export const TextFieldStyled = styled(TextField)`
  width: 75%;
  position: relative;
  bottom: 4px;
`;

export const IconButtonStyled = styled(IconButton)`
`;
