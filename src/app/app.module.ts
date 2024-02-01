import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxPrintModule } from 'ngx-print';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlignPickerComponent } from "./components/align-picker/align-picker.component";
import { ButtonMediumComponent } from "./components/button-medium/button-medium.component";
import { ButtonSmallComponent } from "./components/button-small/button-small.component";
import { CheckboxWithLabelComponent } from './components/checkbox-with-label/checkbox-with-label.component';
import { FontSizePickerComponent } from "./components/font-size-picker/font-size-picker.component";
import { PositionPickerComponent } from "./components/position-picker/position-picker.component";
import { RelegendableControlsComponent } from "./components/relegendable-controls/relegendable-controls.component";
import { RelegendableListComponent } from "./components/relegendable-list/relegendable-list.component";
import { RelegendableComponent } from "./components/relegendable/relegendable.component";
import { HomeComponent } from "./pages/home/home.component";

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
    ColorPickerModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
