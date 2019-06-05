import { Component } from '@angular/core';
import { Controller } from 'src/app/components/controller';
import { Document, Empty, Profile } from 'src/app/components/entities';
import { IonSearchbar } from '@ionic/angular';
import { ProfileService } from '../profiles.service';
import { ProfilesAdminPage } from '../admin/profiles-admin.page';
import { Util } from 'src/app/components/util';

@Component({ selector: 'app-profiles-list', templateUrl: 'profiles-list.page.html' })
export class ProfilesListPage {
    constructor(private controller: Controller, private service: ProfileService) {
        this.service.getProfiles().subscribe(res => {
            this.allProfiles = res;
            this.profiles = res;
        });
    }
    public allProfiles: Document<Profile>[];
    public profiles: Document<Profile>[];
    public async adminProfile(document?: Document<Profile>) { (await this.controller.presentModal(ProfilesAdminPage, { 'profile': document || Empty.profile(), 'profiles': this.allProfiles }, () => { })).present(); }
    public cleanSearchbar() { this.profiles = this.allProfiles; }
    public info() { this.controller.presentAlert('Perfiles', 'A los siervos se le asignan <b>perfiles</b> para definir sus coordinadores y gestionar sus permisos dentro de la aplicación.'); }
    public search(searchbar: IonSearchbar) { this.profiles = Util.search(this.allProfiles, searchbar.value); }
}
