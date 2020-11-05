import { Liste } from './../core/list/liste';
import { Randonneur } from './randonneur';
export class ListeRandonneur extends Liste {

    public ajouter(randonneur: Randonneur): void {
        this.liste.add(randonneur)
    }

    public modifier(randonneur: Randonneur): void {}

    public afficherListe(): string {
        let liste: string = "Liste des randonneurs\n\n"

        this.liste.forEach((randonneur) => {
            liste += randonneur.getNom() + '\n' 
        })

        return liste
    }

   
}