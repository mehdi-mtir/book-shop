import { Component } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books = [
    {id : 1, title : 'Power of habits', author : 'Charles Duhigg', datePublication : '1/1/2010', price : 19.50},
    {id : 2, title : 'Power of habits', author : 'Charles Duhigg', datePublication : '1/1/2010', price : 19.50},
    {id : 3, title : 'Power of habits', author : 'Charles Duhigg', datePublication : '1/1/2010', price : 19.50},
  ]
}
