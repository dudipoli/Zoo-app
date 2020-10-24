import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Animal } from '../classes/animal';
import { interval } from 'rxjs';

@Component({
  selector: 'app-zoo-catalog',
  templateUrl: './zoo-catalog.component.html',
  styleUrls: ['./zoo-catalog.component.css']
})

export class ZooCatalogComponent implements OnInit {
  animalDetails: Animal
  animalName: string;
  animalQuantity: number;
  animals: Animal;
  animalsCount: number;
  isEditMode: boolean = false;
  enableEditIndex: number;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.GetAllAnimals();
    interval(60000).subscribe(() => this.GetAllAnimals());
  }

  updateName(name: string) {
    this.animalName = name;
  }

  updateQuantity(num:number) {
    this.animalQuantity = num;
  }

  enableEditMethod(animal:Animal, i) {
    this.isEditMode = true;
    this.enableEditIndex = i;
    this.animalName = animal.name;
    this.animalQuantity=animal.quantity;
  }

  GetAllAnimals() {
    this.isLoading = true;
    this.apiService.GetAnimals().subscribe((res) => {
      this.animals = res;
      this.animalsCount = Object.keys(this.animals).length;
      this.isLoading = false;
    });
  }

  AddOrUpdateAnimal(id?: number) {
    if (this.animalName && this.animalName !== "" && this.animalQuantity && this.animalQuantity > -1) {
      this.animalDetails = new Animal();
      this.animalDetails.id = id ? id : this.animalsCount + 1;
      this.animalDetails.name = this.animalName;
      this.animalDetails.quantity = this.animalQuantity;

      this.apiService.UpdateAninmal(this.animalDetails).subscribe((res) => {
        this.animals = res;
      },
        (error) => {
          console.log(error);
        });
    }
    this.animalName = "";
    this.animalQuantity = null;
    this.isEditMode = false;
    this.enableEditIndex = null;
  }
}
