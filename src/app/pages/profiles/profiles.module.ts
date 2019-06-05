import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProfilesAdminPage } from './admin/profiles-admin.page';
import { ProfilesListPage } from './list/profiles-list.page';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ProfilesAdminPage, ProfilesListPage],
    entryComponents: [ProfilesAdminPage],
    imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, RouterModule.forChild([
        { path: '', pathMatch: 'full', redirectTo: 'list' },
        { component: ProfilesListPage, path: 'list' }
    ])]
})
export class ProfilesModule { }
