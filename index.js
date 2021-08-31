import Express from 'express';
const App = Express();
const port = process.env.PORT || 8080;
App.get('/', (req, res) => {
  res.send('hello brother');
});
App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
