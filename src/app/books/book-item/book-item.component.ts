import { Component, Input } from '@angular/core';
import { IBookToDisplay } from '../model/ibook-to-display';

@Component({
  selector: '[app-book-item]',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input("book") b? : IBookToDisplay;
}
