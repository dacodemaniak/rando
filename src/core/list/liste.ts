export abstract class Liste {
    private liste: Set<any>

    abstract ajouter(element: any): void
    abstract modifier(element: any): void
    abstract supprimer(element: any): void

    recuperer(): any {
        return this.liste
    }
}