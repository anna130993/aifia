import React, {useState} from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import {Link as RouterLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import styles from './MainMenu.module.scss';

const MainMenu = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <Tooltip title='Go to menu'>
        <IconButton aria-label='more' aria-haspopup='true' onClick={handleClick} color='inherit'>
          <FontAwesomeIcon icon={faBars}/>
        </IconButton>
      </Tooltip>
      <Menu id='main-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}><Link color='inherit' variant='subtitle2' component={RouterLink} to='/about'>About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link color='inherit' variant='subtitle2' component={RouterLink} to='/privacy-policy'>Privacy policy</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link color='inherit' variant='subtitle2' component={RouterLink} to='/user'>User account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default MainMenu;
