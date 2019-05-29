import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AppRoutingModule } from "./app-routing.module";
import { FootballComponent } from "./football/football.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LeagueDetailsComponent } from "./league-details/league-details.component";
import { ClubDetailsComponent } from "./club-details/club-details.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { BasketballComponent } from "./basketball/basketball.component";
import { FantasyComponent } from "./fantasy/fantasy.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { H2hComponent } from "./h2h/h2h.component";

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    FootballComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LeagueDetailsComponent,
    ClubDetailsComponent,
    PlayerDetailsComponent,
    BasketballComponent,
    FantasyComponent,
    EventDetailsComponent,
    H2hComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
