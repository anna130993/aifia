import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import styles from './OrderSummary.module.scss';

const OrderSummary = ({products}) => {
  const emptyCart = <Alert severity='warning' variant='outlined'>
    Your cart is <strong>very</strong> empty! <Link color='inherit' variant='subtitle2' component={RouterLink} to='/'>Go hunt for some nice things!</Link>
  </Alert>;

  const finalPrice = products => {
    let final = 0;
    for (let p of products) {
      final += (p.amount * p.startPrice);
    }
    return final;
  };

  return (
    <Paper className={styles.root}>
      <Typography component='h2' variant='h4' paragraph>Your order</Typography>
      {!products || products.length === 0 ? emptyCart :
        <TableContainer>
          <Table>
            <TableBody>
              {products.map(({id, name, startPrice, amount}) => (
                <TableRow key={id}>
                  <TableCell component='th' scope='row'>{name}</TableCell>
                  <TableCell align='right' className={styles.amount}>x {amount} </TableCell>
                  <TableCell align='right' className={styles.price}>$ {amount * startPrice}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell align='right' colSpan={2} className={styles.final}>Total</TableCell>
                <TableCell align='right' className={styles.final}>$ {finalPrice(products)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>}
    </Paper>
  );
};

OrderSummary.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default OrderSummary;
