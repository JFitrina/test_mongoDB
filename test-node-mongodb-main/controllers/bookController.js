// Import Model
// Function add and export
// Function update and export
// Function delete and export
// Function get all data and export
// Function get data by genre and export
const books = require('../models/books');
const books = require('../models/books');
const books = require('../models/books');
const books = require ('../models/books');
exports.addBooks = async (req , res) => {
    const{title,author,published_year,genre,available} = req.body;
    const books = new books ({title,author,published_year,genre,available});
    try {
        const newBooks = await books.save();
        res.status(201).json(newBooks);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
};
exports.updeteBooks = async (req , res) => {
    try{
        const { title,author,published_year,genre,available } = req.body ;
        const updeteBooks = await books.findByIdAndUpdete(
            req.params.title,
            {title,author,published_year,genre,available},
            {new : true}
        );
        if (!updeteBooks) return res.status(404).json({message:'Books not found'});
        res.json (updeteBooks);
    }catch (err) {
        res.status(400).json({ message : err.message});
    }
};
exports.deleteBooks  = async (req , res) => {
    try{
        const books = await books.findByIdAndUpdete(req.params.title);
        if (!books)return res.status(404).json({message:'Books not found'});
        res.json({message:'Books deleted'});
    }catch (err) {
        res.status(500).json({message:err.message});
    }
};
exports.getBook = async (req,res) => {
    try{
        const books = await books.find();
        res.json(books);
    }catch (err) {
        res.status(500).json({message:err.message});

    }
};
exports.getBooks = async (req,res) => {
    try{
        const books = await books.findByGenre(req.params.title);
        if (!books)return res.status(404).json({message:'Books not found'});
        res.json(books);
    }catch (err) {
        res.status(500).json({message:err.message});
    }
};
