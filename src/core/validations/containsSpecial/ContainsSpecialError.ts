export class ContainsSpecialError extends Error {
    constructor() {
        super('Deve conter pelo menos um caracter especial!');
    }
}
