import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FootballService } from "../football.service";

@Component({
  selector: "app-league-details",
  templateUrl: "./league-details.component.html",
  styleUrls: ["./league-details.component.css"]
})
export class LeagueDetailsComponent implements OnInit {
  leagueID = this.router.snapshot.params.id;
  league: any;
  league_table: any;

  constructor(
    private router: ActivatedRoute,
    private details: FootballService,
    private route: Router
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
}
