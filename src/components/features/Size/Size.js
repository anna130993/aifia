import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './Size.module.scss';

const Size = () => (
  <section className={styles.root}>
    <Typography variant='h4' align='center' paragraph className={styles.text}>
      <h1>Size guide</h1>
    </Typography>
    <Typography align='center' paragraph>
      I will be a size chart table one day - still under construction!
    </Typography>
  </section>
);

export default Size;
