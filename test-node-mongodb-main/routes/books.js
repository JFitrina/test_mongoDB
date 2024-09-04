const express = require("express");
const {addBooks,updateBooks,deleteBooks,getBook,getBooks}
=require("../controllers/bookController");
const router = express.Router();
// Import Controller
// APIs Routing Config
// Export router
router.add('/books/',addBooks);
router.update('/books/:id',updateBooks);
router.delete('/books/:id',deleteBooks);
router.get('/books/:genre',getBook);
router.get('/books/',getBooks);

module.exports = router;

