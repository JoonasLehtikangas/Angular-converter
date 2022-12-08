import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { ConverterCategoryrDef } from './converter-def.class';

@Injectable({
  providedIn: 'root'
})
export class ConversionEngineService {

  weightDefs: ConversionDef[] = [
    new ConversionDef('kgs to libs',  'kg', 'lbs', 2.20462262185),
    new ConversionDef('libs to kgs',  'lbs', 'kg', 1/2.20462262185)
  ]

  distancetDefs: ConversionDef[] = [
    new ConversionDef('Meters to Miles',  'meters', 'miles', 1/1609.344),
    new ConversionDef('Miles to Meters',  'miles', 'meters', 1609.344)
  ]

  converterGategories: ConverterCategoryrDef[] = [
    new ConverterCategoryrDef('Weight', "", this.weightDefs),
    new ConverterCategoryrDef('Distance', "", this.distancetDefs)
  ];

  constructor() {}

  getConverterCategories(): ConverterCategoryrDef[] {
    return this.converterGategories;
  }
}
