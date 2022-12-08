import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrls: ['./converter-ui.component.css']
})
export class ConverterUiComponent implements OnInit{
  parentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group ({
      categoryValue: new FormControl(),
      converterValue: new FormControl(),
      conversionInput: new FormControl(),
      conversionOutput: new FormControl()
     });

    this.parentForm.valueChanges.subscribe((value) => {
      console.log(`Value change: ${JSON.stringify(value)}`);
    })
  }
}
