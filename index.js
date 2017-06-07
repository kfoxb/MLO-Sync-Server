const express = require('express');
const app1 = express();
const app2 = express();

app1.all('*', (req, res) => {
  console.log('this is req', req);
});

app2.all('*', (req, res) => {
  console.log('this is req', req);
});

app1.listen(21030);
app2.listen(21031)