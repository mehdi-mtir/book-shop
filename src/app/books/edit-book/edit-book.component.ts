import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/authors/model/author';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/authors/services/author.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book? : Book;
  datePublication : string = "";
  authors : Author[] = [];

  constructor(
    private bookService : BookService, 
    private router : Router,
    private authorService : AuthorService,
    private activatedRoute : ActivatedRoute
  ){}

  editBook(f : NgForm){
    //console.log(f.value.publishDate);
    this.book!.publishDate = f.value.publishDate;
    this.book!.authorId = Number(this.book!.authorId);
    this.book!.price = +this.book!.price;
    this.bookService.editBook(this.book!);
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors();
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        if(this.bookService.getBookById(+id) !== undefined){
          this.book = this.bookService.getBookById(+id);
        }
          
        else
          this.router.navigate(['/books']);
      });
  }
}
