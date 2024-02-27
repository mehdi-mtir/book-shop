import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

const routes: Routes = [
  {path : "books", component : ListBooksComponent, pathMatch : "full"},
  {path : "books/add", component : AddBookComponent},
  {path : "books/edit", component : EditBookComponent},
  {path : "", redirectTo : "books", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
