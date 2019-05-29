import { Component, OnInit } from "@angular/core";
import { FootballService } from "../football.service";
import { FormControl } from "@angular/forms";
import { from } from "rxjs";
import { HomeService } from "../home.service";

@Component({
  selector: "app-h2h",
  templateUrl: "./h2h.component.html",
  styleUrls: ["./h2h.component.css"]
})
export class H2hComponent implements OnInit {
  teams: any;
  team1 = "";
  team2 = "";
  teams2: any;
  events: any;
  lineups: string[] = [];

  // HOME TEAM DETAILS
  homeDefence: string[] = [];
  homeMidfield: string[] = [];
  homeSub: string[] = [];
  homeForward: string[] = [];
  homeGoals: string[] = [];
  homeRedCards: string[] = [];
  homeYellowCards: string[] = [];

  // AWAY TEAM DETAILS
  awayDefence: string[] = [];
  awayMidfield: string[] = [];
  awaySub: string[] = [];
  awayForward: string[] = [];
  awayGoals: string[] = [];
  awayRedCards: string[] = [];
  awayYellowCards: string[] = [];
  tables: any;
  event: any;

  constructor(private football: FootballService, private home: HomeService) {}

  ngOnInit() {}

  onSearchChange(event) {
    this.football.searchTeams(event).subscribe(
      (res: any) => {
        this.teams = res.teams;
        // console.log(res);
      },
      err => {
        // console.log(err);
      }
    );
  }

  onSearchTeamChange(event) {
    this.football.searchTeams(event).subscribe(
      (res: any) => {
        this.teams2 = res.teams;
        console.log(res);
      },
      err => {
        // console.log(err);
      }
    );
  }

  selectTeam(team: any) {
    this.team1 = team.strTeam;
    this.teams = [];
  }

  selectTeamTwo(team: any) {
    this.team2 = team.strTeam;
    this.teams2 = [];
  }

  runSearch() {
    let data = this.team1 + "_VS_" + this.team2;

    this.football.getHeadToHead(data).subscribe(
      (res: any) => {
        this.events = res.event;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  openEvent(id) {
    this.home.getEventDetails(id).subscribe(
      (res: any) => {
        this.event = res.events[0];

        this.football.getLeagueTable(this.event.idLeague).subscribe(
          (res: any) => {
            this.tables = res.table;
          },
          err => {
            console.log(err);
          }
        );

        this.homeDefence = this.event.strHomeLineupDefense.split(";");
        this.homeMidfield = this.event.strHomeLineupMidfield.split(";");
        this.homeSub = this.event.strHomeLineupSubstitutes.split(";");
        this.homeForward = this.event.strHomeLineupForward.split(";");
        this.homeGoals = this.event.strHomeGoalDetails.split(";");
        this.homeYellowCards = this.event.strHomeYellowCards.split(";");
        this.homeRedCards = this.event.strHomeRedCards.split(";");

        this.awayDefence = this.event.strAwayLineupDefense.split(";");
        this.awayMidfield = this.event.strAwayLineupMidfield.split(";");
        this.awaySub = this.event.strAwayLineupSubstitutes.split(";");
        this.awayForward = this.event.strAwayLineupForward.split(";");
        this.awayGoals = this.event.strAwayGoalDetails.split(";");
        this.awayYellowCards = this.event.strAwayYellowCards.split(";");
        this.awayRedCards = this.event.strAwayRedCards.split(";");

        console.log(this.lineups);
        console.log(this.event);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
