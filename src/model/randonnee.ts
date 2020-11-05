export class Randonnee {
    private nom: string
    private niveauDifficulte: number
    private ageMini: number
    private ageMaxi: number
    private nbKilometre: number

    public getNom(): string {
        return this.nom
    }
    public setNom(nom: string): void {
        this.nom = nom
    }

    public getNiveauDifficulte(): number {
        return this.niveauDifficulte
    }
    public setNiveauDifficulte(niveau: number): void {
        if (niveau >= 1 && niveau <= 5) {
            this.niveauDifficulte = niveau
            return
        }
        console.log(`Le niveau ${niveau} n'est pas autorisé [1 .. 5]`)
    }

    public getAgeMini(): number {
        return this.ageMini
    }

    public setAgeMini(age: number): void {
        if (age >= 0 && age <= 110) {
            this.ageMini = age
            return
        }
        console.log(`L'âge' ${age} n'est pas autorisé [0 .. 110]`)        
    }

    public getAgeMaxi(): number {
        return this.ageMaxi
    }

    public setAgeMaxi(age: number): void {
        if (age >= 0 && age <= 110) {
            this.ageMaxi = age
            return
        }
        console.log(`L'âge' ${age} n'est pas autorisé [0 .. 110]`)        
    }

    public getNbKilometre(): number {
        return this.nbKilometre
    }

    public setNbKilometre(nbKilometre: number): void {
        if (nbKilometre > 0) {
            this.nbKilometre = nbKilometre
            return
        }
        console.log(`Le nombre de kilomètres doit être positif`) 
    }
}