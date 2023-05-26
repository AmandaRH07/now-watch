import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuOptions from './menu'
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../search";
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <div className="search-content">
        <Toolbar className="teste">
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate('/')}
          >
            Now Watch
          </Typography>
          <SearchComponent />
          <MenuOptions />

        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Header;