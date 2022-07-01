import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Flower
{
   id: number;
   name:string;
   category:string;
}

export interface FlowerDetails
{
   id: number;
   description:string;
   pictureUrl:string;
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
    this.httpClient.get<Flower[]>(this.FLOWER_API_BASE_URL+'/flowers.json').subscribe((data: Flower[]) => {
      this.flowers = data;
      this.filteredList = this.flowers;
      this.categories = this.getCategories(this.filteredList)
    });
  }

  loadFlowerDetailsData() {
    this.httpClient.get<FlowerDetails[]>(this.FLOWER_API_BASE_URL+'/flowerdetails.json').subscribe((data: FlowerDetails[]) => {
      this.flowerdetails = data; 
    });
  }

  setFilter(filterString: string) {
    const filterStringLower = filterString.toLowerCase();
    this.filteredList = this.flowers.filter((flower) => {       
      return flower.name.toLowerCase().includes(filterStringLower) || this.getFlowerDetails(flower.id).description.toLowerCase().includes(filterStringLower)
    });
    this.categories = this.getCategories(this.filteredList);
  }

  getFlowerDetails(id:number) {
    if(this.flowerdetails.length == 0)
      this.loadFlowerDetailsData();

    let tempFlower = this.flowerdetails.find((f) => f.id === id);
   
    if(!tempFlower) {    
      tempFlower = { id:0,description:"Loading ...",pictureUrl:"error"} as FlowerDetails;
    }
    return tempFlower;
  }

  getFlowerInfo(id:number): Flower  {
    let tempFlower = this.flowers.find((f) => f.id === id);
    
    if(!tempFlower) {
      tempFlower = { id:0,name:"Internal Error",category:"error"} as Flower;
    }
    return tempFlower;
  }

  getFlowersOfCategory(category: string): Array<Flower> {
    const tempArray = this.filteredList.filter((a: Flower) => a.category == category);
    tempArray.sort();
    return tempArray;
  }

  getCategories(baseArray: Array<Flower>): string[] {
  
    const tempSet = new Set<string>()
    baseArray.forEach((element: Flower) => tempSet.add(element.category))

    const tempArray = Array<string>.from(tempSet);
    tempArray.sort();

    
    return tempArray;

  }
}


