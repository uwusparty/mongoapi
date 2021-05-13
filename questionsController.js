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