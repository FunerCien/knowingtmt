import { Component } from '@angular/core';
import { Controller } from './components/controller';
import { MenuController, Platform } from '@ionic/angular';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  constructor(private controller: Controller, private menu: MenuController, private platform: Platform, private router: Router, private splashScreen: SplashScreen, private statusBar: StatusBar) { this.initializeApp(); }
  public menus = [
    { icon: 'people', title: 'Personas', url: '/people' },
    { icon: 'code', title: 'Perfiles', url: '/profiles' },
    { icon: 'glasses', title: 'Eventos', url: '/events' }
  ];
  public initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.hide();
    });
  }
  public ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.menu.enable(event.url !== '/');
        this.menus.map(o => o['active'] = (event.url.split("/")[1] === o.url.split("/")[1]));
      }
    });
  }
  public signOff() {
    this.menu.close();
    this.controller.presentAlert('¿Cerrar sesión?', '', [{ cssClass: 'danger', handler: () => this.router.navigateByUrl("/"), text: 'Salir' }]);
  }
  public version() {
    this.menu.close();
    this.controller.presentAlert('v0.0.002 BETA', 'Versión inestable');
  }
}
