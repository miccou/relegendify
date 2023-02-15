import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RelegendableComponent } from './components/relegendable/relegendable.component';
import { RelegendableListComponent } from './components/relegendable-list/relegendable-list.component';
import { RelegendableControlsComponent } from './components/relegendable-controls/relegendable-controls.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelegendableComponent,
    RelegendableListComponent,
    RelegendableControlsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
