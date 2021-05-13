//Filename: api-routes.js

//Initialize express router
let router = require('express').Router();
var cors = require('cors')
//Set default API response                                  request/response
router.get('/', function(req, res)
{
    res.json(
        {
            status:"API preparada",
            message:"Esta wea funsiona correctamente"
        }
    );
});

const { Router } = require('express');

//npm install cors
//El cors lo hemos usado para poder recibir datos desde una petición de AJAX
router.use(cors());
//Usamos el controlador para poder juntar la vista y el modelo
var questionsController = require('./questionsController');
var usersController = require('./usersController');
var commonController = require('./commonController');

router.route('/questions').get(questionsController.getQuestions);
router.route('/questions/create').post(questionsController.createQuestion);
router.route('/questions/id/:id').get(questionsController.getQuestionsByUser);
router.route('/questions/categories').get(questionsController.getCategories);
router.route('/questions/:category').get(questionsController.getQuestionsByCategory);

router.route('/users').get(usersController.getUsers);
router.route('/users/create').post(usersController.create);

router.route('/users/delete').delete(commonController.delete);

/*
router.route('/series/alta').post(seriesController.altaSerie);
router.route('/peliculas/alta').post(peliculasController.altaPelicula);

router.route('/series/baja/:id').delete(comunController.bajaContenido);
router.route('/peliculas/baja/:id').delete(comunController.bajaContenido);

router.route('/:contenido/editar/:id').put(comunController.editarContenido);

router.route('/top').get(comunController.top);

router.route('/series').get(seriesController.getSeries);
router.route('/series/:genero').get(seriesController.getSeriesGenero);

router.route('/peliculas').get(peliculasController.getPeliculas);
router.route('/peliculas/:genero').get(peliculasController.getPeliculasGenero);

router.route('/documentales').get(documentalesController.getDocumentales);
router.route('/documentales/arnold').get(documentalesController.getArnold);
router.route('/documentales/alta').post(documentalesController.altaDocumental);
router.route('/documentales/baja/:id').delete(comunController.bajaContenido);
*/

//Export API routes
//Así podemos usar en el resto de nuestro web service la instancia de "router"
module.exports = router;