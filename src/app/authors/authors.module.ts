import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAuthorsComponent,
    AddAuthorComponent,
    EditAuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule //Le module responsable des Template-Driven Form
  ]
})
export class AuthorsModule { }
