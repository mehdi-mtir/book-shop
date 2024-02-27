import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent {
  @Input() book? : Book;
  @Output() hideChild = new EventEmitter();

  hideDetails(){
    this.hideChild.emit();
  }

}
