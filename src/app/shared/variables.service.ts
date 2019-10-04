import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  public readonly _omdbMovies = "https://www.omdbapi.com/?";
  public readonly _apiKey = "&apikey=6f79e721";
  public readonly _allMovies = "s=money&Type=movie&y=2019";
  public readonly _pickedMovie = "i=";
  public readonly _searchMovies = "s=";
  public noPic: string = 'assets/images/no_images.png';


  constructor() { }

}
