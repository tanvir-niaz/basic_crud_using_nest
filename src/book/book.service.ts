import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";

@Injectable()
export class BookService{
    public books:Book[]=[];

    //add book

    addBookService(book:Book):string{
        this.books.push(book);
        return "Book has been added";
    }


    //delete book
    deleteBookService(bookId:string):string{
        this.books=this.books.filter(el=>{return el.id!==bookId});
        return "Book has been deleted"
    }
    
    //update book
    updateBookService(book:Book):string{
        let index=this.books.findIndex((currentBook)=>{
            return currentBook.id===book.id;
        })
        this.books[index]=book;
        return "Book has been successfully updated";
    }

    //find book by id
    findBookById(bookId: string): Book | string {
        const index = this.books.findIndex((currentBook) => {
            return currentBook.id == bookId;
        });
        if (index !== -1) {
            return this.books[index];
        } else {
            return "Not Found"; // or throw new Error("Book not found");
        }
    }
    

    //get all books
    getAllBooks():Book[]{
        return this.books;
    }

}