import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    protected language: string = 'en';

    protected changeLanguage(lang: string) {
        this.language = lang;
    }
}
