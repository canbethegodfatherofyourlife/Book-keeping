const express = require('express');
const asyncHandler = require("express-async-handler");
const Book = require('../models/Book')

const bookRouter = express.Router();

// Create book
bookRouter.post('/', asyncHandler(async(req,res) => {
    const book = await Book.create(req.body);

    if (book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('Book creating failed');
    }
}))


// Fetch book
bookRouter.get('/', asyncHandler(async(req,res) => {
    const book = await Book.find({});

    if (book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('There are no books');
    }
}))

// Update book
bookRouter.put('/:id', authMiddleware, asyncHandler(async (req, res)=>{

    const book = await Book.findById(req.params.id);

    if (book){

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )
        res.status(200);
        res.json(updatedBook);

    }else{
        res.status(500);
        throw new Error('Update failed');
    }
}))

// Delete book
bookRouter.delete('/:id', authMiddleware, asyncHandler(async (req, res)=>{

    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200)
        res.send(book);
    }catch(e){
        res.json(e)
    }
}))


module.exports = bookRouter;