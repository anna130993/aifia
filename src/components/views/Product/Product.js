import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPresent, fetchSingle, getRequest } from '../../../redux/productsRedux';
import {useParams, Link as RouterLink} from 'react-router-dom';
import {addProduct, incrementProds } from '../../../redux/orderRedux';

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
  const incrementProducts = useSelector(state => incrementProds(state, id, amount));
  const [amount, setAmount] = useState(1);
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
    dispatch(addProduct({id, name, startPrice, amount, comment: ''}));
  };

  return (
    <Paper component='article' className={styles.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h1' align='center'>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Gallery images={photos}></Gallery>
        </Grid>
        <Grid item xs={12} md={6} container spacing={2} direction='column' justify='flex-end'>
          <Grid item xs>
            <Typography paragraph>
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' component='h2'>
            Prices start up from <strong>${startPrice}</strong> and depends on a specific print and size.
            </Typography>
            <Typography paragraph>
            To find out your definite price, please contact us!
            </Typography>
          </Grid>
          <Grid item container alignItems='stretch' spacing={2}>
            <Grid item>
              <TextField variant='outlined' type='number' size='small' className={styles.input} value={amount} onChange={({target}) => setAmount(parseInt(target.value))} inputProps={{min: 1, max: 30}} />
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={handleAdd} size='large' disabled={!incrementProducts}>Add to cart</Button>
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