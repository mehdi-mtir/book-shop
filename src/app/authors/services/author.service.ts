import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private authors = [
    new Author(1, "Charles", "Duhigg"),
    new Author(2, "Jeff", "Olsen"),
    new Author(3, "James", "Clear"),
  ];

  AuthorsListUpdated = new Subject<Author[]>();

  constructor() { }

  getAuthors(){
    return [...this.authors];
  }

  getAuthorById(id : number){
    return this.authors.find(a=>a.id === id);
  }

  getAuthorFullName(id : number){
    const author = this.getAuthorById(id);
    return author?.firstName + " " + author?.lastName
  }

  getLastId(){
    return this.authors[this.authors.length - 1].id
  }

  //addAuthor
  addAuthor(firstName : string, lastName : string){
    //this.authors.push(author);
    const author = new Author(this.getLastId()+1, firstName, lastName);
    this.authors = [...this.authors, author];
    //this.AuthorsListUpdated.next([...this.authors]);

  }

  editAuthor(author : Author){
    this.authors = this.authors.map(
      a=>a.id===author.id?author:a
    );
    //this.AuthorsListUpdated.next([...this.authors]);

  }

  deleteAuthor(id : number){
    this.authors = this.authors.filter(author=>author.id !== id);
    this.AuthorsListUpdated.next([...this.authors]);
    //console.log(this.authors);
  }
}
