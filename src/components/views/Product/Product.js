import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPresent, fetchSingle, getRequest } from '../../../redux/productsRedux';
import {useParams, Link as RouterLink} from 'react-router-dom';
import {addProduct} from '../../../redux/orderRedux';

import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Gallery from '../../features/Gallery/Gallery';

import styles from './Product.module.scss';

const Product = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const request = useSelector(getRequest);
  const product = useSelector(state => getPresent(state, id));
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(36);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(fetchSingle(id));
  }, [dispatch, id]);

  if (request.type === 'GET_ALL' && request.error) {
    return <Alert severity='error' variant='outlined'>Your connection has failed - please try again!</Alert>;
  }

  if(!product) return <LinearProgress />;
  const {name, description, photos, startPrice} = product;

  const handleAdd = () => {
    setUpdate(true);
    dispatch(addProduct({id, name, startPrice, amount, size, comment: ''}));
  };

  return (
    <Paper component='article' className={styles.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' className={styles.text}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Gallery images={photos}></Gallery>
        </Grid>
        <Grid item xs={12} md={6} container spacing={2} direction='column' justify='flex-end'>
          <Grid item xs>
            <Typography paragraph variant='h6' className={styles.text}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography paragraph variant='h6' className={styles.text}>
              Currently available paintings (in order of appearance): <br />
              - Jean-Honore Fragonard - The Swing, <br />
              - Vincent Van Gogh - Starry Night, <br />
              - Sandro Botticelli - The Spring, <br />
              - Eugene Delacroix - Liberty Leading The People.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' className={styles.text}>
            Prices start up from <strong>${startPrice}</strong> and depends on a specific print and size.
            </Typography>
            <Typography paragraph className={styles.text}>
            To find out your definite price, please contact us! Remember to specify your painting of choice in order comment!
            </Typography>
          </Grid>
          <Grid item container alignItems='stretch' spacing={2}>
            <Grid item>
              <TextField variant='outlined' type='number' size='small' className={styles.input} value={amount} onChange={({target}) => setAmount(parseInt(target.value))} inputProps={{min: 1, max: 30}} />
            </Grid>
            <Grid item>
              <TextField variant='outlined' type='number' size='small' className={styles.input} value={size} onChange={({target}) => setSize(parseInt(target.value))} inputProps={{min: 34, max: 44}} />
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={handleAdd} size='large'>Add to cart</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={update} autoHideDuration={2800} onClose={() => setUpdate(false)}>
        <Alert severity='success' variant='filled' action={<Button component={RouterLink} to='/cart' color='inherit' size='small'>SEE CART</Button>}>Successfully added to cart!</Alert>
      </Snackbar>
    </Paper>
  );
};

export default Product;
