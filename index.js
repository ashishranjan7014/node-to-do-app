import Express from 'express';
const App = Express();
const port = process.env.PORT || 8080;
App.get('/', (req, res) => {
  let listData = [
    {
      email: 'ashishranjan7014@gmail.com',
      name: 'Ashish Ranjan',
      contact: '1234567890'
    },
    {
      email: 'kumarvicky@gmail.com',
      name: 'Vicky Kumar',
      contact: '4561239870'
    },
    {
      email: 'jblankit7014@gmail.com',
      name: 'Ankit Kumar',
      contact: '9876543210'
    }
  ];
  res.send(listData);
});
App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
