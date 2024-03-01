import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { IBookToDisplay } from '../model/ibook-to-display';
import { AuthorService } from 'src/app/authors/services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {
  books : Book[] = [];
  booksToDisplay : IBookToDisplay[] = [];
  selectedBook? : IBookToDisplay;
  filteredBooks? : IBookToDisplay[];
  booksSubscription? : Subscription


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

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?"))
      this.bookService.deleteBook(id);
  }

  transformBookToDisplay() : IBookToDisplay[]{
    return this.books.map(b=>{
      return {
        id : b.id,
        cover : b.cover,
        title : b.title,
        author : this.authorService.getAuthorFullName(b.authorId),
        publishDate : b.publishDate,
        price : b.price
      } as IBookToDisplay
    });
  }

  ngOnDestroy(): void {
    this.booksSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.bookService.getBooks();

    this.booksSubscription = this.bookService.booksUpdated.subscribe(
      books => {
        this.books = books;
       
        this.booksToDisplay = this.transformBookToDisplay();
        console.log(this.booksToDisplay);
      }
    );
  }
}
