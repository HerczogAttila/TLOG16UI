import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent }   from './calendar.component';
import { TasklistComponent }      from './tasklist.component';

const routes: Routes = [
    { path: '', redirectTo: '/calendar', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent },
    { path: 'tasklist', component: TasklistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
