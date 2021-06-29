import React from 'react';
import {useSelector} from 'react-redux';
import {getCount} from '../../../redux/orderRedux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation =({className}) => {
  const count = useSelector(getCount);

  return (
    <nav className={clsx(className, styles.root)}>
      <Tooltip title='Go to cart'>
        <IconButton component={NavLink} to='/cart' aria-label='Add to cart' color='inherit'>
          <Badge badgeContent={count} color='primary'>
            <FontAwesomeIcon icon={faShoppingCart}/>
          </Badge>
        </IconButton>
      </Tooltip>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
