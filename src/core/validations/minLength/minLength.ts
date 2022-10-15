import { MinLengthError } from './MinLengthError';

type paramsType = {
    readonly value: {
        readonly length: number
    };
    readonly minLength: number;
}

export function minLength({ value, minLength }: paramsType) {
    if (value.length < minLength)
        throw new MinLengthError(minLength);
}
