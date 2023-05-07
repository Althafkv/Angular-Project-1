import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'David', weight: 'Dec 5, 2021', symbol: 'WD-12345'},
  {position: 2, name: 'Kelly', weight: 'Jan 2, 2023', symbol: 'AS-12345'},
  {position: 3, name: 'Maxwell', weight: 'Feb 4, 2022', symbol: 'BG-12345'},
  {position: 4, name: 'Kate', weight: 'Jan 8, 2023', symbol: 'LK-12345'},
  {position: 5, name: 'Jhon', weight: 'Nov 1, 2022', symbol: 'HF-12345'},
];

@Component({
  selector: 'app-dashtable',
  templateUrl: './dashtable.component.html',
  styleUrls: ['./dashtable.component.css']
})

export class DashtableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
