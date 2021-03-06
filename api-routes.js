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


//URL para crear preguntas
router.route('/questions/create').post(questionsController.createQuestion);
//Borrar pregunta
router.route('/questions/delete').delete(questionsController.deleteByID);
//URL para editar preguntas (Al editar siempre lo pone en -1, por eso tenemos otra URL para cambiar el estado)
router.route('/questions/edit/id/:id').put(questionsController.editQuestion);
//Editar el estado de una pregunta
router.route('/questions/status').put(questionsController.editStatus);
//URL para añadir "Times" a las respuestas
router.route('/questions/times/id/:id').put(questionsController.addTimes);

//URL para recibir todas las preguntas
router.route('/questions').get(questionsController.getQuestions);
//URL para recibir una pregunta por id
router.route('/questions/:id').get(questionsController.getQuestionByID);
//Mirar valoraciones de una pregunta
router.route('/questions/likes/id/:id').get(usersController.getQuestionLikes);
//URL para obtener preguntas filtradas por usuario, categoria, con límite y offset
router.route('/questions/id/:id/category/:category/limit/:limit/offset/:offset').get(questionsController.getQuestionsByUserAndCategory);
//URL para recibir la cantidad de preguntas del usuario según una categoría (All para todas)
router.route('/questions/id/:id/category/:category/quantity').get(questionsController.getQuestionQuantityByUserAndCategory);
//URL para recibir preguntas en base a una categoría (preguntas de todos los usuarios)
router.route('/questions/category/:category').get(questionsController.getQuestionsByCategory);

//URL para recibir todas las categorias (si el usuario recibido no tiene preguntas en una categoría, no le aparecerá la categoría)
router.route('/questions/categories/id/:id').get(questionsController.getCategories);



//URL para crear usuarios
router.route('/users/create').post(usersController.create);
//URL para dar de baja usuarios
router.route('/users/delete').delete(commonController.delete);
//URL para recibir los usuarios de la base de mongodb
router.route('/users').get(usersController.getUsers);
//URL para ver las preguntas valoradas de un usuario (el id es del usuario)
//PUT para añadirlas
//DELETE para borrarlas
//Por la URL le pasas el ID, por el body le pasas un rated_questions (una pregunta id)
router.route('/users/rated/id/:id')
.get(usersController.valorar)
.put(usersController.editUser)
.delete(usersController.removeValorar);

//Export API routes
//Así podemos usar en el resto de nuestro web service la instancia de "router"
module.exports = router;