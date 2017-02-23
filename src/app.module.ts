import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import {
    AppComponent,
} from './app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [ ]
})
export class AppModule {}