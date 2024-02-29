import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit, OnDestroy {
  
  authors : Author[] = [];
  authorSubscription? : Subscription;

  constructor(private authorService : AuthorService){}
  

  deleteAuthor(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer l'auteur?"))
      this.authorService.deleteAuthor(id);
  }

  ngOnDestroy(): void {
    this.authorSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authors = this.authorService.getAuthors();
    this.authorSubscription = this.authorService.AuthorsListUpdated.subscribe(
      authors=>this.authors = authors
    );
  }

}
