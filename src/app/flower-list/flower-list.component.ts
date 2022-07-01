import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
export class FlowerListComponent implements OnInit {
  
  flowerService: FlowerService;
  
  constructor( fl: FlowerService) {
    this.flowerService = fl;
  } 

  ngOnInit(): void {
  }

}
