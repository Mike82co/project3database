var express = require('express');
var cors = require('cors')
var router = express.Router();
const knex = require('../db/database_connection');



// get all from database
router.get('/', (request, response ) => {
  //query the database
  //get relevant data
  // send data
  knex('teams')
  .orderBy('teamName', 'desc')
  .then(team =>{
    response.json(team)
  })
})
router.get('/:id', (request, response) =>{
const id = request.params.id

    knex('teams')
    .select('*')  // you can speciffy what you want to get back will return only first match 
    .where('id', id)
    .then(team =>{
        response.json(team[0])
        })   
})

router.post('/' , (request, response ) => {
    knex('teams')
    .insert(request.body, '*')
    .then(record => record[0])
    .then(event => {
        response.status(201).json({
            event
        });
    })
})

router.put('/:id', (request, response)=>{
    const id = request.params.id
    knex('teams')
    .where('id', id)
    .update(request.body, '*')
    .then((event) => {
        response.json({
            event
        });
    })
})
router.delete('/:id', (request, response) =>{
    const id = request.params.id
    knex('teams')
    .where('id', id)
    .del()
    .then((()=>{
        response.status(201).json({
            deleted: true
        });
    }))
})

module.exports = router;