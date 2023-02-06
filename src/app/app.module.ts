import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RelegendableComponent } from './components/relegendable/relegendable.component';
import { RelegendableListComponent } from './components/relegendable-list/relegendable-list.component';
import { RelegendableControlsComponent } from './components/relegendable-controls/relegendable-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelegendableComponent,
    RelegendableListComponent,
    RelegendableControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
