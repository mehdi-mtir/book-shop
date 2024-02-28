import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(
      1, 
      "https://m.media-amazon.com/images/I/71wm29Etl4L._SY466_.jpg", 
      'Power of habits', 
      'Charles Duhigg', 
      new Date(2010,0,1), 
      19.50
    ),
    new Book(
      2, 
      "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
      'Atomic Habits', 
      'James Clear', 
      new Date (2009,0,1), 
      22.50
    ),
    new Book(
      3, 
      "https://m.media-amazon.com/images/I/71Bs0wqcZ3L._SY466_.jpg",
      'The slight Edge', 
      'Jeff Olsen', 
      new Date(1998,0,10), 
      18.50
    )
  ];

  constructor() { }

  getBooks(){
    return [...this.books]; //retourner une copie du tableau books
  }

  getLastId(){
    return this.books[this.books.length-1].id;
  }

  addBook(title : string, author : string, cover : string, publishDate : Date, price : number){
    const book = new Book(this.getLastId()+1, cover, title, author, publishDate, price);
    this.books = [...this.books, book];
  }





}
