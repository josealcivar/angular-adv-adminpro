import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public link_theme=document.querySelector('#theme');
  constructor() { }


  changeTheme(theme: string)
  {
    console.log(theme);
  
    const url=`./assets/css/colors/${theme}.css`;

    this.link_theme?.setAttribute('href',url);
    localStorage.setItem('theme',url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme =element.getAttribute('data-theme');

      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.link_theme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        element.classList.add('working');
      }


    });
  }
}
