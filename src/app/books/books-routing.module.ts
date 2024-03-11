import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { authGuardGuard } from '../shared/auth-guard.guard';

const routes: Routes = [
  {path : "", component : ListBooksComponent, pathMatch : "full", canActivate : [authGuardGuard]},
  {path : "add", component : AddBookComponent, canActivate : [authGuardGuard]},
  {path : "edit/:id", component : EditBookComponent, canActivate : [authGuardGuard]},
  {path : "", redirectTo : "books", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
