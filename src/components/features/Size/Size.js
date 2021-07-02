import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './Size.module.scss';

const Size = () => (
  <section className={styles.root}>
    <Typography component='h1' variant='h4' align='center' paragraph>
      Size guide
    </Typography>
    <Typography align='center' paragraph>
      I will be a size chart table one day - still under construction!
    </Typography>
  </section>
);

export default Size;
