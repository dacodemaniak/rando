import { ListeRandonnee } from './model/liste-randonnee';
import { Randonneur } from './model/randonneur';

import * as $ from 'jquery'
import * as M from 'materialize-css'

import './scss/main.scss'
import { Randonnee } from './model/randonnee';

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
        const rando1 = new Randonnee()
        rando1.setNom('PR20')
        rando1.setNbKilometre(20)

        const rando2 = new Randonnee()
        rando2.setNom('PR21')
        rando2.setNbKilometre(21)

        // Créer une instance de liste de randonnées
        const liste = new ListeRandonnee()
        liste.ajouterRandonnee(rando1)
        liste.ajouterRandonnee(rando2)

        // Afficher dans la console les randonnées
        console.log(liste.afficherListe())

        const app: HTMLElement = document.querySelector('[App]')
        
        app.append(
            liste.render()
        )
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    new Main()
})

