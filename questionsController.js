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
    }, req.params.id);
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