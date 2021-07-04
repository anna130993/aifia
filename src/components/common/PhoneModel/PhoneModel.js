import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import NumberFormat from 'react-number-format';

import styles from './PhoneModel.module.scss';

const PhoneModel = ({className, children, inputRef, name, onChange, ...other}) => (
  <NumberFormat {...other} className={clsx(className, styles.root)} getInputRef={inputRef}
    onValueChange={(values) => {
      onChange({
        target: {
          name: name,
          value: values.value,
        },
      });
    }}
    allowNegative={false} isNumericString type='phone' format='+## ### ### ###' mask='_' />
);

PhoneModel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inputRef: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default PhoneModel;
