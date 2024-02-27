import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  @Output() searchBookEvent = new EventEmitter<string>();

  searchBook(keyword : string){
    console.log(keyword);
    this.searchBookEvent.emit(keyword);
  }
}
