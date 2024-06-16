const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: String,
    description: String,
    year : Number
  });

  const Article = mongoose.model('Article', articleSchema);

  module.exports =  Article