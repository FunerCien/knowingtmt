import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Controller } from './components/controller';
import { ItemMenuComponent } from './components/menu/item-menu';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ProfilesModule } from './pages/profiles/profiles.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from "../environments/environment.prod";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ItemMenuComponent],
  imports: [AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebaseConfig), AppRoutingModule, BrowserModule, IonicModule.forRoot(), ProfilesModule],
  providers: [AngularFirestore, Controller, SplashScreen, StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule { }
