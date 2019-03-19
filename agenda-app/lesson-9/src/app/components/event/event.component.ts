import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
  @Input() value: any;
  @Output() deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();


  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
  }
}
