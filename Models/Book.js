'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Sample Model Schema

// var BookSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     publishDate: {
//         type: Date,
//         default: Date.now()
//     },
//     keywords: Array,
//     published: Boolean,
//     author: {
//         type: Schema.ObjectId,
//         ref: 'User'
//     },
//     detail: {
//         modelNumber: Number,
//         hardcover: Boolean,
//         reviews: Number,
//         rank: Number
//     }
// });

var BookSchema = new Schema({
    title: String,
    author: String,
    category: String
})


module.exports = mongoose.model('Book', BookSchema);
