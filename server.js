const express = require('express');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

const serverApp = require('./dist/serverApp').default;
console.log(serverApp);

const render = (req, res) => {
  serverApp(req, res).then(
    (renderParams) => {
      res.render(
        'index',
        renderParams
      );
    }
  )
};

app.get('*', render);

app.listen(8005, () => console.log('Server is listening on 8005'));