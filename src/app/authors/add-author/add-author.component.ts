import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  constructor(
    private authorService : AuthorService,
    private router : Router){}

  addAuthor(f : NgForm){
    //console.log(f);
    const id = this.authorService.getLastId() + 1;
    const author = new Author(id, f.value.firstName, f.value.lastName);
    this.authorService.addAuthor(author);
    this.router.navigate(['/authors']);
  }

}
