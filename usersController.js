users = require('./usersModel');

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