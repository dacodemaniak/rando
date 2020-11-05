import { Liste } from "./../../core/list/liste";
import { ListeRandonnee } from "./../../model/liste-randonnee";

export class RandonneeController {
    private model: Liste
    public constructor(model: ListeRandonnee) {
        console.log('Bonjour je suis le constructeur de RandonneeController')
        this.model = model
    }
}