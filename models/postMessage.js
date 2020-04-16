
const mongoose = require('mongoose');

var schema = new mongoose.Schema({ title: String, message: String });
var postMessages = mongoose.model('postMessages', schema);

module.exports = {postMessages}