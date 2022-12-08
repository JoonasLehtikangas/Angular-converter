import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {
  meters : number = 0
  miles : number = 0
  categories: string[] = []

  constructor() { 

  function getMiles(meters: number) {
    return meters*0.000621371192;
}

  function getMeters(miles: number) : number {
      return miles*1609.344;
}
  this.categories = [
    
  ]

}
}
