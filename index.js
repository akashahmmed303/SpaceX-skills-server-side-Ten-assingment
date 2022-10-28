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

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  if (id === '08') {
    res.send(faqs);
  } else {
    const course_faqs = faqs.filter(f => f.category_id === id);
    res.send(course_faqs);
  }
});

app.get('/faqs', (req, res) => {
  res.send(faqs);
});

app.get('/faqs/:id', (req, res) => {
  const id = req.params.id;
  const selectedFaqs = faqs.find(f => f._id === id);
  res.send(selectedFaqs);
});

app.listen(port, () => {
  console.log('SpaceX FAQ Server running on port', port);
});
