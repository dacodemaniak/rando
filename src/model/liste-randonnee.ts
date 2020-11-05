import { Liste } from './../core/list/liste';
import { Randonnee } from './randonnee';
export class ListeRandonnee extends Liste {

    public ajouter(randonnee: Randonnee): void {
        this.liste.add(randonnee)
    }

    public modifier(randonnee: Randonnee): void {}

    /**
     * Override de méthode
     * @param randonnee 
     */
    public supprimer(randonnee: Randonnee): void {
        console.log('Non, je ne supprimerai pas !')
    }
}