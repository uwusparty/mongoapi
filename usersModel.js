
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
        rated_questions:
        {
            type: Array,
            default: null
        }
    },
    {
        collection: 'users'
    }
    
);

//Para relacionar las preguntas en preguntas_puntuadas, usar [ObjectId("605dbd1343e3f8d753da5cad")]

//User Contact Model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.getAll = function(callback, limit)
{
    User.find({},{"_id":1, "rated_questions":1},callback).limit(limit);
}

module.exports.createUser = function(callback, id)
{
    User.create({"_id": id}, callback);
}

module.exports.deleteUser = function(callback, id)
{
    User.deleteOne({"_id": id}, callback);
}