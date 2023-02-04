import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  // path vetification
  protected route = window.location.href.search("/auth") === -1;

  // Login verification
  protected isLogged = localStorage.getItem("isLogged") === "true" ? true : false;

  // Name from Local Storage
  protected locaSName = localStorage.getItem("userName")?.toString();
  protected userName = this.locaSName?.charAt(0).toUpperCase().concat(this.locaSName.slice(1));

  showMenu() {
    (document.querySelector(".realMenu") as HTMLElement).style.display = "inline";
  }

  hideMenu() {
    (document.querySelector(".realMenu") as HTMLElement).style.display = "none";
  }

}
