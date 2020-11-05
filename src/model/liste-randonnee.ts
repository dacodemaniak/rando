import { Randonnee } from './randonnee';
export class ListeRandonnee {
    private randonnees: Set<Randonnee> = new Set<Randonnee>()

    public ajouterRandonnee(randonnee: Randonnee): void {
        this.randonnees.add(randonnee)
    }

    public afficherListe(): string {
        let liste: string = "Liste des randonnées\n\n"

        this.randonnees.forEach((randonnee) => {
            liste += randonnee.getNom() + ' (' + randonnee.getNbKilometre() + ' Km)\n' 
        })

        return liste
    }

    public render(): HTMLElement {
        const title: HTMLElement = document.createElement('h1')
        title.textContent = 'Liste des randonnées'

        return title
    }
    
}