export class EmailFormatError extends Error {
    constructor() {
        super('Deve ser um e-mail válido!');
    }
}
