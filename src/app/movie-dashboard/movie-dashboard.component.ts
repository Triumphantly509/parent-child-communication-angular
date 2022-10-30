import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  myFavoriteMovies = ['Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone"];

  selectedMovieToWatch(data: string){
    debugger;
    alert(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
