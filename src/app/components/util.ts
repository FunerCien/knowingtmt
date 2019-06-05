import { Document } from './entities';

export class Util {
    public static search(list: Array<Document<any>>, value: string): Array<Document<any>> { return this.sort(list.filter(l => l.data.toString().toLowerCase().includes(value.toLowerCase()))); }
    public static sort(list: any[]): any[] {
        return list.sort((e1, e2) => {
            let entity1 = e1.data.toString();
            let entity2 = e2.data.toString();
            if (entity1 > entity2) return 1;
            else if (entity1 < entity2) return -1;
            else return 0;
        });;
    }
}