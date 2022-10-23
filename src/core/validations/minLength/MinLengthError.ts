export class MinLengthError extends Error {
    constructor(readonly minLength: number) {
        super(`O tamanho mínimo é ${minLength} caracteres!`);
    }
}
