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
import { PagePeopleComponent } from './pages/page-people/page-people.component';
import { PageDocumentComponent } from './pages/page-document/page-document.component';
import { ChannelComponent } from "./components/channel/channel.component";
import { GridAddComponent } from "./components/grid-add/grid-add.component";
import { GridComponent } from "./components/grid/grid.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MenuComponent } from './components/menu/menu.component';
import { PageActivityComponent } from './pages/page-activity/page-activity.component';
import { ActivityComponent } from "./components/activity/activity.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    AvatarComponent,
    ButtonComponent,
    FooterComponent,
    PageVideoComponent,
    PagePeopleComponent,
    PageDocumentComponent,
    ChannelComponent,
    GridAddComponent,
    GridComponent,
    MenuComponent,
    ActivityComponent,
    PageActivityComponent
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
