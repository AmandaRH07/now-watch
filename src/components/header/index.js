import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuOptions from './menu'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handlePrincipal = () => {
    navigate('/');
    console.log("navigate")
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          onClick={handlePrincipal}
        >
          Now Watch
        </Typography>
        <div style={{ background: '#FFF' }}>
          <MenuOptions />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;