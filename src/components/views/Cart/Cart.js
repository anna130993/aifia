import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPlus, faMinus, faComment, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {Link as RouterLink} from 'react-router-dom';
import {getProducts, removeProduct, productToCart, productOutOfCart, addComment} from '../../../redux/orderRedux';

import styles from './Cart.module.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const [activeComments, setActiveComments] = useState([]);
  const sm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const toggleActivity = id => {
    if (activeComments.includes(id)) {
      setActiveComments(activeComments.filter(item => item !== id));
    } else {
      setActiveComments([...activeComments, id]);
    }
  };

  const commentChangeHandler = e => {
    const {value: comment, id} = e.target;
    dispatch(addComment({id, comment}));
  };

  const emptyCart = <Alert severity='warning' variant='outlined'>
    <strong>Your cart seems very empty!</strong> <Link color='inherit' variant='subtitle2' component={RouterLink} to='/'>Find some pretty things to fill it up with!</Link>
  </Alert>;

  return (
    <Paper component='section' className={styles.root}>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h4' align='center' paragraph>Shopping cart</Typography>
        {!products || products.length === 0 ? emptyCart : <div>
          <TableContainer>
            <Table className={styles.table}>
              {sm && <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align='center'>Amount</TableCell>
                  <TableCell align='center'>Total</TableCell>
                  <TableCell align='center'>Actions</TableCell>
                </TableRow>
              </TableHead>}
              {products.map(({id, name, startPrice, amount, comment}) => (
                <TableBody key={id}>
                  {!sm && <TableRow className={styles.name_row}>
                    <TableCell colSpan={4}>
                      <Typography variant='h5' component={RouterLink} to={`/products/${id}`} className={styles.prod_name}>
                        {name}
                      </Typography>
                    </TableCell>
                  </TableRow>}
                  <TableRow className={styles.row}>
                    {sm && <TableCell><Typography variant='subtitle2' component={RouterLink} to={`/products/${id}`} className={styles.prod_name}>{name}</Typography></TableCell>}
                    <TableCell align='center'>
                      <div className={styles.amount} colSpan={sm ? 1 : 2}>
                        <IconButton aria-label='decrement product count' size='small' onClick={() => dispatch(productOutOfCart(id))}>
                          <FontAwesomeIcon icon={faMinus} />
                        </IconButton>
                        {`${amount}`}
                        <IconButton aria-label='increment product count' size='small' onClick={() => dispatch(productToCart(id))}>
                          <FontAwesomeIcon icon={faPlus} />
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell align='center'>${amount * startPrice}</TableCell>
                    <TableCell align='right'>
                      {!comment &&
                      <IconButton aria-label='toggle comment visibility' onClick={() => toggleActivity(id)}>
                        {activeComments.includes(id) ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faComment} />}
                      </IconButton>}
                      <IconButton aria-label='remove product' onClick={() => dispatch(removeProduct(id))}>
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.collapse} colSpan={4}>
                      <Collapse in={!!comment || activeComments.includes(id)} timeout='auto'>
                        <TextField id={id} name={`${id}-comment`} placeholder='Add comment' fullWidth multiline inputProps={{maxLength: 200}} variant='outlined' autoComplete='off' value={comment} onChange={commentChangeHandler} />
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
          <Button variant='contained' color='primary' size='large' className={styles.button} component={RouterLink} to='/order'>Order</Button>
        </div>}
      </Container>
    </Paper>
  );
};

export default Cart;
