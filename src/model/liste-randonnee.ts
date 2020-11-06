import { Liste } from './../core/list/liste';
import { Randonnee } from './randonnee';
export class ListeRandonnee extends Liste {

    public ajouter(randonnee: Randonnee): void {
        if (randonnee != null) {
            this.liste.add(randonnee)
        }
    }

    public modifier(randonnee: Randonnee): void {}

}