import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendOrder, storeInflux, getOrder, getRequest} from '../../../redux/orderRedux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PhoneModel from '../../common/PhoneModel/PhoneModel';
import styles from './Contact.module.scss';

const Contact = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrder);
  const request = useSelector(getRequest);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [warning, setWarning] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errory, setErrory] = useState(false);

  useEffect(() => {
    if(pending && request.type === 'POST' && !request.error && !request.active) {
      setSuccess(true);
      setPending(false);
    }
    if(pending && request.type === 'POST' && request.error) {
      setErrory(true);
      setPending(false);
    }
  }, [request]);

  const vals = {
    firstName: {
      val: value => value && 2 <= value.length && value.length <= 15,
      message: 'Too short! Try again!',
    },
    lastName: {
      val: value => value && 2 <= value.length && value.length <= 35,
      message: 'Too short! Try again!',
    },
    email: {
      val: value => value && value.match(new RegExp(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z]{1,6}))$/i)),
      message: 'Invalid email address! Try again!',
    },
    phone: {
      val: value => value && 5 <= value.length && value.length <= 15,
      message: 'Invalid phone number! Try again!',
    },
    address: {
      val: value => value && 3 <= value.length && value.length <= 80,
      message: 'Too short! Try again!',
    },
  };

  const validate = (name, value) => {
    const {val, message} = vals[name];

    if(!val(value)){
      setErrors({...errors, [name]: message});
    } else setErrors({...errors, [name]: ''});
  };

  const handleChange = ({target: {name, value}}) => {
    validate(name, value);
    dispatch(storeInflux({[name]: value}));
  };

  const validateOrder = () => {
    let completed = true;
    let legitErrors = false;

    for (let key in order) {
      if (!order[key]) completed = false;
    }
    if (completed) {
      for (let error in errors) {
        if (errors[error]) legitErrors = true;
      }
    }
    return completed && !legitErrors && order.products.length > 0;
  };

  const submitOrder = () => {
    if(validateOrder()) {
      setWarning(false);
      setPending(true);

      const orderProds = order.products.map(({id, amount, size, comment}) => comment ? ({product: id, amount, size, comment}) : ({product: id, amount, size}));

      dispatch(sendOrder({...order, status: 'ordered', products: orderProds}));
    } else setWarning(true);
  };

  return (
    <Paper className={styles.root}>
      <Typography component='h2' variant='h4' paragraph>Personal data</Typography>
      <form noValidate autoComplete='off' className={styles.form}>
        <Grid container spacing={2}>
          <Grid item container xs={12} sm={6} direction='column' justify='flex-start'>
            <TextField id='firstName' name='firstName' label='First name' variant='outlined' fullWidth margin='normal' value={order.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} required inputProps={{maxLength: 20}}/>
            <TextField id='lastName' name='lastName' label='Last name' variant='outlined' fullWidth margin='normal' value={order.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} required inputProps={{maxLength: 30}}/>
          </Grid>
          <Grid item container xs={12} sm={6} direction='column' justify='flex-start'>
            <TextField id='email' name='email' label='Email address' variant='outlined' fullWidth margin='normal' value={order.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required/>
            <TextField id='phone' name='phone' label='Phone number' variant='outlined' fullWidth margin='normal' value={order.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} InputProps={{inputComponent: PhoneModel}} required/>
            <TextField id='address' name='address' label='Delivery address' multiline rows={3} variant='outlined' fullWidth margin='normal' value={order.address} onChange={handleChange} error={!!errors.address} helperText={errors.address} required inputProps={{autoComplete: 'new-password', maxLength: 50}}/>
          </Grid>
        </Grid>
        <Grid item xs container justify='flex-end'>
          <Button variant='contained' size='large' className={styles.btn} color='primary' onClick={submitOrder}>Confirm and send</Button>
        </Grid>
      </form>
      <Snackbar open={warning} autoHideDuration={2800} onClose={() => setWarning(false)}>
        <Alert severity='warning' variant='filled'>Something is wrong with your order form - check all the fields again!</Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={2800} onClose={() => setSuccess(false)}>
        <Alert severity='success' variant='filled'>Your order has been sent! We will keep you updated on its progress via email!</Alert>
      </Snackbar>
      <Snackbar open={errory} autoHideDuration={2800} onClose={() => setErrory(false)}>
        <Alert severity='error' variant='filled'>Your connection has failed - try again!</Alert>
      </Snackbar>
    </Paper>
  );
};

export default Contact;
