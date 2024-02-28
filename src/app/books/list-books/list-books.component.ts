import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books? : Book[];
  selectedBook? : Book;
  filteredBooks? : Book[];

  constructor(private bookService : BookService){}

  showBookDetails(b : Book){
    this.selectedBook = b;
  }

  hideBookDetails(){
    this.selectedBook = undefined;
  }

  filterBooks(keyword : string){
    this.filteredBooks = this.books!.filter(
      b=>b.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
