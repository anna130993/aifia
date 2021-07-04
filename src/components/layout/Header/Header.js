import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
//import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom';
import Navigation from '../../features/Navigation/Navigation';
import MainMenu from '../../features/MainMenu/MainMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <AppBar position='fixed' component='div' color='secondary'>
        <Toolbar className={styles.toolbar}>
          <Tooltip title='Homepage'>
            <Link component={RouterLink} to='/' variant='h4' className={styles.title} color='inherit' underline='none'>
            Art Is Fashion Is Art
              {'  '}
              <FontAwesomeIcon icon={faPaintBrush} />
            </Link>
          </Tooltip>
          <MainMenu />
          <Navigation className={styles.nav} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
