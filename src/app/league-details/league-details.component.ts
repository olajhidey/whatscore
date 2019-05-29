import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FootballService } from "../football.service";
import { HomeService } from "../home.service";

@Component({
  selector: "app-league-details",
  templateUrl: "./league-details.component.html",
  styleUrls: ["./league-details.component.css"]
})
export class LeagueDetailsComponent implements OnInit {
  leagueID = this.router.snapshot.params.id;
  league: any;
  league_table: any;

  matchday: any;
  seasons: any;
  events: any;

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
  team: any;

  constructor(
    private router: ActivatedRoute,
    private details: FootballService,
    private route: Router,
    private home: HomeService
  ) {}

  ngOnInit() {
    console.log(this.leagueID);
    this.details.getLeagueDetails(this.leagueID).subscribe(
      (res: any) => {
        this.league = res.leagues[0];

        console.log(this.league);
      },
      err => {
        console.log(err);
      }
    );

    this.details
      .getSpecificMatchdaysForLeague(this.leagueID, "38", "1819")
      .subscribe(
        (res: any) => {
          this.events = res.events;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

    // this.details.getAllSeasonForLeague(this.leagueID).subscribe(
    //   (res: any) => {
    //     this.seasons = res
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.details.getLeagueTable(this.leagueID).subscribe(
      (res: any) => {
        console.log(res);
        this.league_table = res.table;
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  viewClub(id: any) {
    this.route.navigate(["/club-details", id]);
  }

  counter(i) {
    return Array(i);
  }

  selectMatchday(md) {
    let matchday = md + 1;

    this.details
      .getSpecificMatchdaysForLeague(this.leagueID, matchday, "1819")
      .subscribe(
        (res: any) => {
          this.events = res.events;
        },
        err => {
          console.log(err);
        }
      );
  }
}
