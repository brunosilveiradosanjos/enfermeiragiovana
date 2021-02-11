import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private header: Array<any> = [
    { isActive: 'active', link: "#", name: "Menu" },
    { isActive: '', link: "#sobre", name: "Sobre" },
    { isActive: '', link: "#habilidades", name: "Habilidades" },
    { isActive: '', link: "#experiencia", name: "Experiência" },
    { isActive: '', link: "#contato", name: "Contato" }
  ];

  private toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeToggle() {
    this.toggle = this.toggle ? false : true;
    console.log('this.toggle', this.toggle);
  }

  // MENU SHOW
  changeActiveClass(item) {

    for (const key in this.header) {
      if (Object.prototype.hasOwnProperty.call(this.header, key)) {
        if (this.header[key].name == item) {
          this.header[key].isActive = 'active';
        }
        else {
          this.header[key].isActive = '';
        }
      }
    }
  }
}
