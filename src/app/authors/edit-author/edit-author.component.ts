import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author? : Author;

  constructor(
    private activatedRoute : ActivatedRoute,
    private authorService : AuthorService,
    private router : Router){}

  editAuthor(f : NgForm){
    this.authorService.editAuthor(this.author!);
    this.router.navigate(['/authors']);
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        const id = parametres['id'];
        this.author = this.authorService.getAuthorById(+id)
      });
      /*{
        next : parametres => console.log(parametres['id']),
        error : erreur => console.log(erreur),
        complete : ()=>console.log("Lecture des paramètres terminée")
      }*/
  }



}
