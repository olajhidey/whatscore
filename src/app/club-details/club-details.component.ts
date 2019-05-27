import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FootballService } from "../football.service";

@Component({
  selector: "app-club-details",
  templateUrl: "./club-details.component.html",
  styleUrls: ["./club-details.component.css"]
})
export class ClubDetailsComponent implements OnInit {
  teamId = this.route.snapshot.params.id;
  team: any;
  players: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private teams: FootballService
  ) {}

  ngOnInit() {
    this.teams.getTeamDetails(this.teamId).subscribe(
      (res: any) => {
        this.team = res.teams[0];
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    this.teams.getTeamPlayers(this.teamId).subscribe(
      (res: any) => {
        this.players = res.player;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  viewPlayer(id: any) {
    this.router.navigate(["/player-details", id]);
  }
}
