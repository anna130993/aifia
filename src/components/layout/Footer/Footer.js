import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebookF, faYoutube, faPinterestP, faInstagram, faTumblr} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.root}>
      <AppBar position='fixed' component='div' color='secondary' className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Grid container>
            <Grid direction='row' justify='flex-start'>
              <Typography variant='h6'>Info</Typography>
              <List component='footer-info'>
                <ListItem button>
                  <ListItemText primary='About'>
                    <Link color='inherit' component={RouterLink} to='/about' />
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary='Privacy policy'>
                    <Link color='inherit' component={RouterLink} to='/privacy-policy' />
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary='Terms and conditions'>
                    <Link color='inherit' component={RouterLink} to='/terms-and-conditions' />
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary='Size guide'>
                    <Link color='inherit' component={RouterLink} to='/size-guide' />
                  </ListItemText>
                </ListItem>
              </List>
              <List component='footer-order'>
                <Typography variant='h6'>Order info</Typography>
                <ListItem button>
                  <ListItemText primary='Payment options'>
                    <Link color='inherit' component={RouterLink} to='/payment-options' />
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary='Shipping and delivery'>
                    <Link color='inherit' component={RouterLink} to='/shipping' />
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText primary='Returns and exchanges'>
                    <Link color='inherit' component={RouterLink} to='/returns' />
                  </ListItemText>
                </ListItem>
              </List>
              <List component='footer-media'>
                <Typography variant='h6'>Get more AIFIA on:</Typography>
                <ListItem button>
                  <Tooltip label='Facebook'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
                <ListItem button>
                  <Tooltip label='Twitter'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faTwitter} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
                <ListItem button>
                  <Tooltip label='Instagram'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faInstagram} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
                <ListItem button>
                  <Tooltip label='Youtube'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faYoutube} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
                <ListItem button>
                  <Tooltip label='Pinterest'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faPinterestP} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
                <ListItem button>
                  <Tooltip label='Tumblr'>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faTumblr} />
                    </ListItemIcon>
                  </Tooltip>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
