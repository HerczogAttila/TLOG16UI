import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';

import { AppRoutingModule }   from './app-routing.module';
import { TasklistComponent }  from './tasklist.component';
import { CalendarComponent }  from './calendar.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
    ],
    declarations: [
      AppComponent,
      TasklistComponent,
      CalendarComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
