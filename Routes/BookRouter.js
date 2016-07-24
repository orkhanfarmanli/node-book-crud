'use strict';

let express = require('express');
let bookRouter = express.Router();
let Book = require('../Models/Book');

bookRouter
    .get('/', function(req, res) {
        Book.find({}).exec(function(err, books) {
            if (err) throw err;
            res.json(books);
        })
    })
    
    .get('/:id', function(req, res) {
        Book.findById(req.params.id, function(err, book) {
            if (err) throw err;
            res.json(book);
        })
    })

    .post('/', function(req, res) {
        Book.create(req.body, function(err, book) {
            if (err) throw err;
            res.send(book);
        })
    })

    .delete('/:id', function(req, res) {
            Book.findByIdAndRemove(req.params.id, function(err) {
                if (err) throw err;
                res.send("Removed the book mate");
            })
        })

    .patch('/:id', function(req, res) {
        Book.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
            if (err) throw err;
            res.json(req.body);
        })
    })



module.exports = bookRouter;
