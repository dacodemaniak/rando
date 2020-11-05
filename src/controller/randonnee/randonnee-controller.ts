import { Randonnee } from "./../../model/randonnee";
import { Liste } from "./../../core/list/liste";
import { ListeRandonnee } from "./../../model/liste-randonnee";
import { AsListStrategyInterface } from "./../../core/strategy/as-list-strategy-interface";

export class RandonneeController {
    private model: Liste
    private strategy: AsListStrategyInterface<Randonnee>

    public constructor(model: ListeRandonnee) {
        console.log('Bonjour je suis le constructeur de RandonneeController')
        this.model = model
    }

    public setStrategy(strategy: AsListStrategyInterface<Randonnee>): void {
        this.strategy = strategy
    }

    public asListe(): string {
        let html: string = '<ul>'

        this.model.recuperer().forEach((element: Randonnee) => {
            html += this.strategy.asList(element)
        });

        return html
    }
}