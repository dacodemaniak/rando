import { Randonnee } from "../randonnee";
import { FactoryBuilderInterface } from "./../../core/factory/factory-builder-interface";

export class RandonneeFactory implements FactoryBuilderInterface<Randonnee> {
    build(...args: any[]): Randonnee {
        if (args.length === 5) {
            // A priori, c'est bon, je peux continuer
            const rando: Randonnee = new Randonnee()
            rando.setNom(args[0])
            rando.setNiveauDifficulte(args[1])
            rando.setAgeMini(args[2])
            rando.setAgeMaxi(args[3])
            rando.setNbKilometre(args[4])
            return rando // Retourne l'objet rando complet
        }

        return null
    }

}