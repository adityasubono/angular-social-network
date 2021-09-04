import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageVideoComponent } from './pages/page-video/page-video.component';
// import { ActivityComponent } from './pages/activity/activity.component';
import { PagePeopleComponent } from './pages/page-people/page-people.component';
import { PageDocumentComponent } from './pages/page-document/page-document.component';
import {ChannelComponent} from "./component/channel/channel.component";
import {ActivityComponent} from "./component/activity/activity.component";
import {GridAddComponent} from "./component/grid-add/grid-add.component";
import {GridComponent} from "./component/grid/grid.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    AvatarComponent,
    ButtonComponent,
    FooterComponent,
    PageVideoComponent,
    ActivityComponent,
    PagePeopleComponent,
    PageDocumentComponent,
    ChannelComponent,
    ActivityComponent,
    GridAddComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
