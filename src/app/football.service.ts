import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FootballService {
  leagueDetails = "https://www.thesportsdb.com/api/v1/json/1/lookupleague.php";
  leagueTable = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php";
  teamDetails = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php";
  allPlayers =
    "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php";
  player = "https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php";
  formerTeams =
    "https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php";
  playerTrophy = "https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php";

  constructor(private http: HttpClient) {}

  getLeagueDetails(id: any) {
    return this.http.get(this.leagueDetails, {
      params: {
        id: id
      }
    });
  }

  getLeagueTable(id: any) {
    return this.http.get(this.leagueTable, {
      params: {
        l: id,
        s: "1819"
      }
    });
  }

  getTeamDetails(id: any) {
    return this.http.get(this.teamDetails, {
      params: {
        id: id
      }
    });
  }

  getTeamPlayers(id: any) {
    return this.http.get(this.allPlayers, {
      params: {
        id: id
      }
    });
  }

  getPlayerDetails(id: any) {
    return this.http.get(this.player, {
      params: {
        id: id
      }
    });
  }

  getPlayerFormerTeam(id) {
    return this.http.get(this.formerTeams, {
      params: {
        id: id
      }
    });
  }

  getPlayerTrophy(id) {
    return this.http.get(this.playerTrophy, {
      params: {
        id: id
      }
    });
  }
}
