import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  // properties
  @Input() bg:string = ''
  @Input() icon:string = ''
  @Input() text1:string = ''
  @Input() text2:string = ''
  @Input() text3:string = ''
}
