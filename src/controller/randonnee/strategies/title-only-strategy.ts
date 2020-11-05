import { Randonnee } from "./../../../model/randonnee";
import { AsListStrategyInterface } from "./../../../core/strategy/as-list-strategy-interface";

export class TitleOnlyStrategy implements AsListStrategyInterface<Randonnee> {
    
    asList(element: Randonnee): string {
        return `<li><span>${element.getNom()}</span></li>`
    }

}