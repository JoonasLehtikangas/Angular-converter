import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrls: ['./conversion-output.component.css']
})
export class ConversionOutputComponent implements OnInit{
  @Input() parentForm!: FormGroup;

  conversionOutUnitText: string = "Output";

  constructor(private conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    // default value 'Output as lbs' setup
    let conversionDef = this.conversionService.getCurrentConversion();
    this.conversionOutUnitText = 'Output as '+conversionDef.outUnit; 

    // detection of any fromControl change
    this.parentForm?.valueChanges.subscribe((value) => {
      let conversionDef = this.conversionService.getCurrentConversion();
      this.conversionOutUnitText = "Output as "+ conversionDef.outUnit; 
    });

    // converter change detected
    this.parentForm.get('converterValue')?.valueChanges.subscribe((value) => {
      this.conversionService.setConversionIdx(value);

      this.parentForm.controls['conversionOutput'].value 
      ? this.parentForm.controls['conversionOutput'].setValue(null)
      : conversionDef = this.conversionService.getCurrentConversion();
        this.conversionOutUnitText = "Output as "+ conversionDef.outUnit; 
    });

    // category change detection
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.conversionOutUnitText = "Output";
    });

    // Conversion calculation
    this.parentForm.get("conversionInput")?.valueChanges.subscribe((value) => {
      let output_value

      conversionDef = this.conversionService.getCurrentConversion();
      console.log(conversionDef);

      if((conversionDef.outUnit === "celsius" || conversionDef.outUnit === "kelvin")){
        output_value = value + conversionDef.coeff
      }else{
        output_value = value * conversionDef.coeff
      }

      this.parentForm.get("conversionOutput")?.setValue(output_value)
    })
  }
}