questions = require('./questionsModel');

exports.getQuestions = function(req, res)
{
    questions.getAll(function(err, questions)
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
                    message: "Questions received",
                    data: questions
                }
            );
        }
    });
};

exports.getQuestionByID = function(req, res)
{
    questions.getQuestionByID(function(err, question)
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
                    message: "Question by id received",
                    data: question
                }
            );
        }
    }, req.params.id, req.params.limit);
}

exports.getQuestionsByUser = function(req, res)
{
    questions.getQuestionsByUser(function(err, questions)
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
                    message: "Questions by user received",
                    data: questions
                }
            );
        }
    }, req.params.id, req.params.limit);
}

exports.getQuestionsByUserAndCategory = function(req, res)
{
    console.log(req.params);
    questions.getQuestionsByUserAndCategory(function(err, questions)
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
                    message: "Questions received",
                    data: questions
                }
            );
        }
    }, req.params.id, req.params.category, req.params.limit, req.params.offset);
}

exports.getQuestionQuantityByUserAndCategory = function(req, res)
{
    questions.getQuestionQuantityByUserAndCategory(function(err, quantity)
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
                    status: "success",
                    message: "Quantity received",
                    data: quantity
                }
            );
        }
    }, req.params.id, req.params.category);
}

exports.getCategories = function(req, res)
{
    questions.getCategories(function(err, categories)
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
                    status: "success",
                    message: "Categories received",
                    data: categories
                }
            );
        }
    });
}

exports.getQuestionsByCategory = function(req, res)
{
    questions.getByCategory(function(err, questions)
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
                    message: "Questions received",
                    data: questions
                }
            );
        }
    }, req.params.category);
};

exports.createQuestion = function(req, res)
{
    questions.createQuestion(function(err, question)
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
                    message: "Question created",
                    data: question
                }
            );
        }
    }, req.body);
};