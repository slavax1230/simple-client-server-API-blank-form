const express = require('express');
const cors = require('cors');


const app = express()

app.use(cors({
  origin: '*'
}));


app.get('/api', (request, response) => {
    return response.status(200).json("first" = [
      {
        message: 'works'
      }
    ])
  })

  app.listen(5090);
