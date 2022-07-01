import { Component } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss']
})
export class FlowerListComponent  {
  
  flowerService: FlowerService;
  
  constructor( fl: FlowerService) {
    this.flowerService = fl;
  } 

 

}
