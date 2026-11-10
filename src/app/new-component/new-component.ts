import { Component } from '@angular/core';

interface Object {
  id: number;
  name: string;
}

@Component({ 
  imports: [],
  selector: 'app-new-component',
  styleUrl: './new-component.scss',
  templateUrl: './new-component.html',
})

export class NewComponent {
  
  exampleArray: Object[] = [{id: 1, name: "test1"}, {id: 2, name: "test2"}, {id: 3, name: "bun, patty, lettuce, cheese, onion, tomato, pickle, mustard, ketchup"}];
  
  //let exampleArray = new Set([Object1, Object2, hamburger]);
  //let pets = ["Cat", "Dog", "Hamster"];
  //const exampleArray2 = [Object1.name, Object2.id, hamburger.name];
  // arr = [10, 22, 34];
  // for (int _i = 0; _i < pets.length; _i++) {
  //   console.log(_i); // "Cat", "Dog", "Hamster"
  // }

  // pets = new Set(["Cat", "Dog", "Hamster"]);
  // //pets["species"] = "mammals";
  // for (let pet in pets) {
  //   console.log(pet); // "species"
  // }
  // for (let pet of pets) {
  //   console.log(pet); // "Cat", "Dog", "Hamster"
  // }

  // for(let i: number = 0; i < 3; i++){
  //   console.log(i);
  // }
}

// let Object1 = {
//     id: 1,
//     name: "test1"
//   }

// let Object2 = {
//     id: 2,
//     name: "test2"
//   }

// let hamburger = {
//     id: 3,
//     name: "bun, patty, lettuce, cheese, onion, tomato, pickle, mustard, ketchup"
//   }
