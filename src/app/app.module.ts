import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

import { WeatherService } from './weather.service';
import { CharacterComponent } from './character.component';
import { FilmsComponent } from './films.component';
import { PlanetsComponent } from './planets.component';
import { SpeciesComponent } from './species.component';
import { StarshipsComponent } from './starships.component';
import { VehiclesComponent } from './vehicles.component';



@NgModule({

  declarations: [

    AppComponent,

    CharacterComponent,

    FilmsComponent,

    PlanetsComponent,

    SpeciesComponent,

    StarshipsComponent,

    VehiclesComponent

  ],

  imports: [

    BrowserModule, HttpClientModule, FormsModule

  ],

  providers: [ WeatherService ],

  bootstrap: [AppComponent]

})

export class AppModule { }
