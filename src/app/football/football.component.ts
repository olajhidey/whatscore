import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-football",
  templateUrl: "./football.component.html",
  styleUrls: ["./football.component.css"]
})
export class FootballComponent implements OnInit {
  football: any[] = [];
  data: any[] = [];
  constructor(private league: HomeService, private router: Router) {}

  ngOnInit() {
    this.league.getAllLeagues().subscribe(
      (res: any) => {
        this.football = res.leagues;

        this.football.filter(data => {
          if (data.strSport == "Soccer") {
            this.data.push(data);
          }
        });

        console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }

  viewDetails(id) {
    this.router.navigate(["/league-details", id]);
  }
}
