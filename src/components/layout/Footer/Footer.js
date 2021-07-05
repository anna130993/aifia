import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebookF, faYoutube, faPinterestP, faInstagram, faTumblr} from '@fortawesome/free-brands-svg-icons';

import Copyright from '../../common/Copyright/Copyright';
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <Grid container>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6' className={styles.text}>Info</Typography>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/about'>About</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/privacy-policy'>Privacy policy</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/terms-and-conditions'>Terms and conditions</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/size-guide'>Size guide</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6' className={styles.text}>Order info</Typography>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/payment-options'>Payment options</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/shipping'>Shipping and delivery</Link>
            </Box>
            <Box className={styles.text}>
              <Link color='inherit' component={RouterLink} to='/returns'>Returns and exchanges</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6' className={styles.text}>AIFIA Store</Typography>
            <Box className={styles.text}>
              Oxford St. 252-258
              <br />
              W1C 1DL London
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography className={styles.text}>Get more AIFIA on:</Typography>
            <Button href='http://facebook.com'>
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>
            <Button href='http://twitter.com'>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button href='http://instagram.com'>
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
            <Button href='http://youtube.com'>
              <FontAwesomeIcon icon={faYoutube} />
            </Button>
            <Button href='http://pinterest.com'>
              <FontAwesomeIcon icon={faPinterestP} />
            </Button>
            <Button href='http://tumblr.com'>
              <FontAwesomeIcon icon={faTumblr} />
            </Button>
          </Grid>
        </Grid>
      </footer>
      <Box className={styles.copyright}>
        <Copyright />
      </Box>
    </div>
  );
};

export default Footer;
