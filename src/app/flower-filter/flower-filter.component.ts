import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'flower-filter',
  templateUrl: './flower-filter.component.html',
  styleUrls: ['./flower-filter.component.scss']
})
export class FlowerFilterComponent implements OnInit {

  flowerService: FlowerService;
  @ViewChild('filter') filter: ElementRef<HTMLInputElement> | undefined;
  constructor( fl: FlowerService) {
    this.flowerService = fl;
  } 

  ngOnInit(): void {
  }

  applyFilter(){
    let filterString = this.filter?.nativeElement.value;
    if(!filterString)
      filterString = "";
    this.flowerService.setFilter(filterString)
  }

}
