import { Component, OnInit } from '@angular/core';

// Api Service
import { ApiService} from 'src/app/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  movies:any =[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      data=>{
        this.movies = data;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
