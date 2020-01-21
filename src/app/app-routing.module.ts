import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { MessageComponent } from './message/message.component';
import { WatchesComponent } from './watches/watches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: WatchesComponent },
  { path: 'message', component: MessageComponent },
  { path: 'detail/:id', component: WatchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
