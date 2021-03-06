import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeLettersUp = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%°&*()";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    };
    if (this.includeLettersUp) {
      validChars += lettersUp;
    };
    if (this.includeNumbers) {
      validChars += numbers;
    };
    if (this.includeSymbols) {
      validChars += symbols;
    };

    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    };
    this.password = generatedPassword;
  };

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    };
  };

  onChangeUseLowercaseLetters() {
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseUppercaseLetters() {
    this.includeLettersUp = !this.includeLettersUp;
  };

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  };

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  };
}
