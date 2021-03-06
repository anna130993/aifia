import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './Payment.module.scss';

const Payment = () => (
  <section className={styles.root}>
    <Typography variant='h4' align='center' paragraph className={styles.text}>
      <h1>Payment options</h1>
    </Typography>
    <Typography align='center' paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa tellus, faucibus scelerisque scelerisque bibendum, convallis luctus lectus. Mauris id porttitor sem. Fusce laoreet consequat magna, sit amet tincidunt massa laoreet ullamcorper. Integer interdum ornare lacus, ut bibendum ligula semper vel. Vivamus fringilla neque eu nulla luctus tempor eu in neque. Duis id arcu in sapien sollicitudin pulvinar id sit amet justo. Nullam hendrerit hendrerit fringilla.
    </Typography>
    <Typography align='center' paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa tellus, faucibus scelerisque scelerisque bibendum, convallis luctus lectus.
    </Typography>
    <Typography align='center' paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa tellus, faucibus scelerisque scelerisque bibendum, convallis luctus lectus. Mauris id porttitor sem. Fusce laoreet consequat magna, sit amet tincidunt massa laoreet ullamcorper. Integer interdum ornare lacus, ut bibendum ligula semper vel. Vivamus fringilla neque eu nulla luctus tempor eu in neque. Duis id arcu in sapien sollicitudin pulvinar id sit amet justo. Nullam hendrerit hendrerit fringilla. Phasellus laoreet velit quis venenatis laoreet. Ut tempor fringilla arcu id pulvinar. Quisque arcu enim, pharetra in volutpat in, luctus eu quam. Vestibulum bibendum leo dolor, sed ullamcorper odio pharetra in. Nam condimentum, dui eget feugiat efficitur, elit elit dictum orci, quis tincidunt nibh risus non nulla. Fusce sollicitudin tincidunt facilisis. Curabitur massa tortor, ornare tincidunt magna venenatis, cursus ullamcorper lectus. Nam finibus tristique erat, vel sodales mauris volutpat eget. Fusce a mi ex.
    </Typography>
  </section>
);

export default Payment;
