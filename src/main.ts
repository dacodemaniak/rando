import { ListeRandonnee } from './model/liste-randonnee';
import { Randonneur } from './model/randonneur';

import * as $ from 'jquery'
import * as M from 'materialize-css'

import './scss/main.scss'
import { Randonnee } from './model/randonnee';
import { RandonneeController } from './controller/randonnee/randonnee-controller';
import { TitleOnlyStrategy } from './controller/randonnee/strategies/title-only-strategy';
import { TitleKilometreStrategy } from './controller/randonnee/strategies/title-kilometre-strategy';
import { TitleNiveauKilometreStrategy } from './controller/randonnee/strategies/title-niveau-kilometre-strategy';
import { RandonneeFactory } from './model/factory/randonnee-factory';

console.log('DOM is loading...')
/**
 * @name Main
 * @author IDea Factory - Juil. 2020 - jean-luc.a@ideafactory.fr
 * @version 1.0.0
 * @abstract Main application entry point
 */
class Main {
    public constructor() {
        console.log('Application is ready')

        const jeanlouis = new Randonneur()
        jeanlouis.setNom('Jean-Louis')
        jeanlouis.setAge(50)
        jeanlouis.setFamille(true)

        const jeanluc = new Randonneur()
        jeanluc.setNom('Jean-Luc')
        jeanluc.setAge(52)
        jeanluc.setFamille(false)

        // Créer deux randonnées
        const rando1 = new RandonneeFactory().build(
            'PR20',
            5,
            0,
            55,
            3
        )

        const rando2 = new Randonnee()
        rando2.setNom('PR21')
        rando2.setNiveauDifficulte(3)
        rando2.setNbKilometre(21)
        rando2.setAgeMini(15)
        rando2.setAgeMaxi(35)

        const rando3: Randonnee = new RandonneeFactory().build(
            'PR3', 4, 0, 77, 15
        )

        const rando4: Randonnee = new RandonneeFactory().build(
            'PR4', 5
        )

        // Créer une instance de liste de randonnées
        const liste = new ListeRandonnee()
        liste.ajouter(rando1)
        liste.ajouter(rando2)
        liste.ajouter(rando3)
        liste.ajouter(rando4)

        // Instance de RandonneeController
        const randonneeController = new RandonneeController(liste)
        randonneeController.setStrategy(new TitleNiveauKilometreStrategy())

        // Récupérer un objet du document HTML (Interface Homme Machine)
        const app: HTMLElement = document.querySelector('[App]')
        app.innerHTML = randonneeController.asListe()
        app.innerHTML = app.innerHTML + randonneeController.detail(rando2)
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    new Main()
})

