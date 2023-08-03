import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { RelegendableComponent } from "./components/relegendable/relegendable.component";
import { RelegendableListComponent } from "./components/relegendable-list/relegendable-list.component";
import { RelegendableControlsComponent } from "./components/relegendable-controls/relegendable-controls.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PositionPickerComponent } from "./components/position-picker/position-picker.component";
import { NgxColorsModule } from "ngx-colors";
import { AlignPickerComponent } from "./components/align-picker/align-picker.component";
import { FontSizePickerComponent } from "./components/font-size-picker/font-size-picker.component";
import { ButtonSmallComponent } from "./components/button-small/button-small.component";
import { ButtonMediumComponent } from "./components/button-medium/button-medium.component";
import { CheckboxWithLabelComponent } from './components/checkbox-with-label/checkbox-with-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelegendableComponent,
    RelegendableListComponent,
    RelegendableControlsComponent,
    PositionPickerComponent,
    AlignPickerComponent,
    FontSizePickerComponent,
    ButtonSmallComponent,
    ButtonMediumComponent,
    CheckboxWithLabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgxColorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
