import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FootballComponent } from "./football/football.component";
import { HomeComponent } from "./home/home.component";
import { LeagueDetailsComponent } from "./league-details/league-details.component";
import { ClubDetailsComponent } from "./club-details/club-details.component";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { BasketballComponent } from "./basketball/basketball.component";
import { FantasyComponent } from "./fantasy/fantasy.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { H2hComponent } from "./h2h/h2h.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "football", component: FootballComponent },
  { path: "basketball", component: BasketballComponent },
  { path: "h2h", component: H2hComponent },
  { path: "league-details/:id", component: LeagueDetailsComponent },
  { path: "club-details/:id", component: ClubDetailsComponent },
  { path: "player-details/:id", component: PlayerDetailsComponent },
  { path: "fantasy", component: FantasyComponent },
  { path: "event-details/:id", component: EventDetailsComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
