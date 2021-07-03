import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
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
              <Tooltip label='Facebook'>
                <FontAwesomeIcon icon={faFacebookF} />
              </Tooltip>
            </Button>
            <Button>
              <Tooltip label='Twitter'>
                <FontAwesomeIcon icon={faTwitter} />
              </Tooltip>
            </Button>
            <Button>
              <Tooltip label='Instagram'>
                <FontAwesomeIcon icon={faInstagram} />
              </Tooltip>
            </Button>
            <Button>
              <Tooltip label='Youtube'>
                <FontAwesomeIcon icon={faYoutube} />
              </Tooltip>
            </Button>
            <Button>
              <Tooltip label='Pinterest'>
                <FontAwesomeIcon icon={faPinterestP} />
              </Tooltip>
            </Button>
            <Button>
              <Tooltip label='Tumblr'>
                <FontAwesomeIcon icon={faTumblr} />
              </Tooltip>
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
