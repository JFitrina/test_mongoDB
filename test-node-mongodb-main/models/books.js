const mongoose = require("mongoose");
// Define Schame wit timestamps and disable versionKey
// Define Model
// Export Model
const booksSchema = new mongoose.booksSchema({
    title: {type:String,require:true},
    author: {type:String,require:true},
    published_year: {type:Number,require:true},
    genre: {type:String,require:true},
    available: {type:Boolean,require:true},
});
module.exports = mongoose.models('books',booksSchema);
module.exports = books