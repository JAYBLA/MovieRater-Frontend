import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from 'src/app/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='http://127.0.0.1:8000/movierater/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:'Token 4ce7b3fb615330670ba873e80c69c05c2f1aad85'
  })

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.baseUrl, {headers:this.headers});
  }
}
