import React from 'react';
import {useSelector} from 'react-redux';
import {getProducts} from '../../../redux/orderRedux';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import Contact from '../../features/Contact/Contact';
import Grid from '@material-ui/core/Grid';
import styles from './Order.module.scss';

const Order = () => {
  const products = useSelector(getProducts);

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item component='section' xs={12} md={5}>
        <OrderSummary products={products} />
      </Grid>
      <Grid item component='section' xs={12} md={7}>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Order;
