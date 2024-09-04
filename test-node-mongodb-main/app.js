const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const booksRoutes = require('./routes/books');
app.use(express.json());
dotenv.config();
// MongoDB Config
// Routing Config
// Server Running
mongoose.connect(process.env.MONGO_URI ,{
}).then(()=> console.log('MongoDB connected'))
.catch (err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
