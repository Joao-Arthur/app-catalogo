export class MinLengthError extends Error {
    constructor(
        readonly field: string,
        readonly length: number,
    ) {
        super(`"field" tem o tamanho mínimo de ${length} caracteres`);
    }
}
