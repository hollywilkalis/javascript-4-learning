import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { InterviewsComponent } from './interviews/interviews.component';
import { NetworkingComponent } from './networking/networking.component';
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InterviewsComponent,
    NetworkingComponent,
    TroubleshootingComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
