import { Component, OnInit } from '@angular/core';
import { customInitFunctions } from './customInitFunctions';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public link_theme=document.querySelector('#theme');
  constructor() { }

  ngOnInit(): void {
    // href="./assets/css/colors/default-dark.css";
    customInitFunctions();
    const url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.link_theme?.setAttribute('href',url);


  }

}
