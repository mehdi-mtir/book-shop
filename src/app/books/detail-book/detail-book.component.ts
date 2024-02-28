import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBookToDisplay } from '../model/ibook-to-display';


@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent {
  @Input() book? : IBookToDisplay;
  @Output() hideChild = new EventEmitter();

  hideDetails(){
    this.hideChild.emit();
  }

}
