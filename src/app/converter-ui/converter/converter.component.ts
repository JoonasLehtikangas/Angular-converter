import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from 'src/app/shared/conversion-def.class';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  @Input() parentForm!: FormGroup;

  conversionDefs!: ConversionDef[]; 
  
  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.conversionDefs = this.conversionService.getCurrentConversions();

    //categoryValue change detected. Conversion set to be taken according to category value
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionService.setCategoryIdx(value);
      this.conversionDefs = this.conversionService.getCurrentConversions();
    });
  }
}
