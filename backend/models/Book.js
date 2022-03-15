const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Book Category is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
      timestamps: true,
  }
);

const Book = mongoose.model('Book',bookSchema)
module.exports = Book;