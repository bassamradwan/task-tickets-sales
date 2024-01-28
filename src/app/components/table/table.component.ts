// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })


// export class TableComponent implements OnInit {
 
//   tickets: any[] = [
//     { id: 1, userName: 'احمد محمود', ticketNumber: 'T12345', ticketValue: 50, cinema: 'Cinema A', attendees: ['Person 1', 'Person 2'], purchaseCount: 2, totalPrice: 100 },
//     { id: 2, userName: 'Jane Doe', ticketNumber: 'T67890', ticketValue: 30, cinema: 'Cinema B', attendees: ['Person 3', 'Person 4'], purchaseCount: 2, totalPrice: 60 },
//   ];

//   ngOnInit() {
//   }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @ViewChild('dataTable') dataTable!: Table;
  @ViewChild('paginator') paginator!: Paginator;

  tickets = [
    {
      id: 1,
      userName: 'احمد محمود',
      userImage: '../../../assets/Image-30.svg',
      ticketNumber: 'T123456',
      ticketValue: 100,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ... ',
      attendees: 2,
      purchaseCount: 1,
      ticketInfo: 'تذكرة رقم 67',
      phonNamber:"0123456789",
    },
    {
      id: 2,
      userName: 'محمد عبده',
      userImage: '../../../assets/2.svg',
      ticketNumber: 'T789012',
      ticketValue: 200,
      cinema: ' سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      attendees: 4,
      purchaseCount: 2,
      ticketInfo: 'تذكرة رقم 67',
      phonNamber:"0123456789",
    },
    {
      id: 1,
      userName: 'احمد حسن',
      userImage: '../../../assets/Image-30.svg',
      ticketNumber: 'T123456',
      ticketValue: 250,
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ... ',
      attendees: 2,
      purchaseCount: 1,
      ticketInfo: 'تذكرة رقم 67',
      phonNamber:"0123456789",
    },
    {
      id: 2,
      userName: 'محمد سيد',
      userImage: '../../../assets/2.svg',
      ticketNumber: 'T789012',
      ticketValue: 150,
      cinema: ' سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      attendees: 4,
      purchaseCount: 2,
      ticketInfo: 'تذكرة رقم 67',
      phonNamber:"0123456789",
    },
  ];

  totalRecords: number = 0;
  first: number = 0;
  rows: number = 10; // عدد الصفوف لكل صفحة
title : string='عرض من  اصل 250';

  sortField: string="";
  sortOrder: number=1;
  constructor() {
  }
  ngOnInit(): void {
    this.totalRecords = this.tickets.length;

  }
  loadLazyData(event:any) {
    this.first = event.first;
  }
}




