import { Injectable } from '@angular/core';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors = [
    new Author(1, "Charles", "Duhigg"),
    new Author(2, "Jeff", "Olsen"),
    new Author(3, "James", "Clear"),
  ]

  constructor() { }

  getAuthors(){
    return [...this.authors];
  }

  getLastId(){
    return this.authors[this.authors.length - 1].id
  }

  //addAuthor
  addAuthor(firstName : string, lastName : string){
    //this.authors.push(author);
    const author = new Author(this.getLastId()+1, firstName, lastName);
    this.authors = [...this.authors, author];
  }
}
