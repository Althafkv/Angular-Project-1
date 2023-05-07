import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Person1', weight: 'UPI', symbol: 'Success'},
  {position: 2, name: 'Person2', weight: 'CARD', symbol: 'Pending'},
  {position: 3, name: 'Person3', weight: 'UPI', symbol: 'Success'},
  {position: 4, name: 'Person4', weight: 'NET BANKING', symbol: 'Success'},
  {position: 5, name: 'Person5', weight: 'UPI', symbol: 'Pending'},
  {position: 6, name: 'Person6', weight: 'CARD', symbol: 'Success'},
  {position: 7, name: 'Person7', weight: 'CARD', symbol: 'Success'},
  {position: 8, name: 'Person8', weight: 'UPI', symbol: 'Success'},
  {position: 9, name: 'Person9', weight: 'UPI', symbol: 'Pending'},
  {position: 10, name: 'Person10', weight: 'CARD', symbol: 'Success'},
  {position: 11, name: 'Person11', weight: 'UPI', symbol: 'Success'},
  {position: 12, name: 'Person12', weight: 'UPI', symbol: 'Success'},
  {position: 13, name: 'Person13', weight: 'UPI', symbol: 'Pending'},
  {position: 14, name: 'Person14', weight: 'CARD', symbol: 'Success'},
  {position: 15, name: 'Person15', weight: 'UPI', symbol: 'Success'},
  {position: 16, name: 'Person16', weight: 'CARD', symbol: 'Pending'},
  {position: 17, name: 'Person17', weight: 'CARD', symbol: 'Pending'},
  {position: 18, name: 'Person18', weight: 'UPI', symbol: 'Success'},
  {position: 19, name: 'Person19', weight: 'UPI', symbol: 'Success'},
  {position: 20, name: 'Person20', weight: 'CARD', symbol: 'Success'},
];