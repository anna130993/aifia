const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    res.status(401).send({message: 'You need to create an account in order to proceed'});
  }
}

router.get('/no-entry', (req, res) => {
  res.send('You shall not pass!');
});

router.get('/logged', isLogged, (req, res) => {
  res.send(`Welcome ${req.user.email}!`);
});

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

module.exports = router;
