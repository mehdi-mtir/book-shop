import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path : "", component : ListBooksComponent, pathMatch : "full"},
  {path : "add", component : AddBookComponent},
  {path : "edit", component : EditBookComponent},
  {path : "", redirectTo : "books", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
