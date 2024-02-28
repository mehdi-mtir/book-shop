import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { IBookToDisplay } from '../model/ibook-to-display';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books : Book[] = [];
  booksToDisplay : IBookToDisplay[] = [];
  selectedBook? : IBookToDisplay;
  filteredBooks? : IBookToDisplay[];


  constructor(private bookService : BookService, private authorService : AuthorService){}

  showBookDetails(b : IBookToDisplay){
    this.selectedBook = b;
  }

  hideBookDetails(){
    this.selectedBook = undefined;
  }

  filterBooks(keyword : string){
    this.filteredBooks = this.booksToDisplay!.filter(
      b=>b.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.booksToDisplay = this.books.map(b=>{
      return {
        id : b.id,
        cover : b.cover,
        title : b.title,
        author : this.authorService.getAuthorFullName(b.authorId),
        publishDate : b.publishDate,
        price : b.price
      } as IBookToDisplay
    })
  }
}
