const express = require('express')
const responseBuilder = require('../responseBuilder')
const routes = require('./routes/routes')
const app = express()
const port = 3000

app.use('/home', routes)

app.use(function(err, req, res, next) {

  res.status(err.status || 500);

  res.send(
    responseBuilder(err.status || 500, err.message, {}, err)
  );

});

app.listen(port, () => {
  console.log(`Gateway started at http://localhost:${port}`)
})