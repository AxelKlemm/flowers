import { Component, Input } from '@angular/core';
import { Flower, FlowerDetails, FlowerService } from '../flower.service';

@Component({
  selector: 'flower-card',
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss']
})
export class FlowerCardComponent  {

  @Input() flowerId = 0;
  
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

  toggleDetails(): void {
    this.detailsOpen = !this.detailsOpen;
  }

}
