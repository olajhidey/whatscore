import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-basketball",
  templateUrl: "./basketball.component.html",
  styleUrls: ["./basketball.component.css"]
})
export class BasketballComponent implements OnInit {
  data: any[] = [];
  basketball: any[] = [];

  constructor(private home: HomeService, private router: Router) {}

  ngOnInit() {
    this.home.getAllLeagues().subscribe(
      (res: any) => {
        this.data = res.leagues;

        this.data.filter(ball => {
          if (ball.strSport == "Basketball") {
            this.basketball.push(ball);
          }
        });
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
