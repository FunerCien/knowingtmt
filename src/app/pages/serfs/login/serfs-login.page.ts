import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ selector: 'app-serfs-login', templateUrl: 'serfs-login.page.html' })
export class SerfsLoginPage {
  constructor(public router: Router) { }
  public walkInto() { this.router.navigateByUrl("/profiles"); }
}
