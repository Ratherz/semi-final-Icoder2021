import { Component, OnInit } from '@angular/core';
import { City } from './City';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  cities: City[];
  studentsModel = [
    { name: 'Test', product: 'test@gmail.com', detail: '0193543', email: 'test@gmail.com', tel: '0193543' },
    { name: 'Test', product: 'test@gmail.com', detail: '0193543', email: 'test@gmail.com', tel: '0193543' },
    { name: 'Test', product: 'test@gmail.com', detail: '0193543', email: 'test@gmail.com', tel: '0193543' },
    { name: 'Test', product: 'test@gmail.com', detail: '0193543', email: 'test@gmail.com', tel: '0193543' },
    { name: 'Test', product: 'test@gmail.com', detail: '0193543', email: 'test@gmail.com', tel: '0193543' },
  ];
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
  }

}
