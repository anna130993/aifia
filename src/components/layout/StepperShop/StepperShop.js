import React,  {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom';
import {getOrder} from '../../../redux/orderRedux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import styles from './StepperShop.module.scss';

const StepperShop = ({children}) => {
  let location = useLocation();
  const order = useSelector(getOrder);
  const [completed, setCompleted] = useState();
  const sm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const steps = [
    {label: 'Shopping', to: '/'},
    {label: 'See cart', to:'/cart'},
    {label: 'Finish order', to: '/order'},
  ];

  useEffect(() => {
    if (order.products.length > 0) {
      if (location.pathname === './cart') setCompleted(0);
      else setCompleted(1);
    } else setCompleted(-1);
  }, [location, order]);

  const getPosition = () => {
    if (location.pathname === '/order') return 2;
    else return 1;
  };

  return (
    <div className={styles.root}>
      <Stepper component='nav' nonLinear activeStep={getPosition()} className={styles.stepper} alternativeLabel={!sm}>
        {steps.map(({label, to}, index) => {
          return (
            <Step key={index}>
              <StepButton component={RouterLink} to={to} completed={index <= completed} disabled={index-2 > completed}>{label}</StepButton>
            </Step>
          );
        })}
      </Stepper>
      {children}
    </div>
  );
};

StepperShop.propTypes = {
  children: PropTypes.node,
};

export default StepperShop;
