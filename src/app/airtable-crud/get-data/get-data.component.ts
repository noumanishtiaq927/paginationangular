import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AirtableCrudService } from 'src/app/service/airtable-crud/airtable-crud.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  AirTableData: any = [];
  AirTableDataa: any = [];
  newdata: any;
  tableSize: any = 5;
  pageNumber: any = 1;
  curPage: number = 1;
  pageSize: number = 10;
  searchValue: string = '';
  start: any;
  end: any;

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   return this.transactions
  //     .map((t) => t.cost)
  //     .reduce((acc, value) => acc + value, 0);
  // }
  constructor(private airtableCrud: AirtableCrudService) {
    this.start = this.pageSize * (this.pageNumber - 1);
    this.end = this.pageNumber * this.pageSize;
  }

  ngOnInit(): void {
    this.airtableCrud.getDataAirtable().subscribe((data) => {
      this.AirTableData = data.records;
    });
  }

  numberOfPages() {
    return Math.ceil(this.AirTableData.length / this.pageSize);
  }
  newPageNumber(x: NgModel) {
    console.log(x.value);
    this.pageNumber = x.value;
    this.start = (this.pageNumber - 1) * this.pageSize;
    this.end = this.pageNumber * this.pageSize;
    console.log('start' + this.start + 'end' + this.end);
    console.log(this.pageNumber + 'pageNumber');
  }
  sortsr() {
    return this.AirTableData.sort((a: any, b: any) =>
      a.fields.userId > b.fields.userId ? 1 : -1
    );
  }
  anothersort() {
    return this.AirTableData.sort((a: any, b: any) =>
      a.fields.PassCode > b.fields.PassCode ? 1 : -1
    );
  }

  sortstring() {
    this.AirTableData.sort((a: any, b: any) => {
      let fa = a.id.toLowerCase(),
        fb = b.id.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
}
