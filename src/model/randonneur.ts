export class Randonneur {
    private nom: string
    private age: number
    private famille: boolean

    public getNom(): string {
        return this.nom
    }

    public setNom(nom: string): void {
        this.nom = nom
    }

    public getAge(): number {
        return this.age
    }

    public setAge(age: number): void {
        if (age >= 0 && age <= 110) {
            this.age = age
            return
        }
        console.log(`L'âge ${age} n'est pas compris entre 0 et 110`)
    }

    public getFamille(): boolean {
        return this.famille
    }

    public setFamille(famille: boolean): void {
        this.famille = famille
    }
}