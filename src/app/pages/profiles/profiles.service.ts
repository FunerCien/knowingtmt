import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Document, Profile } from 'src/app/components/entities';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Util } from 'src/app/components/util';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private firestore: AngularFirestore) {
        this.collection = this.firestore.collection<Profile>('profiles');
        this.profiles = this.collection.snapshotChanges().pipe(map(pro => {
            return Util.sort(pro.map(p => {
                const data = p.payload.doc.data();
                const id = p.payload.doc.id;
                let document: Document<Profile> = { id: id, data: p.payload.doc.data() };
                document.data.toString = () => data.name;
                return document;
            }));
        }));
    }
    private collection: AngularFirestoreCollection<Profile>;
    private profiles: Observable<Document<Profile>[]>;
    public getProfiles(): Observable<Document<Profile>[]> { return this.profiles; }
    public removeProfile(id: string) { return this.collection.doc(id).delete(); }
    public saveProfile(document: Document<Profile>): Promise<any> {
        if (!document.id) return this.collection.add(document.data);
        else return this.collection.doc(document.id).update(document.data);
    }
}