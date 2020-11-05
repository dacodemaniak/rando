export abstract class Liste {
    protected liste: Set<any> = new Set<any>()

    abstract ajouter(element: any): void
    abstract modifier(element: any): void
    abstract supprimer(element: any): void

    recuperer(): any {
        return this.liste
    }
}