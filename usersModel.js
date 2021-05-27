
var mongoose = require('mongoose');

//Setup Schema
var userSchema = new mongoose.Schema
(
    {
        _id: 
        {
            type: Number,
            required: true
        },
        /*
        rated_questions:
        {
            type: Array,
            default: null
        }*/
        rated_questions:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'question'
            }
        ]
    },
    {
        collection: 'users'
    }
    
);

//Para relacionar las preguntas en preguntas_puntuadas, usar [ObjectId("605dbd1343e3f8d753da5cad")]

//User Contact Model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.valorar = function(callback, id)
{
    User.find({"_id":id}, callback).populate('rated_questions');
}

module.exports.removeValorar = function(callback, idUsuario, body)
{
    console.log(body.rated_questions)
    User.updateOne({"_id":idUsuario}, {$pull:{"rated_questions":body.rated_questions}}, callback);
}

module.exports.getUserRatedQuestions = function(callback, id)
{
    User.find({"_id":id}, {"_id":1, "rated_questions":1},callback);
}

module.exports.getAll = function(callback, limit)
{
    User.find({},{"_id":1, "rated_questions":1},callback).limit(limit);
}

module.exports.editUser = function(callback, id, body)
{
    User.updateOne({"_id": id}, {$push:{"rated_questions":body.rated_questions}}, callback);
}

module.exports.createUser = function(callback, id)
{
    User.create({"_id": id}, callback);
}

module.exports.deleteUser = function(callback, id)
{
    User.deleteOne({"_id": id}, callback);
}

module.exports.getQuestionLikes = function(callback, id)
{
    User.countDocuments({"rated_questions":{"$in":[id]}}, callback);
}