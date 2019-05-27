import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballService } from "../football.service";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.css"]
})
export class PlayerDetailsComponent implements OnInit {
  playerId = this.route.snapshot.params.id;
  player_details: any;
  honours: any[] = [];
  formerTeams: any[] = [];

  constructor(public route: ActivatedRoute, private player: FootballService) {}

  ngOnInit() {
    this.player.getPlayerDetails(this.playerId).subscribe(
      (res: any) => {
        this.player_details = res.players[0];
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    this.player.getPlayerTrophy(this.playerId).subscribe(
      (res: any) => {
        this.honours = res.honors;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
