import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {
  
  authors : Author[] = [];

  constructor(private authorService : AuthorService){}

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors();
  }

}
