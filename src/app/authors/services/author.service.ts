import { Injectable } from '@angular/core';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors = [
    new Author(1, "Charles", "Duhigg"),
    new Author(2, "Jeff", "Olsen")
  ]

  constructor() { }

  getAuthors(){
    return [...this.authors];
  }

  getLastId(){
    return this.authors[this.authors.length - 1].id
  }

  //addAuthor
  addAuthor(author : Author){
    //this.authors.push(author);
    this.authors = [...this.authors, author];
  }
}
