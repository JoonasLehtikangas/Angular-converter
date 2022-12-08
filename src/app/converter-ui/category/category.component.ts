import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';
import { ConverterCategoryrDef } from 'src/app/shared/converter-def.class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  @Input() parentForm!: FormGroup;

  ConverterCategorieDefs!: ConverterCategoryrDef[];

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.ConverterCategorieDefs = this.conversionService.getConverterCategories();
  }

}
