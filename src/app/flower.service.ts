import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Flower
{
   id: Number;
   name:String;
   category:String;
}

export interface FlowerDetails
{
   id: Number;
   description:String;
   pictureUrl:String;
}

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
 
  //FLOWER_API_BASE_URL = "/assets"; 
  FLOWER_API_BASE_URL = "http://localhost:9010";  

  
  httpClient: HttpClient;

  flowers: Flower[] = [];
  filteredList: Flower[] = [];
  flowerdetails: FlowerDetails[] = [];
  categories: string[] = [];


  constructor(private http: HttpClient) {
    this.httpClient = http;
    this.loadFlowerData();
  }

  loadFlowerData() {
    this.httpClient.get(this.FLOWER_API_BASE_URL+'/flowers.json').subscribe((data: any) => {
      this.flowers = data;
      this.filteredList = this.flowers;
      this.categories = this.getCategories(this.filteredList)
    });
  }

  loadFlowerDetailsData() {
    this.httpClient.get(this.FLOWER_API_BASE_URL+'/flowerdetails.json').subscribe((data: any) => {
      this.flowerdetails = data; 
    });
  }

  setFilter(filterString: string) {
    let filterStringLower = filterString.toLowerCase();
    this.filteredList = this.flowers.filter((flower) => {       
      return flower.name.toLowerCase().includes(filterStringLower) || this.getFlowerDetails(flower.id).description.toLowerCase().includes(filterStringLower)
    });
    this.categories = this.getCategories(this.filteredList);
  }

  getFlowerDetails(id:Number) {
    if(this.flowerdetails.length == 0)
      this.loadFlowerDetailsData();

    let tempFlower = this.flowerdetails.find((f) => f.id === id);
   
    if(!tempFlower) {    
      tempFlower = { id:0,description:"Loading ...",pictureUrl:"error"} as FlowerDetails;
    }
    return tempFlower;
  }

  getFlowerInfo(id:Number): Flower  {
    let tempFlower = this.flowers.find((f) => f.id === id);
    
    if(!tempFlower) {
      tempFlower = { id:0,name:"Internal Error",category:"error"} as Flower;
    }
    return tempFlower;
  }

  getFlowersOfCategory(category: string): Array<Flower> {
    let tempArray = this.filteredList.filter((a: any) => a.category == category);
    tempArray.sort();
    return tempArray;
  }

  getCategories(baseArray: Array<Flower>): string[] {
  
    let tempSet = new Set()
    baseArray.forEach((element: any) => tempSet.add(element.category))

    let tempArray = Array<string>.from(tempSet);
    tempArray.sort();

    
    return tempArray as string[];

  }
}


