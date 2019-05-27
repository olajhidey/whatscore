import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { FormControl } from "@angular/forms";
import { HomeService } from "../home.service";
import { FootballService } from "../football.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  today: any[] = [];
  sports: any[] = [];
  lineups: string[] = [];
  events: any;
  sport: string;
  date = new FormControl("");

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

  constructor(
    private home: HomeService,
    private route: Router,
    private football: FootballService
  ) {}

  ngOnInit() {
    this.home.getTodayMatches("soccer").subscribe(
      (res: any) => {
        this.today = res.events;
        console.log(this.today);
      },
      err => {
        console.log(err);
      }
    );

    this.home.getAllSports().subscribe(
      (res: any) => {
        this.sports = res.sports;
      },
      err => {
        console.log(err);
      }
    );
  }

  onItemChange(value: any) {
    this.sport = value;
    console.log(value);
  }

  doSearch(date) {
    console.log(date.value);
    if (date.value == null || this.sport == undefined) {
      alert("Please select the right criteria for search");
    } else {
      this.home.getSportWeekMatches(date.value, this.sport).subscribe(
        (res: any) => {
          this.today = res.events;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  openEvent(id) {
    this.home.getEventDetails(id).subscribe(
      (res: any) => {
        this.events = res.events[0];

        this.football.getLeagueTable(this.events.idLeague).subscribe(
          (res: any) => {
            this.tables = res.table;
          },
          err => {
            console.log(err);
          }
        );

        this.homeDefence = this.events.strHomeLineupDefense.split(";");
        this.homeMidfield = this.events.strHomeLineupMidfield.split(";");
        this.homeSub = this.events.strHomeLineupSubstitutes.split(";");
        this.homeForward = this.events.strHomeLineupForward.split(";");
        this.homeGoals = this.events.strHomeGoalDetails.split(";");
        this.homeYellowCards = this.events.strHomeYellowCards.split(";");
        this.homeRedCards = this.events.strHomeRedCards.split(";");

        this.awayDefence = this.events.strAwayLineupDefense.split(";");
        this.awayMidfield = this.events.strAwayLineupMidfield.split(";");
        this.awaySub = this.events.strAwayLineupSubstitutes.split(";");
        this.awayForward = this.events.strAwayLineupForward.split(";");
        this.awayGoals = this.events.strAwayGoalDetails.split(";");
        this.awayYellowCards = this.events.strAwayYellowCards.split(";");
        this.awayRedCards = this.events.strAwayRedCards.split(";");

        console.log(this.lineups);
        console.log(this.events);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  viewClub(id: any) {
    this.route.navigate(["/club-details", id]);
  }
}
