export class Empty {
    public static profile(): Document<Profile> {
        return {
            id: null,
            data: { name: null }
        }
    }
}
export interface Document<E> { id?: string; data: E; }
export interface Profile { name: string; }