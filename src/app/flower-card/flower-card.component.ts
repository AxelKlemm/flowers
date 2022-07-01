import { Component, Input, OnInit } from '@angular/core';
import { Flower, FlowerDetails, FlowerService } from '../flower.service';

@Component({
  selector: 'flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent implements OnInit {

  @Input() flowerId:Number = 0;
  
  flowerService: FlowerService;
    
  detailsOpen = false;

  constructor( fl: FlowerService) {
    this.flowerService = fl;
  } 

  myFlower(): Flower  {
    return this.flowerService.getFlowerInfo(this.flowerId);
  }

  myFlowerDetails(): FlowerDetails  {
    return this.flowerService.getFlowerDetails(this.flowerId);
  }

  ngOnInit(): void {
    
  }

  toggleDetails(): void {
    this.detailsOpen = !this.detailsOpen;
  }

}
