import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { Author } from 'src/app/authors/model/author';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  authors : Author[] = [];
  constructor(
    private bookService : BookService, 
    private router : Router,
    private authorService : AuthorService ){}
  

  addBook(f : NgForm){
    this.bookService.addBook(f.value.title, +f.value.authorId, f.value.cover, f.value.publishDate, +f.value.price);
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors();
  }

}
