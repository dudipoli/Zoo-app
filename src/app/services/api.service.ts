import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../classes/animal';


interface AuthResponse {
  token: string,
  userName: string
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public Login(userInput: User) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      })
    };
    return this.httpClient.post<AuthResponse>("https://localhost:44308/v1/Authentication/Login", userInput, options)
  };

  public GetAnimals() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.get<Animal>("https://localhost:44308/v1/Animals/GetAnimals", options);
  };

  public UpdateAninmal(animalDetails: Animal) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      })
    };
    return this.httpClient.post<Animal>("https://localhost:44308/v1/Animals/UpdateAnimal", animalDetails, options);
  };
}
