import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController{
    constructor(private bookService:BookService){}

    @Get("/findAll")
    getAllBooks():Book[]{
        return this.bookService.getAllBooks();
    }

    @Post("/addBook")
    addBook(@Body() book:Book):string{
        return this.bookService.addBookService(book);
    }

    @Delete("/deleteBook/:id")
    deleteBook(@Param("id") bookId:string):string{
        return this.bookService.deleteBookService(bookId);
    }
    // @Put("/updateBook/:id")
    // updateBook(@Body() book:Book):string{
    //     return this.bookService.updateBookService(id);
    // }
    
    //find book by id
    @Get("/:id")
    getBookById(@Param("id") bookId:string):any{
        return this.bookService.findBookById(bookId);
    }
}