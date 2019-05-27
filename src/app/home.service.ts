import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  weekDayMatch = "https://www.thesportsdb.com/api/v1/json/1/eventsday.php";

  allSport = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php";

  allLeagues = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";

  eventDetails = "https://www.thesportsdb.com/api/v1/json/1/lookupevent.php";

  constructor(private http: HttpClient) {}

  getTodayMatches(sport: string) {
    let date = moment();

    let year = date.year();
    let month = (date.month() + 1).toString();
    let day = date.date().toString();

    if (date.month() < 10) {
      month = "0" + (date.month() + 1);
    }

    if (date.date() < 10) {
      day = "0" + date.date();
    }

    console.log(day);

    let now = year + "-" + month + "-" + day;

    let url =
      "https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" +
      now +
      "&s=Soccer";
    return this.http.get(url);
  }

  getAllSports() {
    return this.http.get(this.allSport);
  }

  getAllLeagues() {
    return this.http.get(this.allLeagues);
  }

  getSportWeekMatches(date, sport) {
    return this.http.get(this.weekDayMatch, {
      params: {
        d: date,
        s: sport
      }
    });
  }

  getEventDetails(id: any) {
    return this.http.get(this.eventDetails, {
      params: {
        id: id
      }
    });
  }
}
