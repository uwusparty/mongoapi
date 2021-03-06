users = require('./usersModel');

exports.valorar = function(req, res)
{
    users.valorar(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "Pregunta valorada",
                    data: user
                }
            );
        }
    }, req.params.id);
}

exports.getQuestionLikes = function(req, res)
{
    users.getQuestionLikes(function(err, question)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "Question likes received",
                    data: question
                }
            );
        }
    }, req.params.id);
}

exports.removeValorar = function(req, res)
{
    users.removeValorar(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "Valoración retirada",
                    data: user
                }
            );
        }
    }, req.params.id, req.body);
}

exports.getUserRatedQuestions = function(req, res)
{
    users.getUserRatedQuestions(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "User created",
                    data: user
                }
            );
        }
    }, req.params.id);
}

exports.editUser = function(req, res)
{
    users.editUser(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "User edited",
                    data: user
                }
            );
        }
    }, req.params.id, req.body);
}


exports.create = function(req, res)
{
    users.createUser(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "User created",
                    data: user
                }
            );
        }
    }, req.body._id);
}

exports.delete = function(req, res)
{
    users.deleteUser(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "User deleted",
                    data: user
                }
            );
        }
    }, req.body._id);
}

exports.getUsers = function(req, res)
{
    users.getAll(function(err, user)
    {
        if(err)
        {
            res.json
            (
                {
                    status: "error",
                    message: err
                }
            );
        }
        else
        {
            res.json
            (
                {
                    status: "Success",
                    message: "Users received",
                    data: user
                }
            );
        }
    });
};