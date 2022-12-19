import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionEngineService } from 'src/app/shared/conversion-engine.service';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.css']
})
export class CategoryIconComponent {
  @Input() parentForm!: FormGroup;

  iconName: string = "keyboard_double_arrow_down";
  
  constructor(private conversionService: ConversionEngineService) {}


  ngOnInit(): void {
    // categoryValue change detect. Icon to be changed according to value
    this.parentForm.get("categoryValue")?.valueChanges.subscribe((value) => {
      this.conversionService.setCategoryIdx(value);
  
      let ConverterCategoryrDef = this.conversionService.getCurrentCategory();
      this.iconName = ConverterCategoryrDef.icon; 
    });
  }
}
