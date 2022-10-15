export class RequiredError extends Error {
    constructor() {
        super('É obrigatório informar o campo!');
    }
}
