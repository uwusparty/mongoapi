questions = require('./questionsModel');
users = require('./usersModel');

exports.delete = function(req, res)
{
    /*
    questions.changeAuthor
    (
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
                        message: "User deleted and author changed",
                    }
                );
            }
        }, req.body._id)
    );
    */
   questions.changeAuthor(function(err, changed)
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
           users.deleteUser(function(err1, user)
           {
                if(err1)
                {
                    res.json
                    (
                        {
                            status: "error",
                            message: err1
                        }
                    );
                }
                else
                {
                    res.json
                    (
                        {
                            status: "success",
                            message: "User deleted and author changed"
                        }
                    );
                }
           }, req.body._id);
       }
   }, req.body._id);
}