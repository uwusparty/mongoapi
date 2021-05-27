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

module.exports.deleteByID = function(callback, id)
{
    Question.deleteOne({"_id":id}, callback);
}

module.exports.getQuestionByID = function(callback, id)
{
    Question.findById(id, callback);
}

module.exports.getQuestionQuantityByUserAndCategory = function(callback, id, category)
{
    if(category != "All")
    {
        if(id == "*")
        {
            Question.countDocuments({$or: [{'category.es': category}, {'category.en': category}]}, callback);
        }
        else
        {
            Question.countDocuments({'id_author': id, $or: [{'category.es': category}, {'category.en': category}]}, callback);
        }
    }
    else if(category == "All")
    {
        if(id == "*")
        {
            Question.countDocuments(callback);
        }
        else
        {
            Question.countDocuments({'id_author': id}, callback);
        }
    }
}

module.exports.getQuestionsByUser = function(callback, id, limit)
{
    if(id == "*")
    {
        Question.find(callback).limit(parseInt(limit));
    }
    else
    {
        Question.find({'id_author': id}, callback).limit(parseInt(limit));
    }

}

module.exports.getQuestionsByUserAndCategory = function(callback, id, category, limit, offset)
{
    if(category != "All")
    {
        if(id == "*")
        {
            Question.find({$or: [{'category.es': category}, {'category.en': category}]}, callback).skip(parseInt(limit*offset)).limit(parseInt(limit));
        }
        else
        {
            Question.find({'id_author': id, $or: [{'category.es': category}, {'category.en': category}]}, callback).skip(parseInt(limit*offset)).limit(parseInt(limit));
        }
    }
    else if(category == "All")
    {
        if(id == "*")
        {
            Question.find(callback).skip(parseInt(limit*offset)).limit(parseInt(limit));
        }
        else
        {
            Question.find({'id_author': id}, callback).skip(parseInt(limit*offset)).limit(parseInt(limit));   
        }
    }
}

module.exports.getByCategory = function(callback, category)
{
    Question.find({$or: [{'category.es': category}, {'category.en': category}]}, callback);
}

module.exports.createQuestion = function(callback, body)
{
    Question.create(body, callback);
}

//Este es para el juego, al dar un click le sumas uno en Time
module.exports.addTimes = function(callback, id, body)
{
    Question.findByIdAndUpdate(id, body, {new: true}, callback);
}

//Si editas una pregunta el status se cambiará a Pendiente
module.exports.editQuestion = function(callback, id, body)
{
    body.status = -1;
    Question.findByIdAndUpdate(id, body, {new: true}, callback);
}

module.exports.editStatus = function(callback, id, status)
{
    console.log(id, status);
    Question.updateOne({"_id":id}, {"status":status}, callback);
}

module.exports.changeAuthor = function(callback, id)
{
    Question.updateMany({"id_author":id}, {$set:{"id_author":0}}, callback);
}

module.exports.getCategories = function(callback, id)
{
    if(id == "*")
    {
        Question.distinct("category",{}, callback);
    }
    else
    {
        Question.find({"id_author":id}).distinct("category",{}, callback);
    }
}