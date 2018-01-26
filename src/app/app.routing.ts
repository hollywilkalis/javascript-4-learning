import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeneralComponent } from './general/general.component';
import { NetworkingComponent } from './networking/networking.component';
import { TroubleshootingComponent } from './troubleshooting/troubleshooting.component';
import { InterviewsComponent } from './interviews/interviews.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'networking',
    component: NetworkingComponent
  },
  {
    path: 'troubleshooting',
    component: TroubleshootingComponent
  },
  {
    path: 'interviews',
    component: InterviewsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
