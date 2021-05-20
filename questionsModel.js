var mongoose = require('mongoose');

//Setup Schema
var questionSchema = new mongoose.Schema
(
    {
        category:
        {
            en: {type: String, required: true},
            es: {type: String, required: true}
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

module.exports.getQuestionByID = function(callback, id)
{
    Question.find({'_id': id}, callback);
}

module.exports.getQuestionQuantityByUserAndCategory = function(callback, id, category)
{
    if(category != "All")
    {
        Question.countDocuments({'id_author': id, $or: [{'category.es': category}, {'category.en': category}]}, callback);
    }
    else if(category == "All")
    {
        Question.countDocuments({'id_author': id}, callback);
    }
}

//NO ME GUSTA //
module.exports.getQuestionsByUser = function(callback, id, limit)
{
    Question.find({'id_author': id}, callback).limit(parseInt(limit));
}

module.exports.getQuestionsByUserAndCategory = function(callback, id, category, limit, offset)
{
    if(category != "All")
    {
        Question.find({'id_author': id, $or: [{'category.es': category}, {'category.en': category}]}, callback).skip(parseInt(limit*offset)).limit(parseInt(limit));
    }
    else if(category == "All")
    {
        Question.find({'id_author': id}, callback).skip(parseInt(limit*offset)).limit(parseInt(limit));
    }
}
/////

module.exports.getByCategory = function(callback, category)
{
    Question.find({$or: [{'category.es': category}, {'category.en': category}]}, callback);
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