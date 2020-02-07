const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/checkout/:productId', (req, res) => {
  const product = req.params.productId;
  res.redirect(`http://18.188.34.11:3003/api/checkout/${product}`);
})

app.get('/api/products/:productId', (req, res) => {
  const product = req.params.productId;
  res.redirect(`http://carousel.duckdns.org/api/products/${product}`);
})

app.get('/api/reviews/:productId', (req, res) => {
  const product = req.params.productId;
  const page = req.params.page;
  const limit = req.params.limit;
  const url = `http://service-reviews.duckdns.org/api/reviews/${product}`;

  if (page) {
    url += `?page=${page}`;
  }

  if (limit) {
    url += `&limit=${limit}`;
  }
  res.redirect(url);
})

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}.`);
});
