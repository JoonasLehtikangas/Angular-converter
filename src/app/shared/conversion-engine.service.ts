import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryrDef } from './converter-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {

  // definitions for weight conversions
  weightDefs: ConversionDef[] = [
    new ConversionDef('kgs to libs',  'kgs', 'lbs', 2.20462262185),
    new ConversionDef('libs to kgs',  'lbs', 'kgs', 0.45359237),
    new ConversionDef('kgs to stones',  'kgs', 'stones', 0.157473044),
    new ConversionDef('stones to kgs',  'stones', 'kgs', 6.35029318)
  ]

  // definitions for distance conversions
  distanceDefs: ConversionDef[] = [
    new ConversionDef('Kilometers to Miles',  'kilometers', 'miles', 0.621371192),
    new ConversionDef('Miles to Kilometers',  'miles', 'kilometers', 1.609344),
    new ConversionDef('Feet to Meters', 'feet', 'meters', 0.3048 ),
    new ConversionDef('Meters to Feet',  'meters','feet', 3.2808399 )
  ]

  // definitions for temperature conversions
  temperatureDefs: ConversionDef[] = [
    new ConversionDef('Kelvin to Celsius',  'kelvin', 'celsius', -272.15),
    new ConversionDef('Celsius to Kelvin',  'celsius', 'kelvin', 272.15)
  ]

  // definitions for converter categories
  converterGategories: ConverterCategoryrDef[] = [
    new ConverterCategoryrDef('Weight', "keyboard_double_arrow_down", this.weightDefs),
    new ConverterCategoryrDef('Distance', "horizontal_distribute", this.distanceDefs),
    new ConverterCategoryrDef('Temperature', "severe_cold", this.temperatureDefs)
  ];

  private categoryIdx = 0;
  private conversionIdx = 0;

  constructor() {}

  getConverterCategories(): ConverterCategoryrDef[] {
    return this.converterGategories;
  }

  getCurrentCategory(): ConverterCategoryrDef {
    return this.converterGategories[this.categoryIdx];
  }

  getCurrentConversions(): ConversionDef[] {
    return this.converterGategories[this.categoryIdx].conversions;
  }

  getCurrentConversion(): ConversionDef {
    return this.converterGategories[this.categoryIdx].conversions[this.conversionIdx];
  }

  // value set for category index
  setCategoryIdx(name: string) {
    for(let i = 0; i < this.converterGategories.length; i++) {
      if(name == this.converterGategories[i].name) {
        this.categoryIdx = i;
        return;
      }
    }
    return;
  }

  // value set for conversion index
  setConversionIdx(name: string) {
    let conversionDefs = this.converterGategories[this.categoryIdx].conversions;
    for(let i = 0; i < conversionDefs.length; i++) {
      if(name == conversionDefs[i].name) {
        this.conversionIdx = i;
        return;
      }
    }
    return;
  }
}
