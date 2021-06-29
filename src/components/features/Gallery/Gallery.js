import React, {useState} from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

import styles from './Gallery.module.scss';

const Gallery = ({images}) => {
  const [present, setPresent] = useState(0);
  const [incoming, setIncoming] = useState(-1);
  const [changing, setChanging] = useState(false);
  const sm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const changeImage = i => {
    setIncoming(i);
    setChanging(true);
    setTimeout(() => {
      setPresent(i);
      setChanging(false);
    }, 1000);
  };

  const minis = images.map(({src, name}, i) => i < 5 && (
    <Grid key={i} item xs className={clsx(styles.minis, (incoming >= 0 ? i === incoming : i === present) && styles.active)}>
      <ButtonBase onClick={() => changeImage(i)}>
        <img src={src} alt={name} />
      </ButtonBase>
    </Grid>)
  );

  const handleForth = () => {
    changeImage(present + 1);
  };

  const handleBack = () => {
    changeImage(present - 1);
  };

  const dots = (<MobileStepper variant='dots' steps={images.length} position='static' activeStep={present} className={styles.dots} nextButton={
    <Button size='small' onClick={handleForth} disabled={present === images.length - 1}>
      Next
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  }
  backButton={
    <Button size='small' onClick={handleBack} disabled={present === 0}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  }
  /> );

  const controls = sm ? minis : dots;

  return (
    <Grid container direction='column' className={styles.root}>
      <Grid item xs className={clsx(styles.photoWrapper, changing && styles.changing)}>
        {incoming >= 0 && <img className={styles.incoming_img} src={images[incoming].src} alt={images[incoming].name} />}
        <img className={styles.present_img} src={images[present].src} alt={images[present].name} />
      </Grid>
      {images.length > 0 && <Grid item container direction='row'>
        {controls}
      </Grid>}
    </Grid>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
