export class ContainsNumberError extends Error {
    constructor() {
        super('Deve conter pelo menos um número!');
    }
}
