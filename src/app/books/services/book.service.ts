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
  ];

  constructor() { }

  getBooks(){
    return [...this.books]; //retourner une copie du tableau books
  }

  getLastId(){
    return this.books[this.books.length-1].id;
  }

  addBook(title : string, authorId : number, cover : string, publishDate : Date, price : number){
    const book = new Book(this.getLastId()+1, cover, title, authorId, publishDate, price);
    this.books = [...this.books, book];
  }





}
