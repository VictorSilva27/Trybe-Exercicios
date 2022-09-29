// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === (+req.params.id));
    res.status(200).json({ activity }); 
});

app.get('/myActivities/', (req, res) => res.status(200).json({ activities }));

// app.put('/teams/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, initials } = req.body;
//     let updatedTeam;
  
//     for (let i = 0; i < teams.length; i += 1) {
//       const team = teams[i];
  
//       if (team.id === Number(id)) {
//         team.name = name;
//         team.initials = initials;
//         updatedTeam = team;
//       }
//     }
  
//     res.status(200).json({ updatedTeam });
//   });

//   app.delete('/teams/:id', (req, res) => {
//     const { id } = req.params;
//     const arrayPosition = teams.findIndex((team) => team.id === Number(id));
//     teams.splice(arrayPosition, 1);
  
//     res.status(200).end();
//   });

module.exports = app;