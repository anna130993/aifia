import React from 'react';
import Typography from '@material-ui/core/Typography';
import Facebook from '../Facebook/Facebook';
import styles from './User.module.scss';

const User = () => (
  <section className={styles.root}>
    <Typography component='h1' variant='h4' align='center' paragraph>
      To create account, please authenticate with one of the following:
    </Typography>
    <Typography align='center' paragraph>
      <Facebook />
    </Typography>
  </section>
);

export default User;
