import { Randonnee } from "../../../model/randonnee";
import { AsListStrategyInterface } from "../../../core/strategy/as-list-strategy-interface";

export class TitleNiveauKilometreStrategy implements AsListStrategyInterface<Randonnee> {
    
    asList(element: Randonnee): string {
        return `<li><span>${element.getNom()}</span> <span>(${element.getNiveauDifficulte()})</span> <span>(${element.getNbKilometre()} Km)</span></li> `
    }
}