import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
  {path : "", component : ListAuthorsComponent},
  {path : "add", component : AddAuthorComponent},
  {path : "edit", component : EditAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
