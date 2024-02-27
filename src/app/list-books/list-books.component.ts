import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  selectedBook? : Book;
  books = [
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

  filteredBooks? : Book[];

  showBookDetails(b : Book){
    this.selectedBook = b;
  }

  hideBookDetails(){
    this.selectedBook = undefined;
  }

  filterBooks(keyword : string){
    this.filteredBooks = this.books.filter(
      b=>b.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
