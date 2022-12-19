import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  templateUrl: './conversion-input.component.html',
  styleUrls: ['./conversion-input.component.css']
})
export class ConversionInputComponent implements OnInit{
  @Input() parentForm!: FormGroup;

  conversionInUnitText: string = "Input";

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    // default value 'Input as kgs' setup
    let conversionDef = this.conversionService.getCurrentConversion();
    this.conversionInUnitText = "Input as " + conversionDef.inUnit;

    // detection of any fromControl change
    this.parentForm?.valueChanges.subscribe((value) => {
      let conversionDef = this.conversionService.getCurrentConversion();
      this.conversionInUnitText = "Input as "+ conversionDef.inUnit; 
    });

    //converter change detected
    this.parentForm.get("converterValue")?.valueChanges.subscribe((value) => {
      this.conversionService.setConversionIdx(value);

      this.parentForm.controls['conversionInput'].value 
      ? this.parentForm.controls['conversionInput'].setValue(null)
      : conversionDef = this.conversionService.getCurrentConversion();
        this.conversionInUnitText = "Input as "+ conversionDef.inUnit; 
    });

    // category change detection
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionInUnitText = 'Input';
    })
  }
}
