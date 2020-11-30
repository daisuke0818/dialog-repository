import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ContainerComponent } from './container/container.component';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './state';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, DialogComponent, ContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDialogModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
