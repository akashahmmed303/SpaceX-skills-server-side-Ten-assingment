const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const faqs = require('./data/faqs.json');

app.get('/', (req, res) => {
  res.send('FAQ API Running');
});

app.get('/faqs-courses', (req, res) => {
  res.send(courses);
});

app.get('/faqs/:id', (req, res) => {
  const id = req.params.id;
  const selectedFaqs = faqs.find(f => f._id === id);
  console.log(selectedFaqs);
});

app.listen(port, () => {
  console.log('SpaceX FAQ Server running on port', port);
});
