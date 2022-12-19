import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInfoComponent } from './app-info/app-info.component';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';

// application routes
const routes: Routes = [
  { path: '', component: ConverterUiComponent},
  { path: 'info', component: AppInfoComponent},
  { path: 'home', component: ConverterUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
