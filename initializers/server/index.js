const express = require('express');

const app = express();

const manifest = require('../../public/assets/manifest.json');
const webpackAsset = (bundle) => manifest[bundle];

app.use(express.static('public'));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index', { webpackAsset });
});

app.listen(8080, () => console.log('Server is listening on 8080'));