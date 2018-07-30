var express = require('express');
var cors = require('cors')
var router = express.Router();
const knex = require('../db/database_connection');



// get all from database
router.get('/', (request, response, ) => {
  //query the database
  //get relevant data
  // send data
  knex('riders')
  .orderBy('riderName', 'desc')
  .then(riders =>{
    response.json(riders)
  })
})
router.get('/:id', (request, response, next) =>{
const id = request.params.id

knex('riders')
.select('*')  // you can speciffy what you want to get back
.where('id', id)
.then(rider =>{
    response.json(rider[0])
    })   
})

router.post('/' , (request, response, next) => {
    knex('riders')
    .insert(request.body, '*')
    .then(record => record[0])
    .then(event => {
        response.status(201).json({
            event
        });
    })
})

router.put('/:id', (request, response, next)=>{
    const id = request.params.id
    knex('riders')
    .where('id', id)
    .update(request.body, '*')
    .then((event) => {
        response.json({
            event
        });
    })
})
router.delete('/:id', (request, response, next) =>{
    const id = request.params.id
    knex('riders')
    .where('id', id)
    .del()
    .then((()=>{
        response.status(201).json({
            deleted: true
        });
    }))
})

module.exports = router;