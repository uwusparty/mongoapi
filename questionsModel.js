var mongoose = require('mongoose');

//Setup Schema
var questionSchema = new mongoose.Schema
(
    {
        category:
        {
            type: String,
            required: true
        },
        image_url:
        {
            type: String,
            required: true
        },
        question: 
        {
            en: {type: String, required: true},
            es: {type: String, required: true}
        },
        correct: 
        {
            en: {type: String, required: true},
            es: {type: String, required: true},
            times: {type: Number, required: true}
        },
        incorrects: 
        [
            {
                en: {type: String, required: true},
                es: {type: String, required: true},
                times: {type: Number, required: true}
            },
            {
                en: {type: String, required: true},
                es: {type: String, required: true},
                times: {type: Number, required: true}
            },
            {
                en: {type: String, required: true},
                es: {type: String, required: true},
                times: {type: Number, required: true}
            }
        ],
        id_author: 
        {
            type: Number,
            //0 usuario eliminado
            //-1 Sistema
            default: -1
        },
        status:
        {
            //-1 Pendiente
            // 0 Rechazado
            // 1 Aceptado
            type: Number,
            default: -1
        }
    },
    {
        collection: 'questions'
    }
    
);

//Question Contact Model
var Question = module.exports = mongoose.model('question', questionSchema);

module.exports.getAll = function(callback)
{
    Question.find({'status':'1'}, callback);
}

module.exports.getQuestionsByUser = function(callback, id)
{
    Question.find({'id_author': id}, callback);
}

module.exports.getByCategory = function(callback, category)
{
    Question.find({'category':category}, callback);
}

module.exports.createQuestion = function(callback, body)
{
    Question.create(body, callback);
}

module.exports.changeAuthor = function(callback, id)
{
    Question.updateMany({"id_author":id}, {$set:{"id_author":0}}, callback);
}

module.exports.getCategories = function(callback)
{
    Question.distinct("category",{}, callback);
}