import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnventBindingComponent } from './envent-binding/envent-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';


@NgModule({
  declarations: [
    AppComponent,
    EnventBindingComponent,
    TwoWayDataBindingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
