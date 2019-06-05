import { Document, Profile } from './entities';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Forms {
    static getProfileDoc(form: FormGroup): Document<Profile> {
        return { id: form.value.id, data: form.value };
    }
    static getProfileForm(profile: Document<Profile>): FormGroup { return new FormGroup({ id: new FormControl(profile.id), name: new FormControl(profile.data.name ? profile.data.name.trim() : "", [Validators.required, Validators.minLength(1)]) }); }
}