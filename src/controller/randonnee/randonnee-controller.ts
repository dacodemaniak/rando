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
        html += '<ul>'

        return html
    }

    public detail(rando: Randonnee): string {
        // ? rando fait-il partie de la liste
        if (this.contains(rando)) {
            return `
                <div>
                    <h2>${rando.getNom()}</h2>
                    <ul>
                        <li>Km: ${rando.getNbKilometre()}</li>
                        <li>Niveau : ${rando.getNiveauDifficulte()}</li>
                        <li>Age Minimum : ${rando.getAgeMini()}</li>
                        <li>Age Maximum : ${rando.getAgeMaxi()}</li>
                    </ul>
                </div>
            `
        } else {
            return '<h2>La randonnée demandée ne fait pas partie de la liste</h2>'
        }
        
    }

    private contains(rando: Randonnee): boolean {
        return this.model.recuperer().has(rando)
    }
}