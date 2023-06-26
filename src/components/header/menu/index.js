import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuOptions = () => {
  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handlePrincipal = () => {
    navigate('/');
  };

  return (
    <>
      <S.ButtonContent
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </S.ButtonContent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleAbout}>Sobre</MenuItem>
        <MenuItem onClick={handlePrincipal}>Página Principal</MenuItem>
      </Menu>
    </>
  )
}

export default MenuOptions;
