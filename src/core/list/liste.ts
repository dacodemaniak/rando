export abstract class Liste {
    protected liste: Set<any> = new Set<any>()

    public abstract ajouter(element: any): void
    public abstract modifier(element: any): void
    
    public supprimer(element: any): void {
        this.liste.delete(element)
    }

    public recuperer(): any {
        return this.liste
    }

    public getNbElement(): number {
        return this.liste.size
    }

}