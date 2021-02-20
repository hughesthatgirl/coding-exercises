const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const animals = [
  {
    animalType: 'dog',
    pet: true,
    fierceness: 4,
  },
  {
    animalType: 'cat',
    pet: true,
    fierceness: 10,
  },
  {
    animalType: 'giraffe',
    pet: false,
    fierceness: 4,
  },
  {
    animalType: 'zebra',
    pet: false,
    fierceness: 8,
  },
  {
    animalType: 'lion',
    pet: false,
    fierceness: 10,
  },
];

app.get('/dog', (req, res) => {
  res.render('dog', animals[0]);
});

app.get('/all-pets', (req, res) => {
  const data = {
    animals: []
  }

  for (let i = 0; i < animals.length; i++){
    const currentAnimal = animals[i];

    if(currentAnimal.pet){
      data.animals.push(currentAnimal)
    }
  }
  
  res.render('index', data);
});

app.get('/all-non-pets', (req, res) => {
  const data = {
    animals: []
  }

  for (let i = 0; i < animals.length; i++){
    const currentAnimal = animals[i];

    if(!currentAnimal.pet){
      data.animals.push(currentAnimal)
    }
  }

  res.render('index', data);
});

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
