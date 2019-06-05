import { Component, Input } from '@angular/core';
import { Controller } from 'src/app/components/controller';
import { Document, Profile } from 'src/app/components/entities';
import { FormGroup } from '@angular/forms';
import { Forms } from 'src/app/components/form';
import { ModalController } from '@ionic/angular';
import { ProfileService } from '../profiles.service';

@Component({ selector: 'app-profiles-admin', templateUrl: './profiles-admin.page.html' })
export class ProfilesAdminPage {
    constructor(private controller: Controller, private modalController: ModalController, private service: ProfileService) { }
    @Input() public profile: Document<Profile>;
    public form: FormGroup;
    public close() { this.modalController.dismiss(); }
    public delete(document: Document<Profile>) { this.controller.presentAlert(`¿Eliminar ${document.data}?`, "Una vez eliminado no se podrá recuperar", [{ cssClass: "danger", handler: () => this.service.removeProfile(document.id).then(() => this.modalController.dismiss()), text: "Eliminar" }]) }
    public ngOnInit() { this.form = Forms.getProfileForm(this.profile); }
    public save() {
        let document: Document<Profile> = Forms.getProfileDoc(this.form)
        this.form = Forms.getProfileForm(document);
        if (!this.form.invalid) this.service.saveProfile(document).then(() => this.modalController.dismiss());
        else this.controller.presentToast("El nombre del perfil es necesario");
    }
}