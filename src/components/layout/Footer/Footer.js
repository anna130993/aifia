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
            <Typography variant='h6'>Info</Typography>
            <Box>
              <Link color='inherit' component={RouterLink} to='/about'>About</Link>
            </Box>
            <Box>
              <Link color='inherit' component={RouterLink} to='/privacy-policy'>Privacy policy</Link>
            </Box>
            <Box>
              <Link color='inherit' component={RouterLink} to='/terms-and-conditions'>Terms and conditions</Link>
            </Box>
            <Box>
              <Link color='inherit' component={RouterLink} to='/size-guide'>Size guide</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6'>Order info</Typography>
            <Box>
              <Link color='inherit' component={RouterLink} to='/payment-options'>Payment options</Link>
            </Box>
            <Box>
              <Link color='inherit' component={RouterLink} to='/shipping'>Shipping and delivery</Link>
            </Box>
            <Box>
              <Link color='inherit' component={RouterLink} to='/returns'>Returns and exchanges</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography variant='h6'>AIFIA Store</Typography>
            <Box>
              Oxford St. 252-258
              <br />
              W1C 1DL London
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.single}>
            <Typography>Get more AIFIA on:</Typography>
            <Button>
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faYoutube} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faPinterestP} />
            </Button>
            <Button>
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
