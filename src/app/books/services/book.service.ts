import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books : Book[] = [];
  
  /*private books = [
    new Book(
      1, 
      "https://m.media-amazon.com/images/I/71wm29Etl4L._SY466_.jpg", 
      'Power of habits', 
      1, 
      new Date(2010,0,1), 
      19.50
    ),
    new Book(
      2, 
      "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
      'Atomic Habits', 
      3, 
      new Date (2009,0,1), 
      22.50
    ),
    new Book(
      3, 
      "https://m.media-amazon.com/images/I/71Bs0wqcZ3L._SY466_.jpg",
      'The slight Edge', 
      2, 
      new Date(1998,0,10), 
      18.50
    )
  ];*/

  booksUpdated = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  /*getBooks(){
    return [...this.books]; //retourner une copie du tableau books
  }*/

  getBooks(){
    this.http.get<Book[]>("https://localhost:7190/api/Books").subscribe(
      books => {
        this.books = books;
        console.log(this.books);
        this.booksUpdated.next([...this.books]);
      }
    );
  }

  getBookById(id : number){
    return this.books.find(b=>b.id === id);
  }

  getLastId(){
    return this.books[this.books.length-1].id;
  }

  addBook(title : string, authorId : number, cover : string, publishDate : Date, price : number){
    const book = new Book(this.getLastId()+1, cover, title, authorId, publishDate, price);
    this.books = [...this.books, book];
  }

  editBook(book : Book){
    this.books = this.books.map(
      b=>b.id === book.id?book:b
    );
  }

  deleteBook(id : number){
    this.books = this.books.filter(b=>b.id !== id);
    this.booksUpdated.next([...this.books]);
  }



}
