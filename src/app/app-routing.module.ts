import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { MobsComponent } from './pages/mobs/mobs.component';
import { TechComponent } from './pages/tech/tech.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'mobs', component: MobsComponent },
  { path: 'tech', component: TechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
