import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence({ min: 2, max: 4 });
  isSuccessVisible = false;
  enteredText = '';
  className = '';

  // onInput(value: string) {
  //   this.enteredText = value;
  //   if (this.randomText == this.enteredText) this.isSuccessVisible = true;
  // }

  onInput(value: string) {
    this.enteredText = value;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
