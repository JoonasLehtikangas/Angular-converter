import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material imports
import { MaterialModule } from './material.module';

import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import { ConverterComponent } from './converter-ui/converter/converter.component';
import { CategoryIconComponent } from './converter-ui/category-icon/category-icon.component';
import { ConversionInputComponent } from './converter-ui/conversion-input/conversion-input.component';
import { ConversionOutputComponent } from './converter-ui/conversion-output/conversion-output.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CategoryComponent,
    ConverterComponent,
    CategoryIconComponent,
    ConversionInputComponent,
    ConversionOutputComponent,
    AppInfoComponent,
    ConverterUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
